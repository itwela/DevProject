import pkg_resources

libraries = [
    'streamlit',
    'python-decouple',
    'Pillow',
    'annotated-text',
    'os',
    'openai',
    'python-dotenv'
]

for library in libraries:
    try:
        version = pkg_resources.get_distribution(library).version
        print(f'{library}: {version}')
    except pkg_resources.DistributionNotFound:
        print(f'{library}: Not installed')