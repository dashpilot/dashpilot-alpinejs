import Status from 'http-status-codes';
import metadataParser from 'markdown-yaml-metadata-parser';
import {
  getData
} from "./lib/github.js";

export default async (req, res) => {

  if (!process.env.GH_TOKEN) {
    return res.status(Status.BAD_REQUEST).send('Environment variable not set');
  } else if (req.method !== 'POST') {
    return res.status(Status.BAD_REQUEST).send('Only POST method is allowed');
  } else {

    const path = 'posts/'+req.body.path;


      getData(path).then(function(result) {
        
        // parse markdown and YAML
        var data = metadataParser(result.content);
        
        res.json({
          ok: true,
          msg: data
        })
      });

  
  }

}
