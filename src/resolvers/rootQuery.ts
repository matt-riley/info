import admin from "../services/firebase";

interface IServiceArgs {
  [index: string]: string;
  name?: string;
  status?: string;
  host?: string;
  language?: string;
}

interface IService {
  [index: string]: string;
  name: string;
  status: string;
  language: string;
  url: string;
  host: string;
  description: string;
}

const rootQuery = {
  Query: {
    async services(_: void, args: IServiceArgs) {
      const services = await admin.firestore().collection("services").get();
      const serviceArray = services.docs.map((service) => service.data()) as [];

      return Object.keys(args).length === 0 ? serviceArray : serviceArray.filter((service: IService) => {
        for (const key in args) {
          if (service[key] === undefined || service[key] !== args[key]) {
            return false;
          }
        }
        return true;
      });
    },
  },
};

export default rootQuery;
