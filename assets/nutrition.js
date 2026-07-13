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
      spark: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
      search: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="m16.2 16.2 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
      star: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
      sort: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 6h12M8 12h8M8 18h4M4 5v14m0 0-2-2m2 2 2-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    };
    return icons[name] || icons.info;
  };

  const categoryIcon = (name) => {
    const icons = {
      milk: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 3h6l1 3v2.2c1.2.8 2 2.2 2 3.8v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7c0-1.6.8-3 2-3.8V6l1-3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 11h8M10 6h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
      vitamin: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.2 18.8a4.2 4.2 0 0 1 0-5.9l4.7-4.7a4.2 4.2 0 1 1 5.9 5.9l-4.7 4.7a4.2 4.2 0 0 1-5.9 0Z" stroke="currentColor" stroke-width="1.7"/><path d="m10.5 10.6 5.9 5.9" stroke="currentColor" stroke-width="1.7"/></svg>',
      probiotic: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="8" cy="9" r="3" stroke="currentColor" stroke-width="1.7"/><circle cx="16" cy="15" r="3" stroke="currentColor" stroke-width="1.7"/><path d="M14 6h.01M7 17h.01M18 7h.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
      fiber: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19.5 4.5C12 4.8 7.2 8 6.4 14.2c4.7.7 10.8-.7 13.1-9.7Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M4 20c2.6-5.2 6.3-8.4 11.3-10.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
      medical: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M9 5V3h6v2M12 9v7M8.5 12.5h7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
      food: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 11h16c0 5-3.6 9-8 9s-8-4-8-9Z" stroke="currentColor" stroke-width="1.7"/><path d="M7 7c1.4-1.7 3.1-2.5 5-2.5M18 4v8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
      care: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3c3 4 5 6.6 5 10a5 5 0 0 1-10 0c0-3.4 2-6 5-10Z" stroke="currentColor" stroke-width="1.7"/><path d="M9.6 13.4c.4 1.2 1.2 1.8 2.4 1.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
    };
    const aliases = {
      weaning: "food", snack: "food", rash: "care", skin: "care", sun: "care",
      bath: "care", laundry: "care", wipes: "care", diaper: "care"
    };
    return icons[name] || icons[aliases[name]] || icons.milk;
  };

  // Source of truth: the workbook in outputs/nutrition-product-template-20260713.
  // Only products present in that workbook are published in this catalog.
  const products = [
    {
      id: "growplus-tieu-hoa-2-800g",
      section: "nutrition",
      category: "milk",
      subcategory: "digestive",
      name: "GrowPLUS+ Tiêu Hóa 2+",
      brand: "Nutifood Sweden",
      image: "/assets/nutrition/growplus-tieu-hoa-2-800g-cutout.webp",
      age: text("Trẻ từ 2 tuổi", "Children from 2 years"),
      ageGroups: ["2-5", "6-9", "10-15"],
      targets: ["child", "teen"],
      needs: ["digestion", "energy", "calcium"],
      needLabel: text("Hỗ trợ tiêu hóa và hấp thu", "Digestive and absorption support"),
      price: 410000,
      priceStatus: text("Giá tham khảo từ dữ liệu nhập ngày 13/07/2026", "Reference price from data entered on 13/07/2026"),
      energy: 95.2,
      protein: 3,
      calcium: 120,
      vitaminD: 1.75,
      sugar: 7.8,
      lactose: text("Có sữa, đậu nành, cá, lactose và sucrose", "Contains milk, soy, fish, lactose, and sucrose"),
      suitable: [text("Trẻ từ 2 tuổi cần bổ sung dinh dưỡng trong khẩu phần", "Children from 2 years needing nutritional supplementation"), text("Gia đình đang tìm sản phẩm có 2'-FL HMO, FOS và Bifidobacterium lactis", "Families looking for a product with 2'-FL HMO, FOS, and Bifidobacterium lactis")],
      cautions: [text("Không dùng cho trẻ dị ứng đạm sữa bò nếu chưa được đánh giá chuyên môn", "Do not use for children with cow's milk protein allergy without professional assessment"), text("Không dùng thay thế hoàn toàn bữa ăn chính", "Do not use as a complete replacement for main meals")],
      analysis: text("Nhãn công bố trên 100 g bột: 476 kcal; 15 g protein; 22 g chất béo; 52 g carbohydrate; 39 g đường tổng; 3,12 g chất xơ; 186 mg 2'-FL; 10⁸ CFU Bifidobacterium lactis; 58 mg DHA; 600 mg canxi và 350 IU vitamin D3. GrowthKid quy đổi tham khảo theo hướng dẫn pha 36 g bột với 180 ml nước; các chỉ số trên thẻ tương ứng với 100 ml nước dùng để pha.", "The label provides values per 100 g of powder: 476 kcal; 15 g protein; 22 g fat; 52 g carbohydrate; 39 g total sugars; 3.12 g fiber; 186 mg 2'-FL; 10⁸ CFU Bifidobacterium lactis; 58 mg DHA; 600 mg calcium; and 350 IU vitamin D3. GrowthKid provides a reference conversion using the preparation instruction of 36 g powder with 180 ml water; card values correspond to each 100 ml of water used for preparation."),
      normalizationNote: text("Với sản phẩm này, các giá trị hiển thị được quy đổi từ bảng dinh dưỡng trên 100 g bột theo hướng dẫn pha 36 g bột với 180 ml nước. Kết quả tính trên 100 ml nước dùng để pha; thể tích sữa thành phẩm có thể lớn hơn 180 ml, vì vậy số liệu chỉ dùng để tham khảo khi so sánh.", "For this product, displayed values are converted from the nutrition table per 100 g of powder using the preparation instruction of 36 g powder with 180 ml water. Results are calculated per 100 ml of water used for preparation; final prepared volume may exceed 180 ml, so the values are for comparison only."),
      source: "https://nutifoodsweden.com/vi/product/growplus-tieu-hoa/",
      sourceLabel: "NutiFood Sweden – GrowPLUS+ Tiêu Hóa",
      updated: "13/07/2026",
      sellers: [
        { name: text("Trang sản phẩm NutiFood Sweden", "NutiFood Sweden product page"), url: "https://nutifoodsweden.com/vi/product/growplus-tieu-hoa/", kind: "official", platform: "nutifood" },
        { name: "Shopee", url: "https://s.shopee.vn/6VMEtmZJVx", kind: "affiliate", platform: "shopee" }
      ]
    },
    {
      id: "pediasure-pha-san-vani-110ml-4-loc",
      section: "nutrition",
      category: "milk",
      subcategory: "medical",
      name: "PediaSure pha sẵn hương vani 110 ml – 4 lốc (16 hộp)",
      brand: "Abbott",
      image: "/assets/nutrition/pediasure-ready-110ml-4pack.jpg",
      age: text("Trẻ 1-10 tuổi", "Children 1-10 years"),
      ageGroups: ["12-23", "2-5", "6-9"],
      targets: ["child"],
      needs: ["energy", "meal", "calcium", "digestion"],
      needLabel: text("Dinh dưỡng y học pha sẵn, ít ngọt", "Ready-to-drink medical nutrition"),
      price: 408000,
      priceStatus: text("Giá tham khảo từ dữ liệu nhập ngày 13/07/2026", "Reference price from data entered on 13/07/2026"),
      energy: 100,
      protein: 3,
      calcium: 100,
      vitaminD: 2,
      sugar: 4.1,
      lactose: text("Rất ít lactose (0,10 g/100 ml); có đạm sữa và đạm đậu nành", "Very low lactose (0.10 g/100 ml); contains milk and soy protein"),
      suitable: [text("Trẻ 1-10 tuổi cần nguồn dinh dưỡng bổ sung tiện dùng", "Children aged 1-10 needing convenient supplemental nutrition"), text("Trẻ biếng ăn, nhẹ cân hoặc có khẩu phần chưa đáp ứng nhu cầu sau đánh giá", "Children with low intake or growth concerns after assessment")],
      cautions: [text("Không dùng cho trẻ mắc galactosemia hoặc trẻ dưới 1 tuổi nếu không có chỉ định", "Do not use for galactosemia or under age 1 without professional direction"), text("Trẻ dị ứng đạm sữa bò hoặc có bệnh lý cần dùng dưới hướng dẫn của nhân viên y tế", "Children with cow's milk protein allergy or medical conditions need professional guidance")],
      analysis: text("Trong 100 ml: 100 kcal; 3,0 g protein; 3,85 g chất béo; 13,0 g carbohydrate; 4,1 g đường tổng; 0,10 g lactose; 0,70 g FOS; 35 mg CPP; 5 mg DHA; 100 mg canxi; 80 IU vitamin D3 và 1,78 mcg vitamin K2.", "Per 100 ml: 100 kcal; 3.0 g protein; 3.85 g fat; 13.0 g carbohydrate; 4.1 g total sugars; 0.10 g lactose; 0.70 g FOS; 35 mg CPP; 5 mg DHA; 100 mg calcium; 80 IU vitamin D3; and 1.78 mcg vitamin K2."),
      source: "https://pediasure.abbottvietnam.com.vn/4-loc-pediasure-10-huong-vani-110ml-voucher.html",
      sourceLabel: "PediaSure Việt Nam – Abbott",
      updated: "13/07/2026",
      sellers: [
        { name: text("Trang sản phẩm PediaSure", "PediaSure product page"), url: "https://pediasure.abbottvietnam.com.vn/4-loc-pediasure-10-huong-vani-110ml-voucher.html", kind: "official", platform: "abbott" },
        { name: "Shopee", url: "https://s.shopee.vn/1Le8mF6JsU", kind: "affiliate", platform: "shopee" }
      ]
    },
    {
      id: "nutren-junior-pha-san-vani-110ml-thung-36",
      section: "nutrition",
      category: "milk",
      subcategory: "medical",
      name: "Nutren Junior pha sẵn hương vani 110 ml – thùng 36 hộp",
      brand: "Nestlé Health Science",
      image: "/assets/nutrition/nutren-junior-ready-110ml.jpg",
      age: text("Trẻ 1-10 tuổi", "Children 1-10 years"),
      ageGroups: ["12-23", "2-5", "6-9"],
      targets: ["child"],
      needs: ["energy", "meal", "digestion"],
      needLabel: text("Dinh dưỡng y học pha sẵn giàu năng lượng", "Energy-dense ready-to-drink medical nutrition"),
      price: 550000,
      priceStatus: text("Giá tham khảo từ dữ liệu nhập ngày 13/07/2026", "Reference price from data entered on 13/07/2026"),
      energy: 100,
      protein: 3,
      calcium: 100,
      vitaminD: 0.84,
      sugar: 3.91,
      lactose: text("Có sữa và đậu nành; kiểm tra nhãn nếu không dung nạp lactose", "Contains milk and soy; check the label for lactose intolerance"),
      suitable: [text("Trẻ 1-10 tuổi cần bổ sung năng lượng và dưỡng chất", "Children aged 1-10 needing supplemental energy and nutrients"), text("Trẻ có vấn đề ăn uống, kém hấp thu hoặc nhu cầu năng lượng cao sau đánh giá", "Children with feeding, absorption, or higher-energy needs after assessment")],
      cautions: [text("Không dùng cho trẻ dưới 1 tuổi hoặc người dị ứng với thành phần sản phẩm", "Do not use under age 1 or with allergy to product ingredients"), text("Dùng để hỗ trợ bệnh lý hoặc hồi phục trước, sau phẫu thuật cần có hướng dẫn chuyên môn", "Use for medical recovery or perioperative support requires professional guidance")],
      analysis: text("Trong 100 ml: 100 kcal; 3,0 g protein; 4,73 g chất béo; 10,64 g carbohydrate; 3,91 g đường tổng; 1,55 g FOS; 100 mg canxi; 0,82 mg kẽm; 0,82 mg sắt và 33,6 IU vitamin D.", "Per 100 ml: 100 kcal; 3.0 g protein; 4.73 g fat; 10.64 g carbohydrate; 3.91 g total sugars; 1.55 g FOS; 100 mg calcium; 0.82 mg zinc; 0.82 mg iron; and 33.6 IU vitamin D."),
      source: "https://www.nestlehealthscience.vn/nutren-junior-hop-pha-san",
      sourceLabel: "Nestlé Health Science Việt Nam – Nutren Junior",
      updated: "13/07/2026",
      sellers: [
        { name: text("Trang sản phẩm Nestlé", "Nestlé product page"), url: "https://www.nestlehealthscience.vn/nutren-junior-hop-pha-san", kind: "official", platform: "nestle" },
        { name: "Shopee", url: "https://s.shopee.vn/18lBoMx9O", kind: "affiliate", platform: "shopee" }
      ]
    },
    {
      id: "vinamilk-sua-tuoi-tach-beo-khong-duong-180ml-thung-48",
      section: "nutrition",
      category: "milk",
      subcategory: "daily",
      name: "Vinamilk 100% Sữa tươi tiệt trùng tách béo không đường 180 ml – thùng 48 hộp",
      brand: "Vinamilk",
      image: "/assets/nutrition/vinamilk-skim-unsweetened-180ml.png",
      age: text("Từ 2 tuổi và người lớn", "From age 2 and adults"),
      ageGroups: ["2-5", "6-9", "10-15"],
      targets: ["child", "teen", "adult"],
      needs: ["daily", "calcium", "less-sugar"],
      needLabel: text("Sữa tươi tách béo, không bổ sung đường sucrose", "Skimmed fresh milk with no added sucrose"),
      price: 510106,
      priceStatus: text("Giá tham khảo từ dữ liệu nhập ngày 13/07/2026", "Reference price from data entered on 13/07/2026"),
      energy: 37,
      protein: 3,
      calcium: 110,
      vitaminD: null,
      sugar: null,
      lactose: text("Có sữa bò và lactose tự nhiên; 'không đường' nghĩa là không bổ sung sucrose", "Contains cow's milk and natural lactose; 'unsweetened' means no added sucrose"),
      suitable: [text("Trẻ từ 2 tuổi và người lớn cần bổ sung đạm, canxi trong khẩu phần", "Children from age 2 and adults needing dietary protein and calcium"), text("Người cần kiểm soát lượng chất béo và không muốn dùng sữa bổ sung sucrose", "People limiting fat intake and avoiding added sucrose")],
      cautions: [text("Không phù hợp khi dị ứng đạm sữa bò, galactosemia hoặc không dung nạp lactose chưa được đánh giá", "Not suitable for cow's milk protein allergy, galactosemia, or unassessed lactose intolerance"), text("Không dùng làm sữa uống thường quy cho trẻ 12-23 tháng nếu không có chỉ định chuyên môn", "Do not use as routine milk for ages 12-23 months without professional advice")],
      analysis: text("Trong 100 ml: 37 kcal; 3,0 g protein; 1,0 g chất béo; 4,0 g carbohydrate; 110 mg canxi và 90 mg phospho. Sản phẩm làm từ sữa tươi tách béo 100% và không bổ sung đường sucrose.", "Per 100 ml: 37 kcal; 3.0 g protein; 1.0 g fat; 4.0 g carbohydrate; 110 mg calcium; and 90 mg phosphorus. Made from 100% skimmed fresh milk with no added sucrose."),
      source: "https://www.vinamilk.com.vn/products/sua-tuoi-it-beo-tiet-trung-khong-duong",
      sourceLabel: "Vinamilk – 100% Sữa Tươi",
      updated: "13/07/2026",
      sellers: [
        { name: text("Trang sản phẩm Vinamilk", "Vinamilk product page"), url: "https://www.vinamilk.com.vn/products/sua-tuoi-it-beo-tiet-trung-khong-duong", kind: "official", platform: "vinamilk" },
        { name: "Shopee", url: "https://s.shopee.vn/111IX9c3Rk", kind: "affiliate", platform: "shopee" }
      ]
    },
    {
      id: "lineabon-d3k2-drops-10ml",
      section: "nutrition",
      category: "vitamin",
      subcategory: "d3-k2",
      name: "LineaBon D3K2 Drops 10 ml",
      brand: "LineaBon",
      image: "/assets/nutrition/lineabon-d3k2-10ml.png",
      age: text("Từ sơ sinh đến người lớn", "From birth through adulthood"),
      ageGroups: ["under-6", "6-11", "12-23", "2-5", "6-9", "10-15"],
      targets: ["infant", "child", "teen", "adult"],
      needs: ["daily", "calcium"],
      needLabel: text("Bổ sung vitamin D3 và K2 dạng MK-7", "Vitamin D3 and MK-7 vitamin K2 drops"),
      price: 325000,
      priceStatus: text("Giá tham khảo từ dữ liệu nhập ngày 13/07/2026", "Reference price from data entered on 13/07/2026"),
      energy: null,
      protein: null,
      calcium: null,
      vitaminD: null,
      sugar: null,
      displayMetrics: [
        { label: text("Vitamin D3", "Vitamin D3"), value: text("400 IU / 6 giọt", "400 IU / 6 drops") },
        { label: text("Vitamin K2", "Vitamin K2"), value: text("22,5 mcg / 6 giọt", "22.5 mcg / 6 drops") },
        { label: text("Liều công bố", "Label serving"), value: text("0,20 ml / 6 giọt", "0.20 ml / 6 drops") },
        { label: text("Quy cách", "Package"), value: "10 ml" }
      ],
      lactose: text("Không ghi nhận thành phần sữa trên nguồn hãng; kiểm tra nhãn hiện hành nếu có tiền sử dị ứng", "No milk ingredient is stated on the manufacturer source; check the current label for allergy history"),
      suitable: [text("Trẻ từ sơ sinh và người lớn cần bổ sung vitamin D3, K2 theo đánh giá khẩu phần", "Infants, children, and adults needing D3 and K2 after dietary assessment"), text("Người cần hỗ trợ hấp thu và sử dụng canxi", "People needing support for calcium absorption and utilization")],
      cautions: [text("Tính tổng vitamin D và K từ mọi sản phẩm đang dùng để tránh trùng liều", "Add vitamin D and K from all products to avoid duplicate dosing"), text("Bệnh thận, tăng canxi máu, sỏi thận hoặc dùng thuốc kháng vitamin K cần hỏi bác sĩ", "Kidney disease, hypercalcemia, kidney stones, or vitamin K antagonists require medical advice")],
      analysis: text("Liều công bố 0,20 ml tương đương 6 giọt cung cấp 400 IU vitamin D3 và 22,5 mcg vitamin K2 dạng MK-7. Đây là thực phẩm bổ sung; liều sử dụng cá nhân cần đối chiếu tuổi, khẩu phần và các sản phẩm đang dùng.", "The label serving of 0.20 ml, equivalent to 6 drops, provides 400 IU vitamin D3 and 22.5 mcg MK-7 vitamin K2. This is a supplement; individual use should consider age, diet, and other products."),
      normalizationNote: text("Hàm lượng được hiển thị theo liều 6 giọt do hãng công bố, không quy đổi sang 100 ml và không dùng để suy ra liều điều trị.", "Amounts are shown per the manufacturer's 6-drop serving, not normalized to 100 ml and not intended to infer a treatment dose."),
      source: "https://www.lineabon.vn/product-page/lineabon-d3k2",
      sourceLabel: "LineaBon Việt Nam",
      updated: "13/07/2026",
      sellers: [
        { name: text("Trang sản phẩm LineaBon", "LineaBon product page"), url: "https://www.lineabon.vn/product-page/lineabon-d3k2", kind: "official", platform: "lineabon" },
        { name: "Shopee", url: "https://s.shopee.vn/6VMEvn1nep", kind: "affiliate", platform: "shopee" }
      ]
    }
  ];

  const legacyCategories = [
    {
      id: "milk",
      label: text("Sữa dinh dưỡng", "Nutrition milk"),
      shortLabel: text("Sữa", "Milk"),
      description: text("Sữa bổ sung hằng ngày, tăng năng lượng và hỗ trợ khẩu phần theo từng giai đoạn.", "Daily nutrition, higher-energy formulas, and age-specific supplementation."),
      subcategories: [
        ["all", text("Tất cả", "All")], ["daily", text("Dùng hằng ngày", "Daily")],
        ["weight", text("Tăng cân", "Weight support")], ["height", text("Chiều cao", "Height support")],
        ["low-sugar", text("Ít đường", "Lower sugar")], ["lactose-free", text("Không lactose", "Lactose-free")],
        ["picky", text("Trẻ biếng ăn", "Picky eaters")], ["adult", text("Người lớn", "Adults")],
        ["pregnancy", text("Mẹ bầu", "Pregnancy")]
      ]
    },
    {
      id: "vitamin",
      label: text("Vitamin & khoáng chất", "Vitamins & minerals"),
      shortLabel: text("Vitamin", "Vitamins"),
      description: text("D3, K2, DHA, kẽm, sắt, canxi và vi chất theo thông tin trên nhãn.", "D3, K2, DHA, zinc, iron, calcium, and label-backed micronutrients."),
      subcategories: [["all", text("Tất cả", "All")], ["d3", "Vitamin D3"], ["d3-k2", "Vitamin D3 + K2"], ["dha", "DHA"], ["omega-3", "Omega-3"], ["zinc", text("Kẽm", "Zinc")], ["iron", text("Sắt", "Iron")], ["calcium", text("Canxi", "Calcium")], ["multi", text("Đa vitamin", "Multivitamin")]]
    },
    {
      id: "probiotic",
      label: text("Men vi sinh", "Probiotics"),
      shortLabel: text("Men vi sinh", "Probiotics"),
      description: text("Sản phẩm theo chủng vi sinh, hàm lượng CFU và mục đích sử dụng trên nhãn.", "Products organized by probiotic strain, CFU amount, and labelled use."),
      subcategories: [["all", text("Tất cả", "All")], ["diarrhea", text("Tiêu chảy", "Diarrhea")], ["constipation", text("Táo bón", "Constipation")], ["antibiotic", text("Sau kháng sinh", "After antibiotics")], ["colic", "Colic"], ["digestion", text("Hỗ trợ tiêu hóa", "Digestive support")]]
    },
    {
      id: "fiber",
      label: text("Chất xơ", "Fiber"),
      shortLabel: text("Chất xơ", "Fiber"),
      description: text("Inulin, FOS, GOS và chất xơ hòa tan với liều dùng được đối chiếu từ nhãn.", "Inulin, FOS, GOS, and soluble fiber with label-checked serving information."),
      subcategories: [["all", text("Tất cả", "All")], ["inulin", "Inulin"], ["fos", "FOS"], ["gos", "GOS"], ["fibersol", "Fibersol"], ["soluble", text("Chất xơ hòa tan", "Soluble fiber")]]
    },
    {
      id: "medical",
      label: text("Dinh dưỡng y học", "Medical nutrition"),
      shortLabel: text("Dinh dưỡng y học", "Medical nutrition"),
      description: text("Dinh dưỡng toàn phần, năng lượng cao và peptide cần được lựa chọn theo đánh giá chuyên môn.", "Complete, higher-energy, and peptide nutrition intended for professionally guided use."),
      subcategories: [["all", text("Tất cả", "All")], ["high-energy", text("Năng lượng cao", "Higher energy")], ["complete", text("Dinh dưỡng toàn phần", "Complete nutrition")], ["peptide", "Peptide"], ["tube", text("Qua ống", "Tube feeding")], ["recovery", text("Phục hồi", "Recovery")]]
    },
    {
      id: "food",
      label: text("Ăn dặm & snack", "Weaning & snacks"),
      shortLabel: text("Ăn dặm", "Weaning"),
      description: text("Bột, cháo, mì, dầu ăn dặm và snack với thành phần, đường, natri rõ ràng.", "Cereals, porridge, noodles, oils, and snacks with clear ingredient information."),
      subcategories: [["all", text("Tất cả", "All")], ["cereal", text("Bột ăn dặm", "Baby cereal")], ["porridge", text("Cháo", "Porridge")], ["noodle", text("Nui & mì", "Pasta & noodles")], ["oil", text("Dầu ăn dặm", "Weaning oil")], ["snack", text("Bánh & puff", "Snacks & puffs")], ["seaweed", text("Rong biển", "Seaweed")]]
    },
    {
      id: "care",
      label: text("Chăm sóc mẹ & bé", "Mother & baby care"),
      shortLabel: text("Mẹ & bé", "Mother & baby"),
      description: text("Tã bỉm, chăm sóc da, tắm gội và đồ dùng thiết yếu cho trẻ nhỏ.", "Diapers, skin care, bath products, and everyday essentials for young children."),
      subcategories: [["all", text("Tất cả", "All")], ["diaper", text("Tã bỉm", "Diapers")], ["rash", text("Kem chống hăm", "Rash cream")], ["skin", text("Dưỡng da", "Skin care")], ["sun", text("Chống nắng", "Sun care")], ["bath", text("Tắm gội", "Bath & hair")], ["laundry", text("Nước giặt", "Laundry")], ["wipes", text("Khăn ướt", "Wipes")]]
    }
  ];

  const productAreas = [
    {
      id: "nutrition",
      label: text("Dinh dưỡng", "Nutrition"),
      description: text("Thực phẩm, vi chất và sản phẩm dinh dưỡng theo độ tuổi hoặc nhu cầu sử dụng.", "Foods, nutrients, and nutrition products organized by age and intended use."),
      defaultCategory: "milk"
    },
    {
      id: "care",
      label: text("Chăm sóc Mẹ & Bé", "Mother & baby care"),
      description: text("Sản phẩm chăm sóc da, vệ sinh và đồ dùng thiết yếu cho mẹ và trẻ nhỏ.", "Skin care, hygiene, and everyday essentials for mothers and children."),
      defaultCategory: "rash"
    }
  ];

  const categories = [
    {
      id: "milk", area: "nutrition", label: text("Sữa dinh dưỡng", "Nutrition milk"), shortLabel: text("Sữa dinh dưỡng", "Nutrition milk"),
      description: text("Sữa bổ sung hằng ngày, hỗ trợ tăng trưởng và sản phẩm dinh dưỡng y học theo từng nhu cầu.", "Daily milk, growth support, and medical nutrition products organized by intended use."),
      subcategories: [["all", text("Tất cả", "All")], ["daily", text("Dùng hằng ngày", "Daily")], ["weight", text("Tăng cân", "Weight support")], ["height", text("Chiều cao", "Height support")], ["digestive", text("Hỗ trợ tiêu hóa", "Digestive support")], ["medical", text("Dinh dưỡng y học", "Medical nutrition")], ["low-sugar", text("Ít đường", "Lower sugar")], ["lactose-free", text("Không lactose", "Lactose-free")], ["picky", text("Trẻ biếng ăn", "Picky eaters")], ["adult", text("Người lớn", "Adults")], ["pregnancy", text("Mẹ bầu", "Pregnancy")]]
    },
    {
      id: "vitamin", area: "nutrition", label: text("Vitamin và khoáng chất", "Vitamins & minerals"), shortLabel: text("Vitamin & khoáng chất", "Vitamins & minerals"),
      description: text("D3, K2, DHA, kẽm, sắt, canxi và vi chất theo thông tin trên nhãn.", "D3, K2, DHA, zinc, iron, calcium, and label-backed micronutrients."),
      subcategories: [["all", text("Tất cả", "All")], ["d3", "Vitamin D3"], ["d3-k2", "Vitamin D3 + K2"], ["dha", "DHA"], ["omega-3", "Omega-3"], ["vitamin-c", "Vitamin C"], ["zinc", text("Kẽm", "Zinc")], ["iron", text("Sắt", "Iron")], ["calcium", text("Canxi", "Calcium")], ["magnesium", text("Magie", "Magnesium")], ["multi", text("Vitamin tổng hợp", "Multivitamin")], ["lysine", "Lysine"]]
    },
    {
      id: "probiotic", area: "nutrition", label: text("Men vi sinh", "Probiotics"), shortLabel: text("Men vi sinh", "Probiotics"),
      description: text("Phân loại theo chủng vi sinh, CFU và nhu cầu tham khảo ghi trên nhãn.", "Organized by probiotic strain, CFU amount, and label-stated use."),
      subcategories: [["all", text("Tất cả", "All")], ["diarrhea", text("Tiêu chảy", "Diarrhea")], ["constipation", text("Táo bón", "Constipation")], ["antibiotic", text("Sau kháng sinh", "After antibiotics")], ["allergy", text("Dị ứng", "Allergy")], ["colic", "Colic"]]
    },
    {
      id: "fiber", area: "nutrition", label: text("Chất xơ và prebiotic", "Fiber & prebiotics"), shortLabel: text("Chất xơ & prebiotic", "Fiber & prebiotics"),
      description: text("Inulin, FOS, GOS và chất xơ hòa tan với liều dùng được đối chiếu từ nhãn.", "Inulin, FOS, GOS, and soluble fiber with label-checked serving information."),
      subcategories: [["all", text("Tất cả", "All")], ["inulin", "Inulin"], ["fos", "FOS"], ["gos", "GOS"], ["fibersol", "Fibersol"], ["soluble", text("Chất xơ hòa tan", "Soluble fiber")]]
    },
    {
      id: "medical", area: "nutrition", hidden: true, label: text("Dinh dưỡng y học", "Medical nutrition"), shortLabel: text("Dinh dưỡng y học", "Medical nutrition"),
      description: text("Dinh dưỡng toàn phần, năng lượng cao và peptide cần được lựa chọn theo đánh giá chuyên môn.", "Complete, higher-energy, and peptide nutrition intended for professionally guided use."),
      subcategories: [["all", text("Tất cả", "All")], ["high-energy", text("Năng lượng cao", "Higher energy")], ["complete", text("Dinh dưỡng toàn phần", "Complete nutrition")], ["peptide", "Peptide"], ["tube", text("Qua ống", "Tube feeding")], ["recovery", text("Phục hồi", "Recovery")]]
    },
    {
      id: "weaning", area: "nutrition", label: text("Đồ ăn dặm", "Weaning foods"), shortLabel: text("Đồ ăn dặm", "Weaning foods"),
      description: text("Bột, cháo, nui, mì, gia vị và dầu ăn dặm với thành phần rõ ràng.", "Cereals, porridge, pasta, seasonings, and weaning oils with clear ingredients."),
      subcategories: [["all", text("Tất cả", "All")], ["cereal", text("Bột ăn dặm", "Baby cereal")], ["porridge", text("Cháo", "Porridge")], ["noodle", text("Nui và mì", "Pasta & noodles")], ["seasoning", text("Gia vị ăn dặm", "Seasoning")], ["oil", text("Dầu ăn dặm", "Weaning oil")]]
    },
    {
      id: "snack", area: "nutrition", label: text("Snack lành mạnh", "Healthy snacks"), shortLabel: text("Snack lành mạnh", "Healthy snacks"),
      description: text("Bánh ăn dặm, bánh gạo, puff, trái cây sấy và rong biển.", "Baby biscuits, rice crackers, puffs, dried fruit, and seaweed."),
      subcategories: [["all", text("Tất cả", "All")], ["baby-biscuit", text("Bánh ăn dặm", "Baby biscuits")], ["rice-cracker", text("Bánh gạo", "Rice crackers")], ["puff", "Puff"], ["dried-fruit", text("Trái cây sấy", "Dried fruit")], ["seaweed", text("Rong biển", "Seaweed")]]
    },
    {
      id: "rash", area: "care", label: text("Kem chống hăm", "Diaper rash care"), shortLabel: text("Kem chống hăm", "Rash care"),
      description: text("Kem, thuốc mỡ và sản phẩm bảo vệ vùng da mặc tã.", "Creams, ointments, and barrier products for diaper-area skin."),
      subcategories: [["all", text("Tất cả", "All")], ["cream", text("Dạng kem", "Cream")], ["ointment", text("Thuốc mỡ", "Ointment")], ["spray", text("Dạng xịt", "Spray")]]
    },
    {
      id: "skin", area: "care", label: text("Kem dưỡng da trẻ em", "Children's skin care"), shortLabel: text("Dưỡng da trẻ em", "Skin care"),
      description: text("Dưỡng ẩm và bảo vệ hàng rào da theo loại da và độ tuổi.", "Moisturizers and barrier care organized by skin type and age."),
      subcategories: [["all", text("Tất cả", "All")], ["lotion", "Lotion"], ["cream", text("Kem dưỡng", "Cream")], ["balm", "Balm"]]
    },
    {
      id: "sun", area: "care", label: text("Kem chống nắng trẻ em", "Children's sunscreen"), shortLabel: text("Chống nắng trẻ em", "Sunscreen"),
      description: text("Sản phẩm chống nắng theo tuổi, loại màng lọc và loại da.", "Sun protection organized by age, filter type, and skin type."),
      subcategories: [["all", text("Tất cả", "All")], ["mineral", text("Vật lý", "Mineral")], ["hybrid", text("Lai", "Hybrid")], ["stick", text("Dạng thỏi", "Stick")]]
    },
    {
      id: "bath", area: "care", label: text("Dầu gội và sữa tắm", "Bath & hair care"), shortLabel: text("Dầu gội & sữa tắm", "Bath & hair"),
      description: text("Sữa tắm, dầu gội và sản phẩm hai trong một cho trẻ nhỏ.", "Body wash, shampoo, and two-in-one products for children."),
      subcategories: [["all", text("Tất cả", "All")], ["body-wash", text("Sữa tắm", "Body wash")], ["shampoo", text("Dầu gội", "Shampoo")], ["two-in-one", text("Hai trong một", "Two-in-one")]]
    },
    {
      id: "laundry", area: "care", label: text("Nước giặt trẻ em", "Baby laundry"), shortLabel: text("Nước giặt trẻ em", "Baby laundry"),
      description: text("Nước giặt, xả và xử lý vết bẩn dành cho quần áo trẻ nhỏ.", "Detergent, softener, and stain care for children's clothing."),
      subcategories: [["all", text("Tất cả", "All")], ["detergent", text("Nước giặt", "Detergent")], ["softener", text("Nước xả", "Softener")], ["stain", text("Tẩy vết bẩn", "Stain care")]]
    },
    {
      id: "wipes", area: "care", label: text("Khăn ướt", "Wet wipes"), shortLabel: text("Khăn ướt", "Wet wipes"),
      description: text("Khăn ướt theo thành phần, hương liệu và loại da.", "Wet wipes organized by ingredients, fragrance, and skin type."),
      subcategories: [["all", text("Tất cả", "All")], ["water", text("Gốc nước", "Water-based")], ["sensitive", text("Da nhạy cảm", "Sensitive skin")], ["biodegradable", text("Phân hủy sinh học", "Biodegradable")]]
    },
    {
      id: "diaper", area: "care", label: text("Tã bỉm", "Diapers"), shortLabel: text("Tã bỉm", "Diapers"),
      description: text("Tã dán, tã quần và tã bơi theo cân nặng, kích cỡ và nhu cầu sử dụng.", "Tape, pant, and swim diapers organized by weight, size, and use."),
      subcategories: [["all", text("Tất cả", "All")], ["tape", text("Tã dán", "Tape diapers")], ["pants", text("Tã quần", "Pant diapers")], ["swim", text("Tã bơi", "Swim diapers")]]
    }
  ];

  const state = {
    area: "nutrition",
    category: "milk",
    subcategory: "all",
    age: "all",
    audience: "all",
    need: "all",
    brand: "all",
    price: "all",
    seller: "all",
    query: "",
    sort: "recommended",
    favoritesOnly: false,
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

  function productDisplayMetrics(product) {
    if (Array.isArray(product.displayMetrics)) return product.displayMetrics;
    return [
      { label: text("Năng lượng", "Energy"), value: metric(product.energy, "kcal/100 ml") },
      { label: text("Protein", "Protein"), value: metric(product.protein, "g/100 ml") },
      { label: text("Canxi", "Calcium"), value: metric(product.calcium, "mg/100 ml") },
      { label: text("Đường", "Sugar"), value: metric(product.sugar, "g/100 ml") }
    ];
  }

  function filterButton(group, value, label, active) {
    return `<button class="nutrition-chip${active ? " is-active" : ""}" type="button" data-nutrition-action="filter" data-group="${group}" data-value="${value}" aria-pressed="${active}">${label}</button>`;
  }

  function sellerLink(seller) {
    let url = "#";
    try {
      const parsed = new URL(seller.url);
      if (["http:", "https:"].includes(parsed.protocol)) url = parsed.href;
    } catch (error) {
      url = "#";
    }
    const isAffiliate = seller.kind === "affiliate";
    const rel = isAffiliate ? "sponsored nofollow noopener noreferrer" : "noopener noreferrer";
    return `<a href="${url}" target="_blank" rel="${rel}" data-seller-kind="${seller.kind || "official"}" data-marketplace="${seller.platform || "official"}"><span>${seller.name}</span>${icon("external")}</a>`;
  }

  function productSellerLink(product, platform, label) {
    const seller = product.sellers.find((item) => platform === "official" ? item.kind === "official" : item.platform === platform);
    if (!seller) return `<span class="is-disabled">${label}</span>`;
    let url = "#";
    try {
      const parsed = new URL(seller.url);
      if (["http:", "https:"].includes(parsed.protocol)) url = parsed.href;
    } catch (error) {
      url = "#";
    }
    const rel = seller.kind === "affiliate" ? "sponsored nofollow noopener noreferrer" : "noopener noreferrer";
    return `<a href="${url}" target="_blank" rel="${rel}" data-marketplace="${platform}">${label}${icon("external")}</a>`;
  }

  function activeCategory() {
    return categories.find((category) => category.id === state.category)
      || categories.find((category) => category.area === state.area)
      || categories[0];
  }

  function activeArea() {
    return productAreas.find((area) => area.id === state.area) || productAreas[0];
  }

  function areaCategories(areaId = state.area) {
    return categories.filter((category) => category.area === areaId && !category.hidden);
  }

  function areaProductCount(areaId) {
    return products.filter((product) => product.section === areaId).length;
  }

  function areaButton(area) {
    const count = areaProductCount(area.id);
    const active = area.id === state.area;
    return `<button class="nutrition-area-tab${active ? " is-active" : ""}" type="button" role="tab" aria-selected="${active}" data-nutrition-action="area" data-area="${area.id}">
      <span class="nutrition-area-tab-copy"><strong>${area.label}</strong><small>${area.description}</small></span>
      <span class="nutrition-area-tab-count">${count ? text(`${count} sản phẩm`, `${count} products`) : text("Đang xây dữ liệu", "Data in progress")}</span>
    </button>`;
  }

  function categoryProductCount(categoryId) {
    return products.filter((product) => product.category === categoryId).length;
  }

  function categoryTab(category) {
    const count = categoryProductCount(category.id);
    const active = category.id === state.category;
    return `<button class="nutrition-category-tab${active ? " is-active" : ""}" type="button" role="tab" aria-selected="${active}" data-nutrition-action="category" data-category="${category.id}">
      <span class="nutrition-category-icon">${categoryIcon(category.id)}</span>
      <span class="nutrition-category-name">${category.shortLabel}</span>
      <span class="nutrition-category-count">${count ? text(`${count} sản phẩm`, `${count} products`) : text("Đang cập nhật", "Updating")}</span>
    </button>`;
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

      <section class="nutrition-category-band" aria-labelledby="nutritionCategoryTitle">
        <div class="container">
          <div class="nutrition-category-heading">
            <div><span class="nutrition-kicker">${text("Hai khu vực riêng biệt", "Two distinct areas")}</span><h2 id="nutritionCategoryTitle">${text("Bạn đang tìm sản phẩm thuộc khu vực nào?", "Which product area are you looking for?")}</h2></div>
            <span>${text("Chỉ hiển thị sản phẩm có nguồn đối chiếu", "Only source-backed products are shown")}</span>
          </div>
          <div class="nutrition-area-tabs" id="nutritionAreaTabs" role="tablist">${productAreas.map(areaButton).join("")}</div>
          <div class="nutrition-category-subheading"><span class="nutrition-kicker">${text("Danh mục trong khu vực", "Categories in this area")}</span><strong id="nutritionAreaLabel"></strong></div>
          <div class="nutrition-category-scroll">
            <div class="nutrition-category-tabs" id="nutritionCategoryTabs" role="tablist" style="--nutrition-category-columns:${areaCategories().length}">${areaCategories().map(categoryTab).join("")}</div>
          </div>
          <div class="nutrition-category-context" id="nutritionCategoryContext"></div>
        </div>
      </section>

      <section class="container nutrition-workspace">
        <div class="nutrition-medical-note" id="nutritionSafetyNote">${icon("info")}<span></span></div>

        <div class="nutrition-catalog-toolbar" aria-label="${text("Tìm và sắp xếp sản phẩm", "Search and sort products")}">
          <label class="nutrition-search" for="nutritionSearch">${icon("search")}<span class="sr-only">${text("Tìm sản phẩm", "Search products")}</span><input id="nutritionSearch" type="search" autocomplete="off" placeholder="${text("Tìm theo tên hoặc thương hiệu", "Search by product or brand")}"></label>
          <button class="nutrition-toolbar-button" type="button" data-nutrition-action="favorites-only" aria-pressed="false">${icon("star")}<span>${text("Đã lưu", "Saved")}</span><strong id="nutritionFavoriteCount">${state.favorites.size}</strong></button>
          <label class="nutrition-sort" for="nutritionSort">${icon("sort")}<span class="sr-only">${text("Sắp xếp", "Sort")}</span><select id="nutritionSort">
            <option value="recommended">${text("Sắp xếp: Phù hợp", "Sort: Relevance")}</option>
            <option value="price-asc">${text("Giá thấp đến cao", "Price: Low to high")}</option>
            <option value="price-desc">${text("Giá cao đến thấp", "Price: High to low")}</option>
            <option value="name">${text("Tên A-Z", "Name A-Z")}</option>
          </select></label>
        </div>

        <section class="nutrition-filters" id="nutritionFilters" aria-labelledby="nutritionFilterTitle">
          <div class="nutrition-section-heading">
            <div><span class="nutrition-kicker">${text("Thu hẹp kết quả", "Narrow results")}</span><h2 id="nutritionFilterTitle">${text("Lọc sản phẩm", "Filter products")}</h2><p>${text("Chỉ chọn những tiêu chí thật sự cần thiết.", "Choose only the criteria that matter.")}</p></div>
            <div class="nutrition-filter-heading-actions">
              <span class="nutrition-active-filter-count" id="nutritionActiveFilterCount" hidden></span>
              <button class="nutrition-filter-toggle" type="button" data-nutrition-action="toggle-filters" aria-expanded="false">${icon("sort")}<span>${text("Mở bộ lọc", "Open filters")}</span></button>
              <button class="nutrition-reset" type="button" data-nutrition-action="clear-filters">${text("Xóa bộ lọc", "Clear filters")}</button>
            </div>
          </div>
          <div id="nutritionFilterRows"></div>
        </section>

        <section class="nutrition-products" aria-labelledby="nutritionProductsTitle">
          <div class="nutrition-section-heading">
            <div><span class="nutrition-kicker" id="nutritionProductsKicker">${text("Thông tin có nguồn", "Source-backed information")}</span><h2 id="nutritionProductsTitle">${text("Sản phẩm đang tham khảo", "Products to explore")}</h2></div>
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

  function filterSelect(label, group, options) {
    return `<label class="nutrition-filter-control">
      <span>${label}</span>
      <select data-nutrition-filter="${group}">
        ${options.map(([value, optionLabel]) => `<option value="${value}"${state[group] === value ? " selected" : ""}>${optionLabel}</option>`).join("")}
      </select>
    </label>`;
  }

  function renderFilters() {
    const container = document.getElementById("nutritionFilterRows");
    if (!container) return;
    const ageOptions = [["all", text("Tất cả độ tuổi", "All ages")], ["under-6", text("Dưới 6 tháng", "Under 6 months")], ["6-11", text("6-11 tháng", "6-11 months")], ["12-23", text("12-23 tháng", "12-23 months")], ["2-5", text("2-5 tuổi", "Ages 2-5")], ["6-9", text("6-9 tuổi", "Ages 6-9")], ["10-15", text("10-15 tuổi", "Ages 10-15")]];
    const audienceOptions = state.area === "nutrition"
      ? [["all", text("Tất cả đối tượng", "All audiences")], ["infant", text("Trẻ sơ sinh", "Infants")], ["child", text("Trẻ em", "Children")], ["teen", text("Thanh thiếu niên", "Teenagers")], ["adult", text("Người lớn", "Adults")], ["pregnancy", text("Mẹ bầu", "Pregnancy")]]
      : [["all", text("Tất cả đối tượng", "All audiences")], ["infant", text("Trẻ sơ sinh", "Infants")], ["child", text("Trẻ em", "Children")], ["mother", text("Mẹ sau sinh", "Mothers")], ["family", text("Cả gia đình", "Family")]];
    const needOptions = state.area === "nutrition"
      ? [["all", text("Tất cả nhu cầu", "All needs")], ["daily", text("Dùng hằng ngày", "Daily use")], ["digestion", text("Hỗ trợ tiêu hóa", "Digestive support")], ["energy", text("Bổ sung năng lượng", "More energy")], ["less-sugar", text("Ít đường", "Lower sugar")], ["lactose-free", text("Không lactose", "Lactose-free")], ["calcium", text("Canxi & vitamin D", "Calcium & vitamin D")], ["meal", text("Bữa phụ dinh dưỡng", "Nutritional snack")]]
      : [["all", text("Tất cả nhu cầu", "All needs")], ["daily", text("Dùng hằng ngày", "Daily use")], ["sensitive", text("Da nhạy cảm", "Sensitive skin")], ["fragrance-free", text("Không hương liệu", "Fragrance-free")], ["rash", text("Bảo vệ vùng tã", "Diaper-area care")], ["dry-skin", text("Da khô", "Dry skin")]];
    const brands = [...new Set(products.filter((product) => product.section === state.area && product.category === state.category).map((product) => product.brand))].sort((a, b) => a.localeCompare(b, isVietnamese ? "vi" : "en"));
    const brandOptions = [["all", text("Tất cả thương hiệu", "All brands")], ...brands.map((brand) => [brand, brand])];
    const priceOptions = [["all", text("Tất cả mức giá", "All prices")], ["under-500", text("Dưới 500.000đ", "Under 500,000 VND")], ["500-800", "500.000-800.000đ"], ["over-800", text("Trên 800.000đ", "Over 800,000 VND")]];
    const sellerOptions = [["all", text("Tất cả nơi bán", "All sellers")], ["official", text("Trang hãng", "Manufacturer")], ["shopee", "Shopee"], ["lazada", "Lazada"]];
    container.innerHTML = `<div class="nutrition-filter-controls">
      ${filterSelect(text("Độ tuổi", "Age"), "age", ageOptions)}
      ${filterSelect(text("Đối tượng", "Audience"), "audience", audienceOptions)}
      ${filterSelect(text("Nhu cầu", "Need"), "need", needOptions)}
      ${filterSelect(text("Thương hiệu", "Brand"), "brand", brandOptions)}
      ${filterSelect(text("Mức giá", "Price"), "price", priceOptions)}
      ${filterSelect(text("Nơi bán", "Seller"), "seller", sellerOptions)}
    </div>`;
    const activeCount = [state.age, state.audience, state.need, state.brand, state.price, state.seller].filter((value) => value !== "all").length;
    const count = document.getElementById("nutritionActiveFilterCount");
    if (count) {
      count.hidden = activeCount === 0;
      count.textContent = text(`${activeCount} tiêu chí đang chọn`, `${activeCount} active filters`);
    }
  }

  function renderCategoryNavigation() {
    const area = activeArea();
    const category = activeCategory();
    const count = categoryProductCount(category.id);
    const areaTabs = document.getElementById("nutritionAreaTabs");
    const areaLabel = document.getElementById("nutritionAreaLabel");
    const tabs = document.getElementById("nutritionCategoryTabs");
    const context = document.getElementById("nutritionCategoryContext");
    const title = document.getElementById("nutritionProductsTitle");
    const safety = document.querySelector("#nutritionSafetyNote span");
    if (areaTabs) areaTabs.innerHTML = productAreas.map(areaButton).join("");
    if (areaLabel) areaLabel.textContent = area.label;
    if (tabs) {
      const visibleCategories = areaCategories();
      tabs.style.setProperty("--nutrition-category-columns", String(visibleCategories.length));
      tabs.innerHTML = visibleCategories.map(categoryTab).join("");
    }
    if (context) {
      context.innerHTML = `
        <div class="nutrition-category-summary">
          <span class="nutrition-category-icon is-large">${categoryIcon(category.id)}</span>
          <div><span class="nutrition-kicker">${text("Đang xem", "Viewing")}</span><h3>${category.label}</h3><p>${category.description}</p></div>
          <strong>${count ? text(`${count} sản phẩm có nguồn`, `${count} source-backed products`) : text("Chưa có dữ liệu đủ nguồn", "No source-ready data yet")}</strong>
        </div>
        <div class="nutrition-subcategory-list" data-filter-group="subcategory">
          ${category.subcategories.map(([value, label]) => filterButton("subcategory", value, label, state.subcategory === value)).join("")}
        </div>`;
    }
    if (title) title.textContent = category.label;
    if (safety) safety.textContent = state.area === "nutrition"
      ? text("Các nhu cầu như tiêu chảy, dị ứng, colic hoặc dinh dưỡng y học chỉ mang tính tham khảo; trẻ có bệnh lý hoặc tăng trưởng bất thường cần được đánh giá chuyên môn.", "Diarrhea, allergy, colic, and medical nutrition categories are for reference; children with medical or growth concerns need professional assessment.")
      : text("Kiểm tra độ tuổi, thành phần, cảnh báo kích ứng và hướng dẫn sử dụng trên nhãn trước khi dùng sản phẩm chăm sóc cho trẻ.", "Check age guidance, ingredients, irritation warnings, and label directions before using care products on children.");
  }

  function renderToolbarState() {
    const favoriteCount = document.getElementById("nutritionFavoriteCount");
    const favoritesButton = root.querySelector('[data-nutrition-action="favorites-only"]');
    if (favoriteCount) favoriteCount.textContent = String(state.favorites.size);
    if (favoritesButton) {
      favoritesButton.classList.toggle("is-active", state.favoritesOnly);
      favoritesButton.setAttribute("aria-pressed", String(state.favoritesOnly));
    }
  }

  function filteredProducts() {
    const normalizedQuery = state.query.trim().toLocaleLowerCase(isVietnamese ? "vi" : "en");
    const filtered = products.filter((product) => {
      const areaMatch = product.section === state.area;
      const categoryMatch = product.category === state.category;
      const subcategoryMatch = state.subcategory === "all" || product.subcategory === state.subcategory;
      const ageMatch = state.age === "all" || product.ageGroups.includes(state.age);
      const audienceMatch = state.audience === "all" || product.targets.includes(state.audience);
      const needMatch = state.need === "all" || product.needs.includes(state.need);
      const brandMatch = state.brand === "all" || product.brand === state.brand;
      const priceMatch = state.price === "all"
        || (state.price === "under-500" && product.price < 500000)
        || (state.price === "500-800" && product.price >= 500000 && product.price <= 800000)
        || (state.price === "over-800" && product.price > 800000);
      const sellerMatch = state.seller === "all" || product.sellers.some((seller) => state.seller === "official" ? seller.kind === "official" : seller.platform === state.seller);
      const queryMatch = !normalizedQuery || [product.name, product.brand, product.needLabel, product.age]
        .some((value) => String(value || "").toLocaleLowerCase(isVietnamese ? "vi" : "en").includes(normalizedQuery));
      const favoriteMatch = !state.favoritesOnly || state.favorites.has(product.id);
      return areaMatch && categoryMatch && subcategoryMatch && ageMatch && audienceMatch && needMatch && brandMatch && priceMatch && sellerMatch && queryMatch && favoriteMatch;
    });
    if (state.sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    else if (state.sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
    else if (state.sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, isVietnamese ? "vi" : "en"));
    return filtered;
  }

  function productCard(product) {
    const favorite = state.favorites.has(product.id);
    const selected = state.compare.includes(product.id);
    const displayMetrics = productDisplayMetrics(product);
    return `
      <article class="nutrition-product-card">
        <div class="nutrition-product-media" data-product-id="${product.id}">
          <span class="nutrition-age-badge">${product.age}</span>
          <button class="nutrition-icon-btn${favorite ? " is-active" : ""}" type="button" title="${text("Yêu thích", "Favorite")}" aria-label="${text("Yêu thích", "Favorite")} ${product.name}" aria-pressed="${favorite}" data-nutrition-action="favorite" data-product-id="${product.id}">${icon("heart")}</button>
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="nutrition-product-body">
          <div class="nutrition-product-meta"><span class="nutrition-product-brand">${product.brand}</span><span>${categories.find((category) => category.id === product.category)?.shortLabel || ""}</span></div>
          <h3>${product.name}</h3>
          <p class="nutrition-product-purpose">${product.needLabel}</p>
          <dl class="nutrition-metric-grid">
            ${displayMetrics.map((item) => `<div><dt>${item.label}</dt><dd>${item.value}</dd></div>`).join("")}
          </dl>
          <div class="nutrition-product-price"><span>${text("Giá tham khảo", "Reference price")}</span><strong>${formatPrice(product.price)}</strong><small>${product.priceStatus}</small></div>
          <div class="nutrition-card-sellers" aria-label="${text("Nơi bán", "Sellers")}">
            ${productSellerLink(product, "official", text("Trang hãng", "Brand site"))}
            ${productSellerLink(product, "shopee", "Shopee")}
            ${productSellerLink(product, "lazada", "Lazada")}
          </div>
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
    const category = activeCategory();
    const categoryTotal = categoryProductCount(category.id);
    const grid = document.getElementById("nutritionProductGrid");
    const count = document.getElementById("nutritionResultCount");
    if (!grid || !count) return;
    count.textContent = text(`${filtered.length}/${categoryTotal} sản phẩm`, `${filtered.length}/${categoryTotal} products`);
    if (filtered.length) {
      grid.innerHTML = filtered.map(productCard).join("");
      return;
    }
    if (!categoryTotal) {
      grid.innerHTML = `<div class="nutrition-empty nutrition-empty-category">
        <span class="nutrition-category-icon is-large">${categoryIcon(category.id)}</span>
        <span class="nutrition-kicker">${text("Dữ liệu đang được chuẩn hóa", "Data is being normalized")}</span>
        <h3>${text(`Chưa có sản phẩm ${category.label.toLocaleLowerCase("vi")} đủ nguồn`, `No source-ready ${category.label.toLocaleLowerCase("en")} products yet`)}</h3>
        <p>${text("GrowthKid chỉ đưa sản phẩm lên danh sách khi có thông tin nhãn, nguồn hãng và độ tuổi sử dụng rõ ràng.", "GrowthKid lists a product only when label information, manufacturer sources, and age guidance are clear.")}</p>
        <div class="nutrition-empty-tags">${category.subcategories.filter(([value]) => value !== "all").map(([, label]) => `<span>${label}</span>`).join("")}</div>
        <button class="nutrition-btn nutrition-btn-secondary" type="button" data-nutrition-action="category" data-category="milk">${text("Xem sản phẩm đang có", "View available products")} ${icon("arrow")}</button>
      </div>`;
      return;
    }
    const emptyTitle = state.favoritesOnly ? text("Chưa có sản phẩm đã lưu trong nhóm này", "No saved products in this group") : text("Chưa có sản phẩm phù hợp", "No matching products yet");
    grid.innerHTML = `<div class="nutrition-empty">${icon("info")}<h3>${emptyTitle}</h3><p>${text("Hãy đổi từ khóa hoặc xóa bộ lọc để xem lại danh sách.", "Change the search or clear filters to view the list again.")}</p><button class="nutrition-btn nutrition-btn-secondary" type="button" data-nutrition-action="clear-filters">${text("Xóa bộ lọc", "Clear filters")}</button></div>`;
  }

  function comparisonValue(product, key, unit) {
    if (key === "age") return product.age;
    if (key === "price") return formatPrice(product.price);
    if (key === "lactose") return product.lactose;
    if (key.startsWith("display:")) return productDisplayMetrics(product)[Number(key.split(":")[1])]?.value || text("Chưa có dữ liệu", "No data");
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
    const sameCategory = selected.every((product) => product.category === selected[0].category);
    const rows = sameCategory && selected[0].category !== "milk"
      ? [
          [text("Độ tuổi", "Age range"), "age", ""],
          ...productDisplayMetrics(selected[0]).map((item, index) => [item.label, `display:${index}`, ""]),
          [text("Dị ứng / lưu ý", "Allergens / notes"), "lactose", ""],
          [text("Giá tham khảo", "Reference price"), "price", ""]
        ]
      : [
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
      ${selected[0].category === "milk" ? `<div class="nutrition-recommendations">
        <h3>${text("Gợi ý theo ưu tiên", "Suggestions by priority")}</h3>
        <div>
          ${recommendationCard(text("Ưu tiên năng lượng", "Energy priority"), numericEnergy, numericEnergy ? metric(numericEnergy.energy, "kcal/100 ml") : text("Cần thêm dữ liệu chuẩn hóa", "More normalized data needed"), "amber")}
          ${recommendationCard(text("Ưu tiên ít đường", "Lower sugar priority"), numericSugar, numericSugar ? metric(numericSugar.sugar, "g/100 ml") : text("Cần thêm dữ liệu chuẩn hóa", "More normalized data needed"), "rose")}
          ${recommendationCard(text("Ưu tiên canxi", "Calcium priority"), calcium, calcium ? metric(calcium.calcium, "mg/100 ml") : text("Cần thêm dữ liệu chuẩn hóa", "More normalized data needed"), "green")}
          ${recommendationCard(text("Ưu tiên giá tham khảo", "Reference price priority"), lowestPrice, formatPrice(lowestPrice.price), "blue")}
        </div>
        <p>${text("Các gợi ý chỉ phản ánh tiêu chí đang chọn, không kết luận sản phẩm tốt nhất và không thay thế đánh giá dinh dưỡng cá nhân.", "Suggestions reflect only the selected criterion; they do not identify a best product or replace individual nutrition assessment.")}</p>
      </div>` : `<div class="nutrition-compare-note">${icon("info")}<p>${text("So sánh vi chất phải dựa trên cùng liều dùng và cùng đơn vị công bố. GrowthKid chỉ đối chiếu thông tin trên nhãn, không xếp hạng sản phẩm hoặc đề xuất liều dùng cá nhân.", "Micronutrient comparisons require matching serving sizes and units. GrowthKid compares label information only and does not rank products or recommend individual dosing.")}</p></div>`}
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
    const displayMetrics = productDisplayMetrics(product);
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
            ${displayMetrics.map((item) => detailMetric(item.label, item.value)).join("")}
          </div>
        </div>
      </div>
      <section class="nutrition-analysis">
        <div class="nutrition-analysis-icon">${icon("spark")}</div>
        <div><span>${text("Phân tích nhãn", "Label analysis")}</span><h3>${text("GrowthKid tóm tắt", "GrowthKid summary")}</h3><p>${product.analysis}</p><small>${text("Cập nhật", "Updated")}: ${product.updated}</small></div>
      </section>
      <section class="nutrition-sources">
        <div><h3>${text("Nguồn thông tin", "Information source")}</h3><a href="${product.source}" target="_blank" rel="noreferrer">${product.sourceLabel} ${icon("external")}</a></div>
        <p>${product.normalizationNote || text("Thông số được chuẩn hóa theo 100 ml khi nguồn có đủ dữ liệu. Dấu 'chưa chuẩn hóa' nghĩa là GrowthKid chưa xác minh được phép quy đổi từ nhãn hiện hành.", "Values are normalized per 100 ml when sufficient source data is available. 'Not normalized' means GrowthKid has not yet verified a conversion from the current label.")}</p>
      </section>
      <section class="nutrition-sellers">
        <div><h3>${text("Nơi bán và trang hãng", "Sellers and manufacturer")}</h3><p>${text("Giá có thể thay đổi theo thời điểm.", "Prices may change over time.")}</p></div>
        <div>${product.sellers.map(sellerLink).join("")}</div>
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
    if (group !== "subcategory") renderFilters();
    renderProducts();
  }

  function clearFilters() {
    state.subcategory = "all";
    state.age = "all";
    state.audience = "all";
    state.need = "all";
    state.brand = "all";
    state.price = "all";
    state.seller = "all";
    state.query = "";
    state.favoritesOnly = false;
    const search = document.getElementById("nutritionSearch");
    if (search) search.value = "";
    renderCategoryNavigation();
    renderFilters();
    renderToolbarState();
    renderProducts();
  }

  function setCategory(categoryId) {
    const nextCategory = categories.find((category) => category.id === categoryId);
    if (!nextCategory) return;
    state.area = nextCategory.area;
    state.category = categoryId;
    state.subcategory = "all";
    state.age = "all";
    state.audience = "all";
    state.need = "all";
    state.brand = "all";
    state.price = "all";
    state.seller = "all";
    state.query = "";
    state.favoritesOnly = false;
    const search = document.getElementById("nutritionSearch");
    if (search) search.value = "";
    renderCategoryNavigation();
    renderFilters();
    renderToolbarState();
    renderProducts();
  }

  function setArea(areaId) {
    const area = productAreas.find((item) => item.id === areaId);
    if (!area) return;
    state.area = area.id;
    state.category = area.defaultCategory;
    clearFilters();
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    writeStorage("growthkid:nutrition:favorites", [...state.favorites]);
    renderToolbarState();
    renderProducts();
  }

  function toggleCompare(id) {
    const product = products.find((item) => item.id === id);
    const comparedProducts = state.compare.map((item) => products.find((productItem) => productItem.id === item)).filter(Boolean);
    if (state.compare.includes(id)) state.compare = state.compare.filter((item) => item !== id);
    else if (product && comparedProducts.length && comparedProducts[0].category !== product.category) {
      state.compare = [id];
      showToast(text("Đã bắt đầu nhóm so sánh mới cùng loại sản phẩm.", "Started a new comparison with the same product type."));
    }
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
  renderCategoryNavigation();
  renderFilters();
  renderToolbarState();
  renderProducts();
  renderCompare();

  root.addEventListener("click", (event) => {
    const actionElement = event.target.closest("[data-nutrition-action]");
    if (!actionElement) return;
    const action = actionElement.dataset.nutritionAction;
    const id = actionElement.dataset.productId;
    if (action === "area") setArea(actionElement.dataset.area);
    else if (action === "category") setCategory(actionElement.dataset.category);
    else if (action === "filter") setFilter(actionElement.dataset.group, actionElement.dataset.value);
    else if (action === "toggle-filters") {
      const filters = document.getElementById("nutritionFilters");
      const expanded = !filters?.classList.contains("is-open");
      filters?.classList.toggle("is-open", expanded);
      actionElement.setAttribute("aria-expanded", String(expanded));
      const label = actionElement.querySelector("span");
      if (label) label.textContent = expanded ? text("Đóng bộ lọc", "Close filters") : text("Mở bộ lọc", "Open filters");
    }
    else if (action === "clear-filters") clearFilters();
    else if (action === "favorites-only") {
      state.favoritesOnly = !state.favoritesOnly;
      renderToolbarState();
      renderProducts();
    }
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

  document.getElementById("nutritionSearch")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProducts();
  });

  root.addEventListener("change", (event) => {
    const group = event.target.dataset.nutritionFilter;
    if (group) setFilter(group, event.target.value);
  });

  document.getElementById("nutritionSort")?.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });

  document.getElementById("nutritionDetailBackdrop")?.addEventListener("click", (event) => {
    if (event.target.id === "nutritionDetailBackdrop") closeDetail();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDetail();
  });
})();
