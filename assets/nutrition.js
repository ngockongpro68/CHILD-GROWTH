(function () {
  const root = document.getElementById("nutritionApp");
  if (!root) return;

  const language = window.location.pathname.split("/").filter(Boolean)[0] || "en";
  const isVietnamese = language === "vi";
  const text = (vi, en) => isVietnamese ? vi : en;
  const formatPrice = (value) => value ? `${new Intl.NumberFormat(isVietnamese ? "vi-VN" : "en-US").format(value)}${isVietnamese ? "đ" : " VND"}` : text("Xem giá", "See price");
  const icon = (name) => {
    const icons = {
      heart: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      compare: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 4v16M17 4v16M3 8l4-4 4 4M13 16l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      info: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 10v6m0-9h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
      check: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      close: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
      external: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 5h5v5M10 14 19 5M19 13v6H5V5h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      spark: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>'
    };
    return icons[name] || icons.info;
  };

  const products = [
    {
      id: "friso-gold-4",
      name: "Friso Gold 4",
      brand: "Friso",
      image: "/assets/nutrition/friso-gold-4.webp",
      age: text("Trẻ 2-6 tuổi", "Children 2-6 years"),
      ageGroups: ["2-5"],
      needs: ["daily", "calcium"],
      needLabel: text("Dùng bổ sung hằng ngày", "Daily supplementation"),
      price: 521000,
      priceStatus: text("Giá khuyến nghị 850g từ hãng", "Manufacturer reference price for 850g"),
      energy: null,
      protein: null,
      calcium: null,
      vitaminD: null,
      sugar: null,
      lactose: text("Có thành phần sữa", "Contains milk ingredients"),
      suitable: [text("Trẻ 2-6 tuổi theo độ tuổi ghi trên nhãn", "Children 2-6 years as stated on the label"), text("Gia đình cần sản phẩm dùng bổ sung hằng ngày", "Families seeking daily supplementation")],
      cautions: [text("Cần kiểm tra thành phần nếu trẻ dị ứng đạm sữa bò", "Check ingredients if the child has cow's milk protein allergy"), text("Không thay thế chế độ ăn đa dạng", "Does not replace a varied diet")],
      analysis: text("Trang hãng xác nhận độ tuổi 2-6 và giá khuyến nghị theo quy cách. Các chỉ số trên 100 ml chưa được GrowthKid chuẩn hóa nên chưa dùng để xếp hạng.", "The manufacturer confirms use for ages 2-6 and a reference package price. Per-100 ml values have not yet been normalized by GrowthKid."),
      source: "https://www.friso.com.vn/friso-gold/friso-gold-giai-doan-4",
      sourceLabel: "Friso Việt Nam",
      updated: "13/07/2026",
      sellers: [
        { name: text("Trang sản phẩm Friso", "Friso product page"), url: "https://www.friso.com.vn/friso-gold/friso-gold-giai-doan-4" },
        { name: "Shopee", url: "https://shopee.vn/search?keyword=friso%20gold%204%20850g" },
        { name: "Lazada", url: "https://www.lazada.vn/catalog/?q=friso%20gold%204%20850g" }
      ]
    },
    {
      id: "nutren-junior",
      name: "Nutren Junior",
      brand: "Nestlé Health Science",
      image: "/assets/nutrition/nutren-junior.png",
      age: text("Trẻ 1-10 tuổi", "Children 1-10 years"),
      ageGroups: ["12-23", "2-5", "6-9"],
      needs: ["energy", "meal", "calcium"],
      needLabel: text("Bổ sung năng lượng", "Energy supplementation"),
      price: 590000,
      priceStatus: text("Giá minh họa, kiểm tra lại tại nơi bán", "Illustrative price; verify with the seller"),
      energy: 102.8,
      protein: 3.04,
      calcium: 83.6,
      vitaminD: 0.92,
      sugar: 5.28,
      lactose: text("Có lactose ở mức thấp theo bảng hãng", "Contains a low amount of lactose per manufacturer table"),
      suitable: [text("Trẻ cần bổ sung năng lượng theo đánh giá dinh dưỡng", "Children needing energy supplementation after nutrition assessment"), text("Trẻ có khẩu phần ăn chưa đáp ứng đủ nhu cầu", "Children whose diet may not meet nutritional needs")],
      cautions: [text("Sản phẩm dinh dưỡng y học cần dùng theo hướng dẫn chuyên môn khi trẻ có bệnh lý", "Medical nutrition products should follow professional guidance for children with medical conditions"), text("Có thành phần sữa và lactose", "Contains milk ingredients and lactose")],
      analysis: text("Giá trị được GrowthKid quy đổi từ khẩu phần 250 ml công bố bởi Nestlé: 257 kcal, 7,6 g đạm, 209 mg canxi, 2,3 µg vitamin D và 13,2 g đường tổng số.", "Values are normalized from Nestlé's published 250 ml serving: 257 kcal, 7.6 g protein, 209 mg calcium, 2.3 µg vitamin D, and 13.2 g total sugars."),
      source: "https://www.nestlehealthscience.vn/nutren-junior",
      sourceLabel: "Nestlé Health Science Việt Nam",
      updated: "13/07/2026",
      sellers: [
        { name: text("Trang sản phẩm Nestlé", "Nestlé product page"), url: "https://www.nestlehealthscience.vn/nutren-junior" },
        { name: text("Nhà thuốc Long Châu", "Long Châu Pharmacy"), url: "https://nhathuoclongchau.com.vn/thuc-pham-chuc-nang/sua-nutren-junior-1-10-tuoi-800-g.html" },
        { name: "Pharmacity", url: "https://www.pharmacity.vn/sua-bot-dinh-duong-nestle-nutren-junior-bo-sung-dinh-duong-toan-dien-cho-be-tu-1-10-tuoi-800g.html" }
      ]
    },
    {
      id: "pediasure-powder",
      name: "PediaSure dạng bột",
      brand: "Abbott",
      image: "/assets/nutrition/pediasure.png",
      age: text("Trẻ 1-10 tuổi", "Children 1-10 years"),
      ageGroups: ["12-23", "2-5", "6-9"],
      needs: ["energy", "meal", "calcium"],
      needLabel: text("Dinh dưỡng đầy đủ, cân đối", "Complete, balanced nutrition"),
      price: 688000,
      priceStatus: text("Giá tham khảo; kiểm tra lại tại nơi bán", "Reference price; verify with the seller"),
      energy: 100,
      protein: null,
      calcium: null,
      vitaminD: null,
      sugar: null,
      lactose: text("Kiểm tra nhãn theo lô sản phẩm", "Check the label for the specific batch"),
      suitable: [text("Trẻ tăng trưởng kém hoặc ăn uống chưa đáp ứng đủ nhu cầu sau đánh giá", "Children with growth or intake concerns after assessment"), text("Trẻ cần nguồn dinh dưỡng bổ sung", "Children needing supplemental nutrition")],
      cautions: [text("Là thực phẩm dinh dưỡng y học; trẻ có bệnh lý cần hỏi nhân viên y tế", "This is a food for special medical purposes; seek professional advice for medical conditions"), text("Không tự dùng thay toàn bộ bữa ăn chính", "Do not independently replace all main meals")],
      analysis: text("Abbott công bố PediaSure dạng bột dành cho trẻ 1-10 tuổi và cung cấp năng lượng chuẩn 1 kcal/ml. Các chỉ số còn lại đang chờ chuẩn hóa từ nhãn hiện hành.", "Abbott states that PediaSure powder is for ages 1-10 and provides 1 kcal/ml. Other values await normalization from the current label."),
      source: "https://www.family.abbott/vn-vi/pediasure/products/pediasure-powder-ML2.html",
      sourceLabel: "Abbott PediaSure Việt Nam",
      updated: "13/07/2026",
      sellers: [
        { name: text("Trang sản phẩm Abbott", "Abbott product page"), url: "https://www.family.abbott/vn-vi/pediasure/products/pediasure-powder-ML2.html" },
        { name: "Shopee", url: "https://shopee.vn/search?keyword=pediasure%20850g%20ch%C3%ADnh%20h%C3%A3ng" },
        { name: "Lazada", url: "https://www.lazada.vn/catalog/?q=pediasure%20850g" }
      ]
    },
    {
      id: "dielac-grow-plus",
      name: "Dielac Grow Plus 2+",
      brand: "Vinamilk",
      image: "/assets/nutrition/dielac-grow-plus.png",
      age: text("Trẻ 2-10 tuổi", "Children 2-10 years"),
      ageGroups: ["2-5", "6-9"],
      needs: ["energy", "calcium"],
      needLabel: text("Hỗ trợ khẩu phần trẻ nhẹ cân, thấp còi", "Nutrition support for underweight or stunted children"),
      price: 627061,
      priceStatus: text("Giá hiển thị tại Vinamilk khi cập nhật", "Price shown by Vinamilk at update time"),
      energy: null,
      protein: null,
      calcium: null,
      vitaminD: null,
      sugar: null,
      lactose: text("Có chứa sữa, đậu nành và dầu cá", "Contains milk, soy, and fish oil"),
      suitable: [text("Trẻ 2-10 tuổi theo độ tuổi trên trang hãng", "Children 2-10 years per manufacturer page"), text("Trẻ cần được theo dõi tăng trưởng và khẩu phần", "Children whose growth and diet are being monitored")],
      cautions: [text("Có chứa sữa, đậu nành và dầu cá", "Contains milk, soy, and fish oil"), text("Cần đánh giá nguyên nhân nếu trẻ nhẹ cân hoặc thấp còi", "The cause should be assessed when a child is underweight or stunted")],
      analysis: text("Trang Vinamilk công bố độ tuổi 2-10, thành phần dị ứng và giá bán. Bảng trên 100 ml chưa được GrowthKid chuẩn hóa nên không dùng để xếp hạng.", "Vinamilk publishes the age range, allergen ingredients, and price. Per-100 ml values have not yet been normalized by GrowthKid."),
      source: "https://new.vinamilk.com.vn/products/sua-bot-dielac-grow-plus-2",
      sourceLabel: "Vinamilk",
      updated: "13/07/2026",
      sellers: [
        { name: text("Mua tại Vinamilk", "Buy from Vinamilk"), url: "https://new.vinamilk.com.vn/products/sua-bot-dielac-grow-plus-2" },
        { name: "Shopee", url: "https://shopee.vn/search?keyword=dielac%20grow%20plus%202%2B%20850g" },
        { name: "Lazada", url: "https://www.lazada.vn/catalog/?q=dielac%20grow%20plus%202%2B" }
      ]
    }
  ];

  const state = {
    age: "all",
    need: "all",
    price: "all",
    favorites: new Set(readStorage("growthkid:nutrition:favorites")),
    compare: readStorage("growthkid:nutrition:compare").filter((id) => products.some((product) => product.id === id)).slice(0, 3)
  };

  function readStorage(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (error) {
      return [];
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return;
    }
  }

  function metric(value, unit) {
    if (!Number.isFinite(value)) return `<span class="nutrition-metric-missing">${text("Chưa chuẩn hóa", "Not normalized")}</span>`;
    return `${new Intl.NumberFormat(isVietnamese ? "vi-VN" : "en-US", { maximumFractionDigits: 1 }).format(value)} ${unit}`;
  }

  function filterButton(group, value, label, active) {
    return `<button class="nutrition-chip${active ? " is-active" : ""}" type="button" data-nutrition-action="filter" data-group="${group}" data-value="${value}" aria-pressed="${active}">${label}</button>`;
  }

  function pageMarkup() {
    return `
      <section class="nutrition-hero">
        <div class="container nutrition-hero-grid">
          <div class="nutrition-hero-copy">
            <span class="nutrition-eyebrow">${text("Góc chọn dinh dưỡng", "Nutrition guide")}</span>
            <h1>${text("Chọn sản phẩm dinh dưỡng phù hợp cho bé", "Choose a nutrition product that fits your child")}</h1>
            <p>${text("So sánh độ tuổi sử dụng, mục đích bổ sung, thông tin trên nhãn và giá tham khảo để chuẩn bị câu hỏi phù hợp trước khi lựa chọn.", "Compare age ranges, intended use, label information, and reference prices before making a choice.")}</p>
            <div class="nutrition-hero-actions">
              <button class="nutrition-btn nutrition-btn-primary" type="button" data-nutrition-action="find">${text("Tìm sản phẩm phù hợp", "Find suitable products")} ${icon("arrow")}</button>
              <button class="nutrition-btn nutrition-btn-secondary" type="button" data-nutrition-action="show-compare">${text("So sánh sản phẩm", "Compare products")} ${icon("compare")}</button>
            </div>
          </div>
          <div class="nutrition-hero-art" aria-hidden="true">
            <img src="/assets/nutrition/nutrition-hero.png" alt="" width="1536" height="1024">
          </div>
        </div>
      </section>

      <section class="container nutrition-workspace">
        <div class="nutrition-medical-note">${icon("info")}<span>${text("Trẻ có bệnh lý, dị ứng hoặc tăng trưởng bất thường cần được bác sĩ hoặc chuyên gia dinh dưỡng đánh giá trước khi lựa chọn sản phẩm.", "Children with medical conditions, allergies, or growth concerns should be assessed by a clinician or dietitian before choosing a product.")}</span></div>

        <section class="nutrition-filters" id="nutritionFilters" aria-labelledby="nutritionFilterTitle">
          <div class="nutrition-section-heading">
            <div><span class="nutrition-kicker">${text("Cá nhân hóa", "Personalize")}</span><h2 id="nutritionFilterTitle">${text("Bộ lọc nhanh", "Quick filters")}</h2></div>
            <button class="nutrition-reset" type="button" data-nutrition-action="clear-filters">${text("Xóa bộ lọc", "Clear filters")}</button>
          </div>
          <div class="nutrition-filter-row">
            <strong>${text("Theo độ tuổi", "By age")}</strong>
            <div class="nutrition-chip-list" data-filter-group="age">
              ${filterButton("age", "all", text("Tất cả", "All ages"), true)}
              ${filterButton("age", "under-6", text("Dưới 6 tháng", "Under 6 months"), false)}
              ${filterButton("age", "6-11", text("6-11 tháng", "6-11 months"), false)}
              ${filterButton("age", "12-23", text("12-23 tháng", "12-23 months"), false)}
              ${filterButton("age", "2-5", text("2-5 tuổi", "Ages 2-5"), false)}
              ${filterButton("age", "6-9", text("6-9 tuổi", "Ages 6-9"), false)}
              ${filterButton("age", "10-15", text("10-15 tuổi", "Ages 10-15"), false)}
            </div>
          </div>
          <div class="nutrition-filter-row">
            <strong>${text("Theo nhu cầu", "By need")}</strong>
            <div class="nutrition-chip-list" data-filter-group="need">
              ${filterButton("need", "all", text("Tất cả nhu cầu", "All needs"), true)}
              ${filterButton("need", "daily", text("Dùng hằng ngày", "Daily use"), false)}
              ${filterButton("need", "energy", text("Bổ sung năng lượng", "More energy"), false)}
              ${filterButton("need", "less-sugar", text("Ít đường", "Lower sugar"), false)}
              ${filterButton("need", "lactose-free", text("Không lactose", "Lactose-free"), false)}
              ${filterButton("need", "calcium", text("Canxi & vitamin D", "Calcium & vitamin D"), false)}
              ${filterButton("need", "meal", text("Bữa phụ dinh dưỡng", "Nutritional snack"), false)}
            </div>
          </div>
          <div class="nutrition-filter-row">
            <strong>${text("Theo mức giá", "By price")}</strong>
            <div class="nutrition-chip-list" data-filter-group="price">
              ${filterButton("price", "all", text("Tất cả mức giá", "All prices"), true)}
              ${filterButton("price", "under-500", text("Dưới 500.000đ", "Under 500,000 VND"), false)}
              ${filterButton("price", "500-800", "500.000-800.000đ", false)}
              ${filterButton("price", "over-800", text("Trên 800.000đ", "Over 800,000 VND"), false)}
            </div>
          </div>
        </section>

        <section class="nutrition-products" aria-labelledby="nutritionProductsTitle">
          <div class="nutrition-section-heading">
            <div><span class="nutrition-kicker">${text("Thông tin có nguồn", "Source-backed information")}</span><h2 id="nutritionProductsTitle">${text("Sản phẩm đang tham khảo", "Products to explore")}</h2></div>
            <span class="nutrition-result-count" id="nutritionResultCount"></span>
          </div>
          <div class="nutrition-product-grid" id="nutritionProductGrid"></div>
        </section>

        <section class="nutrition-compare-section" id="nutritionCompare" aria-labelledby="nutritionCompareTitle"></section>

        <section class="nutrition-trust-grid" aria-label="${text("Nguyên tắc nội dung", "Content principles")}">
          <div>${icon("check")}<span><strong>${text("Nguồn chính hãng", "Official sources")}</strong>${text("Đường dẫn và ngày cập nhật rõ ràng", "Clear links and update dates")}</span></div>
          <div>${icon("compare")}<span><strong>${text("So sánh minh bạch", "Transparent comparison")}</strong>${text("Không xếp hạng tốt nhất chung chung", "No generic best-product ranking")}</span></div>
          <div>${icon("info")}<span><strong>${text("Lưu ý dị ứng", "Allergy notes")}</strong>${text("Hiển thị thành phần cần kiểm tra", "Ingredients to check are highlighted")}</span></div>
          <div>${icon("spark")}<span><strong>${text("Quyền lựa chọn", "Choice first")}</strong>${text("Nhiều nơi bán và nguồn để đối chiếu", "Multiple sellers and sources")}</span></div>
        </section>

        <details class="nutrition-disclosure">
          <summary>${icon("info")}<span>${text("Thông tin liên kết", "Link information")}</span></summary>
          <p>${text("Một số liên kết có thể là liên kết tiếp thị. Việc này không làm thay đổi giá hoặc tiêu chí hiển thị sản phẩm. Giá có thể thay đổi; hãy kiểm tra nhãn và nơi bán trước khi mua.", "Some links may be affiliate links. This does not change the price or product display criteria. Prices may change; check the label and seller before purchase.")}</p>
        </details>
      </section>

      <div class="nutrition-detail-backdrop" id="nutritionDetailBackdrop" hidden>
        <section class="nutrition-detail" id="nutritionDetail" role="dialog" aria-modal="true" aria-labelledby="nutritionDetailTitle"></section>
      </div>
      <div class="nutrition-compare-dock" id="nutritionCompareDock" hidden></div>
      <div class="nutrition-toast" id="nutritionToast" role="status" aria-live="polite"></div>
    `;
  }

  function filteredProducts() {
    return products.filter((product) => {
      const ageMatch = state.age === "all" || product.ageGroups.includes(state.age);
      const needMatch = state.need === "all" || product.needs.includes(state.need);
      const priceMatch = state.price === "all"
        || (state.price === "under-500" && product.price < 500000)
        || (state.price === "500-800" && product.price >= 500000 && product.price <= 800000)
        || (state.price === "over-800" && product.price > 800000);
      return ageMatch && needMatch && priceMatch;
    });
  }

  function productCard(product) {
    const favorite = state.favorites.has(product.id);
    const selected = state.compare.includes(product.id);
    return `
      <article class="nutrition-product-card">
        <div class="nutrition-product-media" data-product-id="${product.id}">
          <span class="nutrition-age-badge">${product.age}</span>
          <button class="nutrition-icon-btn${favorite ? " is-active" : ""}" type="button" title="${text("Yêu thích", "Favorite")}" aria-label="${text("Yêu thích", "Favorite")} ${product.name}" aria-pressed="${favorite}" data-nutrition-action="favorite" data-product-id="${product.id}">${icon("heart")}</button>
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="nutrition-product-body">
          <span class="nutrition-product-brand">${product.brand}</span>
          <h3>${product.name}</h3>
          <p class="nutrition-product-purpose">${product.needLabel}</p>
          <dl class="nutrition-metric-grid">
            <div><dt>${text("Năng lượng", "Energy")}</dt><dd>${metric(product.energy, "kcal/100 ml")}</dd></div>
            <div><dt>${text("Protein", "Protein")}</dt><dd>${metric(product.protein, "g/100 ml")}</dd></div>
            <div><dt>${text("Canxi", "Calcium")}</dt><dd>${metric(product.calcium, "mg/100 ml")}</dd></div>
            <div><dt>${text("Đường", "Sugar")}</dt><dd>${metric(product.sugar, "g/100 ml")}</dd></div>
          </dl>
          <div class="nutrition-product-price"><span>${text("Giá tham khảo", "Reference price")}</span><strong>${formatPrice(product.price)}</strong><small>${product.priceStatus}</small></div>
          <div class="nutrition-card-actions">
            <button class="nutrition-btn nutrition-btn-secondary${selected ? " is-selected" : ""}" type="button" data-nutrition-action="compare" data-product-id="${product.id}" aria-pressed="${selected}">${icon("compare")} ${selected ? text("Đã chọn", "Selected") : text("So sánh", "Compare")}</button>
            <button class="nutrition-btn nutrition-btn-primary" type="button" data-nutrition-action="detail" data-product-id="${product.id}">${text("Xem chi tiết", "View details")} ${icon("arrow")}</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderProducts() {
    const filtered = filteredProducts();
    const grid = document.getElementById("nutritionProductGrid");
    const count = document.getElementById("nutritionResultCount");
    if (!grid || !count) return;
    count.textContent = text(`${filtered.length} sản phẩm`, `${filtered.length} products`);
    grid.innerHTML = filtered.length
      ? filtered.map(productCard).join("")
      : `<div class="nutrition-empty">${icon("info")}<h3>${text("Chưa có sản phẩm phù hợp", "No matching products yet")}</h3><p>${text("Hãy đổi bộ lọc hoặc xóa bộ lọc để xem lại toàn bộ danh sách.", "Change or clear the filters to view all products.")}</p><button class="nutrition-btn nutrition-btn-secondary" type="button" data-nutrition-action="clear-filters">${text("Xóa bộ lọc", "Clear filters")}</button></div>`;
  }

  function comparisonValue(product, key, unit) {
    if (key === "age") return product.age;
    if (key === "price") return formatPrice(product.price);
    if (key === "lactose") return product.lactose;
    return metric(product[key], unit);
  }

  function recommendationCard(label, product, detail, tone) {
    return `<article class="nutrition-recommendation is-${tone}"><span>${label}</span><strong>${product ? product.name : text("Chưa đủ dữ liệu", "Not enough data")}</strong><small>${detail}</small></article>`;
  }

  function renderCompare() {
    const section = document.getElementById("nutritionCompare");
    const selected = state.compare.map((id) => products.find((product) => product.id === id)).filter(Boolean);
    if (!section) return;
    if (!selected.length) {
      section.innerHTML = "";
      section.hidden = true;
      renderCompareDock();
      return;
    }
    section.hidden = false;
    const rows = [
      [text("Độ tuổi", "Age range"), "age", ""],
      [text("Năng lượng", "Energy"), "energy", "kcal/100 ml"],
      [text("Protein", "Protein"), "protein", "g/100 ml"],
      [text("Canxi", "Calcium"), "calcium", "mg/100 ml"],
      [text("Vitamin D", "Vitamin D"), "vitaminD", "µg/100 ml"],
      [text("Đường tổng số", "Total sugars"), "sugar", "g/100 ml"],
      [text("Lactose / dị ứng", "Lactose / allergens"), "lactose", ""],
      [text("Giá tham khảo", "Reference price"), "price", ""]
    ];
    const numericEnergy = selected.filter((product) => Number.isFinite(product.energy)).sort((a, b) => b.energy - a.energy)[0];
    const numericSugar = selected.filter((product) => Number.isFinite(product.sugar)).sort((a, b) => a.sugar - b.sugar)[0];
    const calcium = selected.filter((product) => Number.isFinite(product.calcium)).sort((a, b) => b.calcium - a.calcium)[0];
    const lowestPrice = [...selected].sort((a, b) => a.price - b.price)[0];
    section.innerHTML = `
      <div class="nutrition-section-heading">
        <div><span class="nutrition-kicker">${text("Tối đa 3 sản phẩm", "Up to 3 products")}</span><h2 id="nutritionCompareTitle">${text("So sánh sản phẩm", "Product comparison")}</h2><p>${text("Chọn thêm sản phẩm hoặc bỏ lựa chọn trực tiếp trong bảng.", "Add or remove products directly from the comparison.")}</p></div>
        <button class="nutrition-reset" type="button" data-nutrition-action="clear-compare">${text("Xóa tất cả", "Clear all")}</button>
      </div>
      <div class="nutrition-selected-row">
        ${selected.map((product) => `<div><img src="${product.image}" alt=""><span>${product.name}</span><button type="button" title="${text("Bỏ khỏi so sánh", "Remove from comparison")}" aria-label="${text("Bỏ", "Remove")} ${product.name}" data-nutrition-action="remove-compare" data-product-id="${product.id}">${icon("close")}</button></div>`).join("")}
        ${selected.length < 3 ? `<button class="nutrition-add-compare" type="button" data-nutrition-action="find">+ ${text("Chọn thêm sản phẩm", "Add a product")}</button>` : ""}
      </div>
      <div class="nutrition-table-wrap">
        <table class="nutrition-compare-table">
          <thead><tr><th>${text("Tiêu chí", "Criterion")}</th>${selected.map((product) => `<th>${product.name}</th>`).join("")}</tr></thead>
          <tbody>${rows.map(([label, key, unit]) => `<tr><th>${label}</th>${selected.map((product) => `<td>${comparisonValue(product, key, unit)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
      <div class="nutrition-recommendations">
        <h3>${text("Gợi ý theo ưu tiên", "Suggestions by priority")}</h3>
        <div>
          ${recommendationCard(text("Ưu tiên năng lượng", "Energy priority"), numericEnergy, numericEnergy ? metric(numericEnergy.energy, "kcal/100 ml") : text("Cần thêm dữ liệu chuẩn hóa", "More normalized data needed"), "amber")}
          ${recommendationCard(text("Ưu tiên ít đường", "Lower sugar priority"), numericSugar, numericSugar ? metric(numericSugar.sugar, "g/100 ml") : text("Cần thêm dữ liệu chuẩn hóa", "More normalized data needed"), "rose")}
          ${recommendationCard(text("Ưu tiên canxi", "Calcium priority"), calcium, calcium ? metric(calcium.calcium, "mg/100 ml") : text("Cần thêm dữ liệu chuẩn hóa", "More normalized data needed"), "green")}
          ${recommendationCard(text("Ưu tiên giá tham khảo", "Reference price priority"), lowestPrice, formatPrice(lowestPrice.price), "blue")}
        </div>
        <p>${text("Các gợi ý chỉ phản ánh tiêu chí đang chọn, không kết luận sản phẩm tốt nhất và không thay thế đánh giá dinh dưỡng cá nhân.", "Suggestions reflect only the selected criterion; they do not identify a best product or replace individual nutrition assessment.")}</p>
      </div>
    `;
    renderCompareDock();
  }

  function renderCompareDock() {
    const dock = document.getElementById("nutritionCompareDock");
    if (!dock) return;
    dock.hidden = state.compare.length === 0;
    dock.innerHTML = `<span><strong>${state.compare.length}/3</strong> ${text("sản phẩm đang so sánh", "products selected")}</span><button type="button" data-nutrition-action="show-compare">${text("Xem so sánh", "View comparison")} ${icon("arrow")}</button>`;
  }

  function detailMetric(label, value) {
    return `<div><span>${label}</span><strong>${value}</strong></div>`;
  }

  function openDetail(product) {
    const backdrop = document.getElementById("nutritionDetailBackdrop");
    const detail = document.getElementById("nutritionDetail");
    if (!backdrop || !detail) return;
    detail.innerHTML = `
      <div class="nutrition-detail-header">
        <div><span class="nutrition-kicker">${product.brand}</span><h2 id="nutritionDetailTitle">${product.name}</h2><p>${product.needLabel}</p></div>
        <button class="nutrition-detail-close" type="button" title="${text("Đóng", "Close")}" aria-label="${text("Đóng chi tiết", "Close details")}" data-nutrition-action="close-detail">${icon("close")}</button>
      </div>
      <div class="nutrition-detail-main">
        <div class="nutrition-detail-product" data-product-id="${product.id}"><img src="${product.image}" alt="${product.name}"><span>${product.age}</span></div>
        <div class="nutrition-detail-summary">
          <div class="nutrition-fit-grid">
            <div><h3>${text("Phù hợp khi", "May fit when")}</h3><ul>${product.suitable.map((item) => `<li>${icon("check")}<span>${item}</span></li>`).join("")}</ul></div>
            <div class="is-caution"><h3>${text("Cần lưu ý", "Considerations")}</h3><ul>${product.cautions.map((item) => `<li>${icon("info")}<span>${item}</span></li>`).join("")}</ul></div>
          </div>
          <div class="nutrition-detail-metrics">
            ${detailMetric(text("Năng lượng", "Energy"), metric(product.energy, "kcal/100 ml"))}
            ${detailMetric(text("Protein", "Protein"), metric(product.protein, "g/100 ml"))}
            ${detailMetric(text("Canxi", "Calcium"), metric(product.calcium, "mg/100 ml"))}
            ${detailMetric(text("Đường", "Sugar"), metric(product.sugar, "g/100 ml"))}
          </div>
        </div>
      </div>
      <section class="nutrition-analysis">
        <div class="nutrition-analysis-icon">${icon("spark")}</div>
        <div><span>${text("Phân tích nhãn", "Label analysis")}</span><h3>${text("GrowthKid tóm tắt", "GrowthKid summary")}</h3><p>${product.analysis}</p><small>${text("Cập nhật", "Updated")}: ${product.updated}</small></div>
      </section>
      <section class="nutrition-sources">
        <div><h3>${text("Nguồn thông tin", "Information source")}</h3><a href="${product.source}" target="_blank" rel="noreferrer">${product.sourceLabel} ${icon("external")}</a></div>
        <p>${text("Thông số được chuẩn hóa theo 100 ml khi nguồn có đủ dữ liệu. Dấu 'chưa chuẩn hóa' nghĩa là GrowthKid chưa xác minh được phép quy đổi từ nhãn hiện hành.", "Values are normalized per 100 ml when sufficient source data is available. 'Not normalized' means GrowthKid has not yet verified a conversion from the current label.")}</p>
      </section>
      <section class="nutrition-sellers">
        <div><h3>${text("Nơi bán và trang hãng", "Sellers and manufacturer")}</h3><p>${text("Giá có thể thay đổi theo thời điểm.", "Prices may change over time.")}</p></div>
        <div>${product.sellers.map((seller) => `<a href="${seller.url}" target="_blank" rel="sponsored nofollow noreferrer"><span>${seller.name}</span>${icon("external")}</a>`).join("")}</div>
      </section>
    `;
    backdrop.hidden = false;
    document.body.classList.add("nutrition-detail-open");
    requestAnimationFrame(() => backdrop.classList.add("is-open"));
    detail.querySelector(".nutrition-detail-close")?.focus();
  }

  function closeDetail() {
    const backdrop = document.getElementById("nutritionDetailBackdrop");
    if (!backdrop || backdrop.hidden) return;
    backdrop.classList.remove("is-open");
    document.body.classList.remove("nutrition-detail-open");
    window.setTimeout(() => { backdrop.hidden = true; }, 160);
  }

  function showToast(message) {
    const toast = document.getElementById("nutritionToast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
  }

  function setFilter(group, value) {
    state[group] = value;
    root.querySelectorAll(`[data-filter-group="${group}"] [data-nutrition-action="filter"]`).forEach((button) => {
      const active = button.dataset.value === value;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderProducts();
  }

  function clearFilters() {
    ["age", "need", "price"].forEach((group) => setFilter(group, "all"));
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    writeStorage("growthkid:nutrition:favorites", [...state.favorites]);
    renderProducts();
  }

  function toggleCompare(id) {
    if (state.compare.includes(id)) state.compare = state.compare.filter((item) => item !== id);
    else if (state.compare.length < 3) state.compare.push(id);
    else {
      showToast(text("Bạn chỉ có thể so sánh tối đa 3 sản phẩm.", "You can compare up to 3 products."));
      return;
    }
    writeStorage("growthkid:nutrition:compare", state.compare);
    renderProducts();
    renderCompare();
  }

  function scrollTo(selector) {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  root.innerHTML = pageMarkup();
  renderProducts();
  renderCompare();

  root.addEventListener("click", (event) => {
    const actionElement = event.target.closest("[data-nutrition-action]");
    if (!actionElement) return;
    const action = actionElement.dataset.nutritionAction;
    const id = actionElement.dataset.productId;
    if (action === "filter") setFilter(actionElement.dataset.group, actionElement.dataset.value);
    else if (action === "clear-filters") clearFilters();
    else if (action === "favorite") toggleFavorite(id);
    else if (action === "compare" || action === "remove-compare") toggleCompare(id);
    else if (action === "clear-compare") {
      state.compare = [];
      writeStorage("growthkid:nutrition:compare", []);
      renderProducts();
      renderCompare();
    } else if (action === "detail") openDetail(products.find((product) => product.id === id));
    else if (action === "close-detail") closeDetail();
    else if (action === "find") scrollTo("#nutritionFilters");
    else if (action === "show-compare") {
      if (state.compare.length) scrollTo("#nutritionCompare");
      else scrollTo("#nutritionProductsTitle");
    }
  });

  document.getElementById("nutritionDetailBackdrop")?.addEventListener("click", (event) => {
    if (event.target.id === "nutritionDetailBackdrop") closeDetail();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDetail();
  });
})();
