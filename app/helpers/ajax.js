export function ajax(props) {
  let { url, options, success } = props;

  fetch(url, options)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => success(json))
    .catch((e) => {
      let message = e.message || "Ocurrio un error al acceder a la API";

      document.querySelector("#root").innerHTML = `
        <div class="error">
          <p>Error ${e.status}: ${message}</p>
        </div>
      `;

      console.log(e);
    });
}
