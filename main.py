import os, sys

os.environ['DJANGO_SETTINGS_MODULE'] = 'Freya.settings'

from google.appengine.ext.webapp import util
from django.conf import settings

settings._target = None

import django.core.handlers.wsgi
import django.core.signals
import django.db
import django.dispatch.dispatcher

app = django.core.handlers.wsgi.WSGIHandler()


def main():
    util.run_wsgi_app(app)


if __name__ == '__main__':
    main()
