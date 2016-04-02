from setuptools import setup

setup(
    name='lektor-trim-and-strip',
    version='0.1',
    author=u'item4',
    author_email='item4_hun@hotmail.com',
    license='MIT',
    py_modules=['lektor_trim_and_strip'],
    entry_points={
        'lektor.plugins': [
            'trim-and-strip = lektor_trim_and_strip:TrimAndStripPlugin',
        ]
    }
)
