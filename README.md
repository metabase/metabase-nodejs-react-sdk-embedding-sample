# Metabase embedding SDK for React sample application

You'll need a Pro or Enterprise version of Metabase 50 up and running. If you're not sure where to start, sign up for [Pro Cloud](https://www.metabase.com/pricing).

> [!IMPORTANT]
> The SDK is currently only compatible with Metabase v1.50 or higher

## Create `.env` file

```sh
cp .env.example .env
```

## Adjust URLs

In `.env`, make sure your `VITE_METABASE_INSTANCE_URL` and `METABASE_INSTANCE_URL` point to your Metabase instance URL, e.g. `http://localhost:3000`.

## Set up your Metabase

- [Run Metabase Pro on a Cloud plan (with a free trial)](https://www.metabase.com/pricing)
- Run Metabase Enterprise Edition locally. This sample app is compatible with [Metabase version v1.50 or higher](https://www.metabase.com/docs/latest/releases). When running locally, you'll need to [activate your license](https://www.metabase.com/docs/latest/paid-features/activating-the-enterprise-edition) to enable SSO with JWT.

### Enable SSO with JWT

From any Metabase page, click on the **gear** icon in the upper right and select **Admin Settings** > **Settings** > **Authentication**.

On the card that says **JWT**, click the **Setup** button.

### JWT identity provider URI

In the **JWT IDENTITY PROVIDER URI** field, paste  `localhost:9090/sso/metabase` (or substitute your Cloud URL for localhost).

In your `.env` this address is set as:

```
VITE_AUTH_PROVIDER_URI="http://localhost:9090/sso/metabase"
```

### String used by the JWT signing key

Click the **Generate key** button. Copy the key and paste it in your `.env` file into the env var `METABASE_JWT_SHARED_SECRET`.

## Running the server

Change into the `server` directory:

```sh
cd server
```

Install packages:

```sh
npm install
```

Start the server:

```sh
npm start
```

## Start the client

In a different terminal, change into the `client` directory:

```sh
cd client
```

Install dependencies:

```sh
npm install
```

Start the client app:

```sh
npm start
```

Your browser should automatically open the app. By default, the app runs on [http://localhost:3100](localhost:3100).

## Set up groups and data sandboxing

To set up interactive embedding with JWT and data sandboxing, check out our [quick start guide](https://www.metabase.com/learn/customer-facing-analytics/interactive-embedding-quick-start).

## Reporting issues

Please report bugs or feature requests as issues in this repository. Please do not report security vulnerabilities on the public GitHub issue tracker. Our Security Policy describes [the procedure](https://github.com/metabase/metabase/security#reporting-a-vulnerability) for disclosing security issues.

## Author

[Metabase](https://metabase.com)

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more info.
