# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin


class TrimAndStripPlugin(Plugin):
    name = u'trim-and-strip'
    description = u'Add trim and strip config to jinja config.'

    def on_setup_env(self, **extra):
        self.env.jinja_env.trim_blocks = True
        self.env.jinja_env.lstrip_blocks = True
