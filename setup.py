from setuptools import setup, find_packages
from nepal_compliance import __version__ as version
setup(
    name="nepal_compliance",  # The name of your app
    version=version,          # Initial version
    description="A custom app for Nepal compliance in ERPNext",
    author="ERP Org",  # Replace with your name or your organization
    author_email="support@gmail.com",  # Replace with your email
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=install_requires
)
