const html = `<div class="accordion">
  <div class="accordion-section">
    <h3 class="accordion-header collapsed">
      <button id="sect1-button" type="button" aria-expanded="false" aria-controls="sect1-panel">
        Section1
        <svg class="dropdown-arrow" height="10" width="10" aria-hidden="true">
          <path class="arrow" d="m 0 0 l 10 0 l  -5 10 z" />
        </svg>
      </button>
    </h3>
    <div id="sect1-panel" class="tab-panel">
      <p>Section 1 Content</p>
      <a href="#">You can navigate to tabbable elements inside open panels.</a>
    </div>
  </div>

  <div class="accordion-section">
    <h3 class="accordion-header collapsed">
      <button id="sect2-button" type="button" aria-expanded="false" aria-controls="sect2-content">
        Section2
        <svg aria-hidden="true" class="dropdown-arrow" height="10" width="10">
          <path class="arrow" d="m 0 0 l 10 0 l  -5 10 z" />
        </svg>
      </button>
    </h3>

    <div id="sect2-panel" class="tab-panel" role="region" aria-labelledby="sect2-button">
      <p>Section 2 Content</p>
      <label for="name">Name:</label>
      <input id="name" type="text" autocomplete="name"/>
    </div>
  </div>
</div>
`;

export default html;
