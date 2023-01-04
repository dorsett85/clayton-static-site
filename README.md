Professional site with Dotnet Core, Typescript, and Gatsby

https://cphillipsdorsett.com/

## setup

Required software
1. node 18.12.1
2. dotnet core 3.1

### production setup (ssh'd into server as sudo root user 'clayton')

Required software (in addition to those required below the initial setup)
1. nginx

```shell
cd /var/www/
sudo git clone git@github.com:dorsett85/clayton-static-site
sudo chown -R clayton:clayton clayton-static-site/
cd clayton-static-site/

# Build Gatsby
yarn install
yarn build

# Build dotnet
cd server/StaticSiteWebApi/
dotnet build
dotnet publish -c Release
```

*Note: until dotnet is upgraded, the webmanifest file can't be read by
Kestrel. You'll need to go into the public/ directory and change
manifest.webmanifest to manifest.json. Likewise, you'll need to change
the reference to manifest.webmanifest in index.html to manifest.json.
Heres's some shortcut commands:*

```shell
mv public/manifest.webmanifest public/manifest.json
sed -i 's/webmanifest/json/' public/index.html
```

Next up we'll follow the tutorial at this link (starting from "Step 4 — Configuring the Web Server"):

https://www.digitalocean.com/community/tutorials/how-to-deploy-an-asp-net-core-application-with-mysql-server-using-nginx-on-ubuntu-18-04
