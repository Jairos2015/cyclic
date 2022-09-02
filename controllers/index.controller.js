
//******************
//**** A P I *******
//******************


export const get_cyclic = async (req, res) => {
  console.log("Dentro de get_cyclic");
  res.send({"data": "get_data"});
}

export const post_cyclic = async (req, res) => {
  console.log("Dentro de post_cyclic")
  res.json({"data": "post_data"}); 
}