import Resolver from '@forge/resolver';
import api from "@forge/api";

const resolver = new Resolver();

resolver.define("getText",async () => {
  const result = await api.asUser().requestJira(`/rest/api/3/users`);
  
  const status = result.status;  

  return JSON.stringify(result);
  
});

export const handler = resolver.getDefinitions();