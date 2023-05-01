import asyncio
import os

import httpx
import orjson

token = os.getenv("GITHUB_TOKEN")
headers = {
    "Authorization": f"Bearer {token}",
    "X-GitHub-Api-Version": "2022-11-28",
}
base_url = "https://api.github.com"
cache = {}
results = {}
skip_repo = ("item4")


async def get_repo_info(url, client):
    if url in cache:
        return cache[url]

    resp = await client.get(url)
    data = orjson.loads(resp.content)
    result = {
        "name": data["full_name"],
        "url": data["html_url"],
        "counts": {
            "forks": data["forks_count"],
            "stars": data["stargazers_count"],
            "watchers": data["watchers_count"],
            "network": data["network_count"],
            "subscribers": data["subscribers_count"]
        },
        "topics": data["topics"],
    }
    cache[url] = result
    return result


async def search(client):
    page = 0
    url = "/search/issues"
    params = {
        "q": "author:item4 is:public",
        "per_page": 100,
    }

    while url:
        page += 1
        resp = await client.get(url, params=params)
        params = None
        data = orjson.loads(resp.content)

        url = None

        if "link" in resp.headers:
            links = resp.headers["link"].split(",")
            for link in links:
                if link.endswith('rel="next"'):
                    url = link.removesuffix('>; rel="next"').lstrip(" <")
                    break

        for row in data["items"]:
            repo = await get_repo_info(row["repository_url"], client)
            repo_name = repo["name"]
            if any(repo_name.startswith(x) for x in skip_repo):
                continue
            if repo_name not in results:
                counts = repo["counts"]
                results[repo_name] = {
                    "repo": repo,
                    "items": [],
                }
            results[repo_name]["items"].append({
                "number": row["number"],
                "url": row["html_url"],
            })


async def main():
    async with httpx.AsyncClient(base_url=base_url, headers=headers) as client:
        await search(client)

    with open("results.json", "wb") as f:
        f.write(orjson.dumps(results, option=orjson.OPT_INDENT_2 | orjson.OPT_SORT_KEYS))


asyncio.run(main())
