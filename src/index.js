import React from "react";
import ReactDOM from "react-dom";

import Card from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Card
      name="RK Singh"
      img="https://lh4.googleusercontent.com/e1wBSon5_UO_rr35XLkyDN5QDL3o_BZIzPeRavCBeEb5Cq9C9qie-FjULVuHa645XOo7NlqTVvSJhQNJB_OP2jn777bN5Nrszzjx-8vE-w0uQtBu=w1280"
      alt="Rishu Singh"
      mob="+91-777181598"
      email="risusingh18@gmail.com"
    />
    <Card
      name="Rishu Singh"
      img="https://lh3.googleusercontent.com/i_SBtDpLIo2MpursPo9FJCueq20TFxJGJFKdINwOyV2N0if7vMtRRoB67SOmbmOaAulsdsG1BJ9jHdAsS9Egw35cqtoMzSP08MMgFi06tOCPo04k=w1280"
      alt="Rishu Singh"
      mob="+91-777181598"
      email="risusingh35@gmail.com"
    />

    <Card
      name="Singh Rishu"
      img="https://scontent.fstv8-1.fna.fbcdn.net/v/t1.6435-9/100714495_1605895342906530_7751600698587873280_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iVWr7u8VyMQAX_ulCZ9&_nc_ht=scontent.fstv8-1.fna&oh=96ceb7e61fa2658caea5d6f83907c3e7&oe=619A59D8"
      alt="Rishu Singh fb profile pic"
      mob="+91-777181598"
      email="risusingh18@gmail.com"
    />
  </div>,
  rootElement
);
