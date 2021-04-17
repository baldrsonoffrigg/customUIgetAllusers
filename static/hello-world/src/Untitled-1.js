<div>
{data ? data : 'Loading...'}
</div>



import Resolver from '@forge/resolver';
import api from "@forge/api";

const resolver = new Resolver();

/* const response = await api.asApp().requestJira('/rest/api/3/users', {
    headers: {
      'Accept': 'application/json'
    }
  });
  
  console.error(`Response: ${response.status} ${response.statusText}`);
  console.error(await response.json()); 
  
  await response.json().then((value) => console.log(value))
*/

resolver.define('getText2', async (req) => {
    console.log(req);

    const respons2e = api.asApp().requestJira('/rest/api/3/users', {
        headers: {
          'Accept': 'application/json'
        }
    });
    
    return "respons2e";
});



resolver.define("getText",async () => {
  const resu2lt = await api.asUser().requestJira(`/rest/api/3/users`);
  
  const result = await api.asUser().requestJira('/rest/api/3/search?jql=project%20%3D%20AD', {
    headers: {
      'Accept': 'application/json'
    }
  });
  
const status = result.status;  

  return JSON.stringify(result);
  
});

export const handler = resolver.getDefinitions();

