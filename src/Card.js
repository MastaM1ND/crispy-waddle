import React from "react";

const Card = () => {
  return (
    <>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
                <h5 class="card-title">Primary card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
        </div><div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body">
                  <h5 class="card-title">Secondary card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div><div class="card text-white bg-success mb-3" style="max-width: 18rem;">
              <div class="card-header">Header</div>
              <div class="card-body">
                  <h5 class="card-title">Success card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
    </div></>
  );
};

export default Card;