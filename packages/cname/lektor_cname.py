# -*- coding: utf-8 -*-
# -*- coding: utf-8 -*-
from lektor.build_programs import BuildProgram
from lektor.pluginsystem import Plugin
from lektor.sourceobj import VirtualSourceObject
from lektor.utils import build_url


class CNAMESource(VirtualSourceObject):
    def __init__(self, record, **kwargs):
        VirtualSourceObject.__init__(self, record)

    @property
    def path(self):
        return 'CNAME'

    @property
    def url_path(self):
        return build_url([self.parent.url_path, 'CNAME'])


class CNAMEBuildProgram(BuildProgram):
    def produce_artifacts(self):
        self.declare_artifact(
            'CNAME',
            sources=list(self.source.iter_source_filenames()),
        )

    def build_artifact(self, artifact):
        with artifact.open('wb') as f:
            f.write('about.jinsu.kim')


class CnamePlugin(Plugin):
    name = u'CNAME'
    description = u'Make CNAME file for GitHub Pages'

    def on_setup_env(self, **extra):
        self.env.add_build_program(CNAMESource, CNAMEBuildProgram)

        @self.env.generator
        def generate_redirects(source):
            if source.path == '/':
                yield CNAMESource(source)
