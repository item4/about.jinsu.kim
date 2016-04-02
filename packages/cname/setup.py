from setuptools import setup

setup(
    name='lektor-cname',
    version='0.1',
    author=u'item4',
    author_email='item4_hun@hotmail.com',
    license='MIT',
    py_modules=['lektor_cname'],
    entry_points={
        'lektor.plugins': [
            'cname = lektor_cname:CnamePlugin',
        ]
    }
)
