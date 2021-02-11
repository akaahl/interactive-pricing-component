const sliderRange = document.getElementById('slider-range');
const discountToggle = document.getElementById('discount-toggle');
const pricingContainer = document.getElementById('pricing-container');
const price = document.getElementById('price');

sliderRange.addEventListener('input', e => {
    
    const maxValue = 4;
    const targetValue = e.target.value;
    const targetPercentage = (targetValue/maxValue) * 100;

    e.target.style.background = `linear-gradient(90deg, 
                                    hsl(174, 77%, 80%) ${targetPercentage}%, 
                                    hsl(224, 65%, 95%) ${targetPercentage}%)`;

    updatePricing(targetValue);
    discountToggle.checked = false;
    
})

function updatePricing(targetValue) {
    if (targetValue === '0') {
        pricingContainer.innerHTML = `
        <p class="left-text">10K Pageviews</p>
        <p><span id="price" class="price">$8.00</span> <span class="per-month">/ month</span></p>
        `;
    } else if (targetValue === '1') {
        pricingContainer.innerHTML = `
        <p class="left-text">50K Pageviews</p>
        <p><span id="price" class="price">$12.00</span> <span class="per-month">/ month</span></p>
        `
    } else if (targetValue === '2') {
        pricingContainer.innerHTML = `
        <p class="left-text">100K Pageviews</p>
        <p><span id="price" class="price">$16.00</span> <span class="per-month">/ month</span></p>
        `
    } else if (targetValue === '3') {
        pricingContainer.innerHTML = `
        <p class="left-text">500K Pageviews</p>
        <p><span id="price" class="price">$24.00</span> <span class="per-month">/ month</span></p>
        `
    } else {
        pricingContainer.innerHTML = `
        <p class="left-text">1M Pageviews</p>
        <p><span id="price" class="price">$36.00</span> <span class="per-month">/ month</span></p>
        `
    }
}

discountToggle.addEventListener('click', e => {
    if (sliderRange.value == 0) {
        if (e.target.checked) {
            pricingContainer.innerHTML = `
                <p class="left-text">10K Pageviews</p>
                <p><span id="price" class="price">$${8 * 0.75}.00</span> <span class="per-month">/ month</span></p>
        `;
        } else {
            pricingContainer.innerHTML = `
                <p class="left-text">10K Pageviews</p>
                <p><span id="price" class="price">$8.00</span> <span class="per-month">/ month</span></p>
        `;
        }
    } else if (sliderRange.value == 1) {
        if (e.target.checked) {
            pricingContainer.innerHTML = `
                <p class="left-text">50K Pageviews</p>
                <p><span id="price" class="price">$${12 * 0.75}.00</span> <span class="per-month">/ month</span></p>
        `;
        } else {
            pricingContainer.innerHTML = `
                <p class="left-text">50K Pageviews</p>
                <p><span id="price" class="price">$12.00</span> <span class="per-month">/ month</span></p>
        `;
        }
    } else if (sliderRange.value == 2) {
        if (e.target.checked) {
            pricingContainer.innerHTML = `
                <p class="left-text">100K Pageviews</p>
                <p><span id="price" class="price">$${16 * 0.75}.00</span> <span class="per-month">/ month</span></p>
        `;
        } else {
            pricingContainer.innerHTML = `
                <p class="left-text">100K Pageviews</p>
                <p><span id="price" class="price">$16.00</span> <span class="per-month">/ month</span></p>
        `;
        }
    } else if (sliderRange.value == 3) {
        if (e.target.checked) {
            pricingContainer.innerHTML = `
                <p class="left-text">500K Pageviews</p>
                <p><span id="price" class="price">$${24 * 0.75}.00</span> <span class="per-month">/ month</span></p>
        `;
        } else {
            pricingContainer.innerHTML = `
                <p class="left-text">500K Pageviews</p>
                <p><span id="price" class="price">$24.00</span> <span class="per-month">/ month</span></p>
        `;
        }
    } else if (sliderRange.value == 4) {
        if (e.target.checked) {
            pricingContainer.innerHTML = `
                <p class="left-text">1M Pageviews</p>
                <p><span id="price" class="price">$${36 * 0.75}.00</span> <span class="per-month">/ month</span></p>
        `;
        } else {
            pricingContainer.innerHTML = `
                <p class="left-text">10K Pageviews</p>
                <p><span id="price" class="price">$36.00</span> <span class="per-month">/ month</span></p>
        `;
        }
    }
})




