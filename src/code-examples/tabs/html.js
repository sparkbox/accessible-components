const html = `<div class="tabs">
  <nav role="tablist" class="manual">
    <a id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1" href="#tabpanel-1">Section 1</a>
    <a id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1" href="#tabpanel-2">Section 2</a>
    <a id="tab-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-3" tabindex="-1" href="#tabpanel-3">Section 3</a>
  </nav>

  <section id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
    <p>This is section 1</p>
    <a href="#">Can tab to this link</a>
  </section>

  <section id="tabpanel-2" role="tabpanel" aria-labelledby="tab-2" class="is-hidden">
    <p>This is section 2</p>
    <a href="#">Can tab to this link</a>
  </section>

  <section id="tabpanel-3" role="tabpanel" aria-labelledby="tab-3" class="is-hidden">
    <p>This is section 3</p>
    <a href="#">Can tab to this link</a>
  </section>
</div>
`;

export default html;
