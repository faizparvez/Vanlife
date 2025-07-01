export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";

  const res = await fetch(url);
  // console.log(res);

  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();
  return id ? data.van : data.vans;
}



export async function getHostVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/hosts/123/vans";

  const res = await fetch(url);
  // console.log(res);

  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return id ? data.van : data.vans;
}





export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });

  const data = await res.json();
  // console.log( res );

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}