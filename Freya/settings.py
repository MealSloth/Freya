from _include.Chimera.Chimera.databases import databases
import sys
import os

git_submodules = [
    '_include/Chimera/',
]

for directory in git_submodules:
    path = os.path.join(directory)
    if path not in sys.path:
        sys.path.append(path)

PROJECT_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

DEBUG = False
TEMPLATE_DEBUG = DEBUG

ADMINS = (
    ('Michael', 'michael@mealsloth.com'),
)

MANAGERS = ADMINS

DATABASES = databases()

ALLOWED_HOSTS = ['127.0.0.1', 'localhost', 'exp.mealsloth.com', 'mealsloth-freya-ap01.appspot.com', ]

TIME_ZONE = 'America/Chicago'

LANGUAGE_CODE = 'en-us'

SITE_ID = 1

USE_I18N = True

USE_L10N = True

USE_TZ = True

LOGIN_URL = '/login/'

MEDIA_ROOT = ''

MEDIA_URL = ''

STATIC_ROOT = ''

STATIC_URL = '/static/'

STATICFILES_DIRS = ()

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#    'django.contrib.staticfiles.finders.DefaultStorageFinder',
)

SECRET_KEY = 've72o5dcbs7fiof7^7ch+bk#%#+4xk0mj8tjj^r0#2!z8vu47='

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    # Uncomment the next line for simple clickjacking protection:
    # 'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'Freya.urls'

WSGI_APPLICATION = 'Freya.wsgi.application'

TEMPLATE_DIRS = (
    os.path.join(PROJECT_PATH, 'templates'),
)

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'Freya',
    'Chimera',
)

SESSION_SERIALIZER = 'django.contrib.sessions.serializers.JSONSerializer'

SESSION_ENGINE = 'django.contrib.sessions.backends.cache'

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}

CACHES = {
    'default': {
        'BACKEND': 'Freya.gae_memcached_cache.GaeMemcachedCache',
        'LOCATION': '127.0.0.1:11211',
    }
}

# For testing authentication
AUTH_TEST_USER_USERNAME = 'authtestuser'
AUTH_TEST_USER_PASSWORD = 's5dfBekmGW48KfNxb7q8Je2N'
