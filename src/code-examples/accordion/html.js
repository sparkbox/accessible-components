const html = `<div class="accordion">
  <div class="accordion-section">
    <h3 class="accordion-header collapsed">
      <button id="button-1" type="button" aria-expanded="false" aria-controls="panel-1">
        Section 1
        <svg class="dropdown-arrow" height="10" width="10" aria-hidden="true">
          <path class="arrow" d="m 0 0 l 10 0 l  -5 10 z" />
        </svg>
      </button>
    </h3>
    <div id="panel-1" class="accordion-panel" role="region" aria-labelledby="button-1">
      <p>Section 1 Content</p>
      <a href="#">You can navigate to tabbable elements inside open panels.</a>
    </div>
  </div>

  <div class="accordion-section">
    <h3 class="accordion-header collapsed">
      <button id="button-2" type="button" aria-expanded="false" aria-controls="panel-2">
        Section 2
        <svg aria-hidden="true" class="dropdown-arrow" height="10" width="10">
          <path class="arrow" d="m 0 0 l 10 0 l  -5 10 z" />
        </svg>
      </button>
    </h3>

    <div id="panel-2" class="accordion-panel" role="region" aria-labelledby="button-2">
      <p>Section 2 Content</p>
      <label for="name">Name:</label>
      <input id="name" type="text" autocomplete="name"/>
    </div>
  </div>
</div>
`;

export default html;
