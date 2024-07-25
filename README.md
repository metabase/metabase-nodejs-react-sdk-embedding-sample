# Metabase Embedding SDK for React sample

You'll need a Pro or Enterprise version of Metabase 50 up and running. If you're not sure where to start, sign up for [Pro Cloud](https://www.metabase.com/pricing).

> [!IMPORTANT]  
> The SDK is currently only compatible with Metabase 50

## Create .env file
```sh
cp .env.example .env
```

## Adjust URLs
In `.env`, make sure `REACT_APP_METABASE_INSTANCE_URL` and `METABASE_INSTANCE_URL` point to your Metabase instance URL, e.g. `http://localhost:3000`.

## Set up your Metabase

### Enable SSO with JWT

From any Metabase page, click on the **gear** icon in the upper right and select **Admin Settings** > **Settings** > **Authentication**.

On the card that says **JWT**, click the **Setup** button.

### JWT Identity provider URI

In **JWT IDENTITY PROVIDER URI** field, paste  `localhost:9090/sso/metabase`.

### String used by the JWT signing key

Click the **Generate key** button. Copy the key and paste it in your `.env` file into the env var `METABASE_JWT_SHARED_SECRET`. 

## Running the server

### Move into the directory

```sh
cd server
```

### Install packages

```sh
npm install
```

### Starting the server

```sh
npm start
```

## Start the client

### Move into the directory

In a different terminal
```sh
cd client
```
### Install dependencies

```sh
npm install
```

### Start the app

```sh
npm start
```
Your browser should automatically open the app. By default, it runs on [http://localhost:3100](localhost:3100).

## Set up groups and data sandboxing

Check out our [quick start guide](https://www.metabase.com/learn/customer-facing-analytics/interactive-embedding-quick-start) to set up interactive embedding with JWT and data sandboxing.

## Reporting issues

Please report bugs or feature requests as issues in this repository. Please do not report security vulnerabilities on the public GitHub issue tracker. Our Security Policy describes [the procedure](https://github.com/metabase/metabase/security#reporting-a-vulnerability) for disclosing security issues.

## Author

[Metabase](https://metabase.com)

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more info.
