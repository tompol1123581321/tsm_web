type ApiCAllArgs<t> = {
  url: string;
  method: "GET" | "POST" | "DELETE";
  data?: t;
};

export const genericApiCall = async (request: ApiCAllArgs<BodyInit>) => {
  const requestParams: RequestInit = {
    method: request.method,
    headers: new Headers({ "content-type": "application/json" }),
    mode: "cors",
  };
  if (request.data) {
    requestParams.body = request.data;
  }

  return await fetch(request.url, requestParams);
};
