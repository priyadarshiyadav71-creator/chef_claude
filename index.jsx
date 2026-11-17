import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import  App  from "/AppMyTravelJournal";
import ChefClaudeApp from '/ChefClaudeApp.jsx'

const root = createRoot(document.getElementById("root"));

// root.render(
//   <Page />
// );

// function Page() {
//   return (
//     <Fragment>
//       <Header />
//       <Main />
//       <Footer />
//     </ Fragment>
//   );
// }

root.render(
  <ChefClaudeApp />
)

