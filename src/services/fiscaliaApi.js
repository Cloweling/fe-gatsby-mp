const save = async (data) => {
  const url = `http://localhost:8080/api/v1/fiscalia/add`;
  const body = JSON.stringify(data);

  const res = await fetch(url, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json;charset=UTF-8" },
    body,
  }).then((response) => response.json());

  return res;
};

const get = async (name) => {
  let url = "http://localhost:8080/api/v1/fiscalia";

  if (name) {
    url = `${url}?name=${encodeURI(name)}`;
  }

  const res = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json;charset=UTF-8" },
  }).then((response) => response.json());

  return res;
};

const edit = async (data) => {
  const url = `http://localhost:8080/api/v1/fiscalia/edit/${data.id}`;
  const body = JSON.stringify(data);

  const res = await fetch(url, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json;charset=UTF-8" },
    body,
  }).then((response) => response.json());

  return res;
};


const del = async (id) => {
  let url = `http://localhost:8080/api/v1/fiscalia/delete/${id}`;

  const res = await fetch(url, {
    method: "DELETE",
    headers: { Accept: "application/json", "Content-Type": "application/json;charset=UTF-8" },
  }).then((response) => response.json());

  return res;
};

export { save, get, del, edit };
