const express = require("express"); // import express
const appMockExpressSimulatingServerBehavior = require("../../app");
const indexMock = require("../../index.js");
const router = require("../router");
const request = require("supertest");
const bodyParser = require("body-parser");

//mock app server
jest.mock("../../app");

const instanceOfApp = express(); //an instance of an express // a fake express app
instanceOfApp.use(bodyParser.json()); //this made it work

instanceOfApp.use("/themes", router); //

describe("testing-server-routes", () => {
  it("GET /themes - success", async () => {
    const { body } = await request(instanceOfApp).get("/themes"); //use the request function that we can use the app// save the response to body variable
    expect(body).toEqual([
      {
        id: 1,
        title: "Créer un CV",
        description: "Depuis quelques années on annonce la mort imminente du CV... Certains vont jusqu'à dire qu'il serait même déjà mort. Nous pensons plutôt que le CV fait partie d'une liste de plus en plus longue d'élements te concernant qui seront appréciés par les recruteurs.\\n\\nMalgrè tout, le CV reste, dans la très grande majorité des cas, la première pièce qui sera pris en considération par le recruteur. Il est donc très important de lui laisser une bonne impression pour qu'il continue à s'intéresser à ta candidature.\\n\\\nNous avons réuni ici quelques conseils qui pourront t'aider à rédiger (ou améliorer) ton CV. Il ne s'agit en aucun cas d'une liste exhaustive ou de vérités absolues. Prends tout avec des pincettes et n'hésite pas à faire preuve d'esprit critique !",
        position: 1,
        created_at: "2021-06-27T19:26:00.561Z",
        modified_at: "2021-06-27T19:26:00.561Z"
      },
      {
        id: 3,
        title: "Préparer son compte Github",
        description: "Tu n'imagines pas tout ce qu'un bon compte GitHub peut faire pour toi !\\n\\nLes recruteurs qui recherchent des développeurs sont habitués à chercher le compte GitHub des candidats pour se faire une idée de leurs compétences.\\n\\nL'objectif des conseils qui se rapportent à cette tâche sont les suivants :\\n\\n- Permettre aux recruteurs de trouver facilement ton profil public GitHub\\n\\n- Vous présenter très succinctement et montrer que tu codes régulièrement\\n\\n- Démontrer tes compétences techniques en montrant quelques projets représentatifs",
        position: 3,
        created_at: "2021-06-27T19:26:00.561Z",
        modified_at: "2021-06-27T19:26:00.561Z"
      },
    ]);
    firstTheme = body[0];
    console.log(firstTheme); 
  });

  // it("GET /states/MI - succes", async () => {
  //   const { body } = await request(app).get(`/states/${firstTheme.title}`);
  //   expect(body).toEqual(firstTheme);
  // });
});
