import NextAuth from "next-auth";
import { SequelizeAdapter } from "@next-auth/sequelize-adapter";
import { Sequelize } from "sequelize";

// Verbindung zu deiner Datenbank
const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "mysql",
});

export default NextAuth({
  adapter: SequelizeAdapter(sequelize),
  providers: [
    {
      id: "github",
      name: "GitHub",
      type: "oauth",
      version: "2.0",
      scope: "read:user",
      params: { grant_type: "authorization_code" },
      accessTokenUrl: "https://github.com/login/oauth/access_token",
      authorizationUrl: "https://github.com/login/oauth/authorize",
      profileUrl: "https://api.github.com/user",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
        };
      },
    },
  ],
});
