import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "form", "results" ]

  connect() {
    // console.log(this.formTarget)
    // console.log(this.resultsTarget)
    this.fetchMovies("batman")
  }

  submit(event) {
    event.preventDefault()
    this.resultsTarget.innerHTML = ""
    this.fetchMovies(this.formTarget.value)
  }

  fetchMovies = (query) => {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then(data => this.insertMovies(data))
  }

  insertMovies = (data) => {
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-group-item border-0">
        <img src="${result.Poster}" alt="" width="100">
      </li>`
      this.resultsTarget.insertAdjacentHTML("beforeend", movieTag)
    })
  }

}
