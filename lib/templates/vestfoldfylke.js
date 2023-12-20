module.exports = () => {
  return `<!doctype html>
    <html lang="no">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <style>
          body {
            font-family: Calibri, Arial, sans-serif;
            font-size: 12pt;
          }
          a {
            color: #005260;
          }
          #vfk_signature {
            font-family: Calibri, Arial, sans-serif;
            font-size: 11pt;
          }
          #vfk_signature a {
            color: #005260;
            text-decoration: none;
          }
          #vfk_person a {
            color: #000000;
          }
        </style>
    </head>
    <body>
    <div id="content">
        {{{body}}}
    </div>
    <br />
    <br />
    <div id="vfk_signature">
      <div id="vfk_person">
        Vennlig hilsen<br />
        <br />
        <b>{{signature.name}}</b><br />
        
        {{#if signature.title}}
            {{signature.title}}<br />
        {{/if}}
        
        {{#if signature.department}}
            {{signature.department}}<br/>
        {{/if}}
        
        {{#if signature.company}}
            {{#unless signature.virksomhet}}
                {{signature.company}}<br/>
            {{/unless}}
        {{/if}}
        {{#if signature.phone}}
            <br/>
            Telefon: <a href="tel:{{signature.phone}}">{{signature.phone}}</a>
            
            {{#if signature.mobile}}
                / 
            {{/if}}
        {{/if}}
        {{#if signature.mobile}}
            {{#unless signature.phone}}
                <br/>
            {{/unless}}
            
            Mobil: <a href="tel:{{signature.mobile}}">{{signature.mobile}}</a>
        {{/if}}
      </div>
      <div id="vfk_company">
        <br>
        <img src="https://logo.api.vestfoldfylke.no/logos/vestfold_fylkesvapen_epost.png" alt="Fylkesvåpen, Vestfold fylkeskommune"><br />
        {{#if signature.virksomhet}}
            {{#if signature.company}}
                <b>{{signature.company}}</b><br />
            {{else}}
                <b>Vestfold fylkeskommune</b><br />
            {{/if}}
        {{else}}
            <b>Vestfold fylkeskommune</b><br />
        {{/if}}
        
        {{#if signature.webpage}}
            <a href="https://{{signature.webpage}}">{{signature.webpage}}</a>
        {{else}}
            <a href="https://www.vestfoldfylke.no/">www.vestfoldfylke.no</a>
        {{/if}}
      </div>
    </div>
    </body>
    </html>`
}
