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
      usage: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
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
      weaning: "food", snack: "food", rash: "care", skin: "care", "skin-care": "care", sun: "care",
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
      sugar: text("Không đường", "Unsweetened"),
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

  const workbookSellers = (officialName, officialUrl, officialPlatform, shopeeUrl) => [
    { name: officialName, url: officialUrl, kind: "official", platform: officialPlatform },
    ...(shopeeUrl ? [{ name: "Shopee", url: shopeeUrl, kind: "affiliate", platform: "shopee" }] : [])
  ];

  const workbookProduct = (product) => ({
    energy: null,
    protein: null,
    calcium: null,
    vitaminD: null,
    sugar: null,
    priceStatus: text("Giá tham khảo từ dữ liệu nhập ngày 14/07/2026", "Reference price from data entered on 14/07/2026"),
    normalizationNote: text("Thông số hiển thị theo đúng đơn vị và khẩu phần trên nhãn gốc; không quy đổi sang 100 ml.", "Values use the units and serving stated on the original label and are not normalized to 100 ml."),
    updated: "14/07/2026",
    ...product
  });

  products.push(
    workbookProduct({
      id: "orzax-imunol-syrup-150ml", section: "nutrition", category: "vitamin", subcategory: "immune",
      name: "Orzax Imunol Syrup 150 ml", brand: "Orzax", image: "/assets/nutrition/orzax-imunol-syrup-150ml.jpg",
      age: text("Trẻ từ 1 tuổi trở lên", "Children from 1 year"), ageGroups: ["12-23", "2-5", "6-9", "10-15"], targets: ["child", "teen"],
      needs: ["immune"], needLabel: text("Vitamin C, kẽm và beta-glucan hỗ trợ miễn dịch", "Vitamin C, zinc, and beta-glucan immune support"), price: 325000,
      displayMetrics: [
        { label: "Echinacea", value: "300 mg / 5 ml" }, { label: "Beta-glucan", value: "50 mg / 5 ml" },
        { label: "Vitamin C", value: "40 mg / 5 ml" }, { label: text("Kẽm", "Zinc"), value: "5 mg / 5 ml" }
      ],
      lactose: text("Có mật ong, keo ong, Echinacea và đường; lưu ý dị ứng sản phẩm từ ong hoặc họ Cúc.", "Contains honey, propolis, Echinacea, and sugar; consider bee-product or Asteraceae allergy."),
      suitable: [text("Trẻ từ 1 tuổi cần bổ sung vitamin C và kẽm", "Children from age 1 needing vitamin C and zinc"), text("Khẩu phần cần hỗ trợ vi chất cho chức năng miễn dịch", "Diets needing micronutrient support for immune function")],
      cautions: [text("Không dùng cho trẻ dưới 1 tuổi hoặc người dị ứng sản phẩm từ ong, họ Cúc", "Do not use under age 1 or with bee-product or Asteraceae allergy"), text("Cần tính tổng vitamin và kẽm từ các sản phẩm đang dùng", "Count vitamins and zinc from all products in use")],
      analysis: text("Trong 5 ml: chiết xuất Echinacea 300 mg; beta-glucan 1,3/1,6 50 mg; vitamin C 40 mg; kẽm 5 mg và keo ong 3,5 mg. Siro có mật ong và đường.", "Per 5 ml: 300 mg Echinacea extract, 50 mg beta-glucan 1,3/1,6, 40 mg vitamin C, 5 mg zinc, and 3.5 mg propolis. The syrup contains honey and sugar."),
      source: "https://www.orzax.com.tr/en/imunol-syrup/", sourceLabel: "Orzax İlaç – Imunol Syrup",
      sellers: workbookSellers(text("Trang sản phẩm Orzax", "Orzax product page"), "https://www.orzax.com.tr/en/imunol-syrup/", "orzax", "https://s.shopee.vn/8AUSuezxVC")
    }),
    workbookProduct({
      id: "vitabiotics-wellbaby-multivitamin-liquid-150ml", section: "nutrition", category: "vitamin", subcategory: "multi",
      name: "Vitabiotics Wellbaby Multi-vitamin Liquid 150 ml", brand: "Vitabiotics – Wellbaby", image: "/assets/nutrition/wellbaby-multivitamin-150ml.png",
      age: text("Trẻ 6 tháng–4 tuổi", "Children 6 months–4 years"), ageGroups: ["6-11", "12-23", "2-5"], targets: ["infant", "child"],
      needs: ["daily", "calcium"], needLabel: text("14 vitamin và khoáng chất cho trẻ nhỏ", "14 vitamins and minerals for young children"), price: 412000,
      displayMetrics: [
        { label: "Vitamin D3", value: "400 IU / 5 ml" }, { label: "Vitamin C", value: "30 mg / 5 ml" },
        { label: text("Sắt", "Iron"), value: "4 mg / 5 ml" }, { label: text("Kẽm", "Zinc"), value: "2,5 mg / 5 ml" }
      ],
      lactose: text("Có đường mía thô, sắt và chiết xuất mạch nha từ lúa mạch; kiểm tra nhãn nếu cần tránh gluten.", "Contains raw cane sugar, iron, and barley malt extract; check the label if avoiding gluten."),
      suitable: [text("Trẻ 6 tháng–4 tuổi cần bổ sung đa vi chất", "Children aged 6 months–4 years needing multiple micronutrients"), text("Dùng theo liều công bố 5 ml mỗi ngày", "Use according to the stated 5 ml daily serving")],
      cautions: [text("Không dùng dưới 6 tháng hoặc phối hợp thêm đa vitamin khi chưa tính tổng liều", "Do not use under 6 months or combine with another multivitamin without checking total intake"), text("Để xa tầm tay trẻ em vì sản phẩm chứa sắt", "Keep out of children's reach because it contains iron")],
      analysis: text("Trong 5 ml có 14 vitamin và khoáng chất, gồm vitamin D3 400 IU, vitamin C 30 mg, sắt 4 mg, kẽm 2,5 mg cùng 500 mg chiết xuất mạch nha.", "Each 5 ml provides 14 vitamins and minerals, including 400 IU vitamin D3, 30 mg vitamin C, 4 mg iron, 2.5 mg zinc, and 500 mg malt extract."),
      source: "https://www.vitabiotics.com/products/wellbaby-multi-vitamin-liquid", sourceLabel: "Vitabiotics – Wellbaby Multi-vitamin Liquid",
      sellers: workbookSellers(text("Trang sản phẩm Vitabiotics", "Vitabiotics product page"), "https://www.vitabiotics.com/products/wellbaby-multi-vitamin-liquid", "vitabiotics", "https://s.shopee.vn/5AqrLAHMvc")
    }),
    workbookProduct({
      id: "vitabiotics-wellkid-multivitamin-liquid-150ml", section: "nutrition", category: "vitamin", subcategory: "multi",
      name: "Vitabiotics Wellkid Multi-vitamin Liquid 150 ml", brand: "Vitabiotics – Wellkid", image: "/assets/nutrition/wellkid-multivitamin-150ml-clean.png",
      age: text("Trẻ 4–12 tuổi", "Children 4–12 years"), ageGroups: ["2-5", "6-9", "10-15"], targets: ["child", "teen"],
      needs: ["daily", "calcium"], needLabel: text("15 vitamin và khoáng chất cho trẻ 4–12 tuổi", "15 vitamins and minerals for ages 4–12"), price: 403000,
      displayMetrics: [
        { label: "Vitamin D3", value: "400 IU / 5 ml" }, { label: "Vitamin C", value: "12 mg / 5 ml" },
        { label: text("Sắt", "Iron"), value: "5 mg / 5 ml" }, { label: text("Kẽm", "Zinc"), value: "4 mg / 5 ml" }
      ],
      lactose: text("Có sắt, đường và chiết xuất mạch nha từ lúa mạch; lưu ý gluten và sulfite trên nhãn.", "Contains iron, sugar, and barley malt extract; note label information on gluten and sulphites."),
      suitable: [text("Trẻ 4–12 tuổi cần bổ sung đa vi chất hằng ngày", "Children aged 4–12 needing daily micronutrient supplementation"), text("Khẩu phần cần bổ sung vitamin D, sắt, kẽm và i-ốt", "Diets needing vitamin D, iron, zinc, and iodine")],
      cautions: [text("Không dùng dưới 4 tuổi; không phối hợp thêm đa vitamin khi chưa tính tổng liều", "Do not use under age 4 or combine with another multivitamin without checking total intake"), text("Bệnh tuyến giáp, động kinh hoặc rối loạn ứ sắt cần hỏi bác sĩ", "Thyroid disease, epilepsy, or iron overload requires medical advice")],
      analysis: text("Trong 5 ml có 15 dưỡng chất, gồm vitamin D3 400 IU, vitamin C 12 mg, sắt 5 mg, kẽm 4 mg, i-ốt 40 mcg và 500 mg chiết xuất mạch nha.", "Each 5 ml provides 15 nutrients, including 400 IU vitamin D3, 12 mg vitamin C, 5 mg iron, 4 mg zinc, 40 mcg iodine, and 500 mg malt extract."),
      source: "https://www.vitabiotics.com/products/wellkid-multi-vitamin-liquid", sourceLabel: "Vitabiotics – Wellkid Multi-vitamin Liquid",
      sellers: workbookSellers(text("Trang sản phẩm Vitabiotics", "Vitabiotics product page"), "https://www.vitabiotics.com/products/wellkid-multi-vitamin-liquid", "vitabiotics", "https://s.shopee.vn/AAFXIMw8vA")
    }),
    workbookProduct({
      id: "femalto-sat-iii-hydroxyd-polymaltose-50mg-ml-30ml", section: "nutrition", category: "vitamin", subcategory: "iron",
      name: "Femalto dung dịch uống 50 mg/ml – chai 30 ml", brand: "Femalto / Novocare", image: "/assets/nutrition/femalto-30ml.jpg",
      age: text("Từ sơ sinh đến người lớn; dùng theo mức độ thiếu sắt", "From birth through adulthood; dose depends on iron deficiency"), ageGroups: ["under-6", "6-11", "12-23", "2-5", "6-9", "10-15"], targets: ["infant", "child", "teen", "adult", "mother"],
      needs: ["iron"], needLabel: text("Thuốc điều trị thiếu sắt có hoặc không kèm thiếu máu", "Medicine for iron deficiency with or without anemia"), price: 179000,
      displayMetrics: [
        { label: text("Sắt nguyên tố", "Elemental iron"), value: "50 mg / 1 ml" }, { label: text("Quy đổi", "Conversion"), value: "1 ml = 14 giọt" },
        { label: text("Mỗi giọt", "Per drop"), value: "~3,57 mg sắt" }, { label: text("Quy cách", "Package"), value: "30 ml" }
      ],
      lactose: text("Nguồn công bố chưa nêu đầy đủ tá dược; cần đối chiếu tờ hướng dẫn trong hộp nếu có tiền sử dị ứng.", "The available source does not list all excipients; check the package leaflet when there is an allergy history."),
      suitable: [text("Thiếu sắt đã được đánh giá, có hoặc không kèm thiếu máu", "Assessed iron deficiency, with or without anemia"), text("Trẻ em, người lớn, phụ nữ mang thai hoặc cho con bú có chỉ định bổ sung sắt điều trị", "Children, adults, and pregnant or breastfeeding women with a treatment indication")],
      cautions: [text("Đây là thuốc; liều phụ thuộc tuổi và mức độ thiếu sắt, không tự dùng chỉ để dự phòng", "This is a medicine; dosing depends on age and iron status and should not be self-used solely for prevention"), text("Không dùng khi quá tải sắt, rối loạn sử dụng sắt hoặc thiếu máu không do thiếu sắt; để xa tầm tay trẻ em", "Do not use for iron overload, iron-utilization disorders, or anemia not caused by iron deficiency; keep out of children's reach")],
      analysis: text("Mỗi 1 ml chứa 50 mg sắt nguyên tố dưới dạng phức hợp sắt (III) hydroxyd polymaltose; 1 ml tương ứng 14 giọt. Femalto là thuốc điều trị thiếu sắt, vì vậy liều và thời gian dùng cần dựa trên chẩn đoán và theo dõi đáp ứng.", "Each 1 ml contains 50 mg elemental iron as iron(III) hydroxide polymaltose complex; 1 ml equals 14 drops. Femalto is a medicine for iron deficiency, so dose and duration should follow diagnosis and response monitoring."),
      source: "", sourceLabel: text("Công ty Cổ phần Dược phẩm CPC1 Hà Nội", "Ha Noi CPC1 Pharmaceutical Joint Stock Company"),
      sellers: [{ name: "Shopee", url: "https://s.shopee.vn/1qaPNHrd2h", kind: "affiliate", platform: "shopee" }]
    }),
    workbookProduct({
      id: "dimao-pro-d3k2-oral-spray-25ml", section: "nutrition", category: "vitamin", subcategory: "d3-k2",
      name: "Dimao Pro Oral Spray D3 + K2 25 ml", brand: "Dimao Pro", image: "/assets/nutrition/dimao-pro-d3k2-25ml.webp",
      age: text("Từ sơ sinh đến người lớn", "From birth through adulthood"), ageGroups: ["under-6", "6-11", "12-23", "2-5", "6-9", "10-15"], targets: ["infant", "child", "teen", "adult"],
      needs: ["calcium"], needLabel: text("D3 và K2 dạng xịt hỗ trợ sử dụng canxi", "D3 and K2 oral spray supporting calcium utilization"), price: 352000,
      displayMetrics: [
        { label: "Vitamin D3", value: "400 IU / nhát xịt" }, { label: "Vitamin K2", value: "18,75 mcg / nhát" },
        { label: text("Thể tích nhát xịt", "Spray volume"), value: "~0,2 ml" }, { label: text("Số liều", "Approx. sprays"), value: "~125 nhát" }
      ],
      lactose: text("Nguồn phân phối công bố không đường, cồn hoặc gluten; công thức có xylitol và hương dâu tự nhiên.", "Distributor information states sugar-, alcohol-, and gluten-free; the formula contains xylitol and natural strawberry flavor."),
      suitable: [text("Trẻ em và người lớn cần bổ sung vitamin D3, K2 sau khi đánh giá khẩu phần", "Children and adults needing D3 and K2 after dietary assessment"), text("Người cần hỗ trợ hấp thu và sử dụng canxi", "People needing support for calcium absorption and utilization")],
      cautions: [text("Tính tổng vitamin D và K từ mọi sản phẩm đang dùng để tránh trùng liều", "Add vitamin D and K from all products to avoid duplicate dosing"), text("Bệnh thận, tăng canxi máu, sỏi thận hoặc dùng thuốc kháng vitamin K cần hỏi bác sĩ", "Kidney disease, hypercalcemia, kidney stones, or vitamin K antagonists require medical advice")],
      analysis: text("Mỗi nhát xịt khoảng 0,2 ml cung cấp vitamin D3 400 IU và vitamin K2 18,75 mcg. Một lọ 25 ml tương đương khoảng 125 nhát xịt.", "Each approximately 0.2 ml spray provides 400 IU vitamin D3 and 18.75 mcg vitamin K2. A 25 ml bottle provides about 125 sprays."),
      source: "", sourceLabel: text("Valens International / Valens Int. d.o.o. – Slovenia", "Valens International / Valens Int. d.o.o. – Slovenia"),
      sellers: [{ name: "Shopee", url: "https://s.shopee.vn/3qLUT4EGhd", kind: "affiliate", platform: "shopee" }]
    }),
    workbookProduct({
      id: "natures-way-kids-smart-drops-vitamin-d3-k2-11ml", section: "nutrition", category: "vitamin", subcategory: "d3-k2",
      name: "Nature's Way Kids Smart Drops Vitamin D3 + K2 11 ml", brand: "Nature's Way – Kids Smart", image: "/assets/nutrition/natures-way-d3k2-11ml.webp",
      age: text("Từ sơ sinh đến người lớn", "From birth through adulthood"), ageGroups: ["under-6", "6-11", "12-23", "2-5", "6-9", "10-15"], targets: ["infant", "child", "teen", "adult"],
      needs: ["calcium", "immune"], needLabel: text("Vitamin D3 và K2-MK7 dạng nhỏ giọt", "Vitamin D3 and K2-MK7 drops"), price: 400000,
      displayMetrics: [
        { label: "Vitamin D3", value: "400 IU / 6 giọt" }, { label: "Vitamin K2 MK-7", value: "~19 mcg / 6 giọt" },
        { label: text("Khẩu phần", "Serving"), value: "6 giọt / 214 µl" }, { label: text("Quy cách", "Package"), value: "11 ml" }
      ],
      lactose: text("Không màu, hương, chất tạo ngọt hoặc chất bảo quản theo nhãn; có thành phần từ đậu nành.", "Label states no colors, flavors, sweeteners, or preservatives; contains soy-derived ingredients."),
      suitable: [text("Trẻ từ sơ sinh và người lớn cần bổ sung D3, K2 theo khẩu phần", "Infants through adults needing D3 and K2 supplementation"), text("Người cần hỗ trợ sức khỏe xương, răng và chức năng miễn dịch", "People needing support for bone, dental, and immune health")],
      cautions: [text("Không dùng khi mẫn cảm với thành phần; cần tính tổng vitamin D và K đang sử dụng", "Do not use with ingredient hypersensitivity; account for all vitamin D and K sources"), text("Người đang dùng thuốc, đặc biệt thuốc kháng vitamin K, cần hỏi bác sĩ", "People taking medicines, especially vitamin K antagonists, need medical advice")],
      analysis: text("Mỗi 6 giọt tương đương khoảng 214 µl cung cấp vitamin D3 400 IU và vitamin K2-MK7 khoảng 19 mcg. Hàm lượng công bố trong 1 ml lần lượt là 46,67 mcg và 88,5 mcg.", "Six drops, approximately 214 µl, provide 400 IU vitamin D3 and about 19 mcg MK-7 vitamin K2. Label concentrations are 46.67 mcg and 88.5 mcg per ml, respectively."),
      source: "https://natureswayvietnam.vn/natures-way-kids-smart-drops-vitamin-d3-k2-pd001882", sourceLabel: text("Nature's Way Việt Nam / PharmaCare Laboratories", "Nature's Way Vietnam / PharmaCare Laboratories"),
      sellers: workbookSellers(text("Trang sản phẩm Nature's Way", "Nature's Way product page"), "https://natureswayvietnam.vn/natures-way-kids-smart-drops-vitamin-d3-k2-pd001882", "natures-way", "https://s.shopee.vn/8V7K1msrpd")
    }),
    workbookProduct({
      id: "biolizin-zinc-bisglycinate-lysine-b6-50ml", section: "nutrition", category: "vitamin", subcategory: "zinc",
      name: "Biolizin Syrup 50 ml", brand: "Biolizin", image: "/assets/nutrition/biolizin-syrup-50ml.jpg",
      age: text("Từ 3 tháng tuổi trở lên", "From 3 months"), ageGroups: ["under-6", "6-11", "12-23", "2-5", "6-9", "10-15"], targets: ["infant", "child", "teen", "adult"],
      needs: ["immune", "picky"], needLabel: text("Kẽm bisglycinate, lysine và vitamin B6", "Zinc bisglycinate, lysine, and vitamin B6"), price: 315000,
      displayMetrics: [
        { label: text("Kẽm nguyên tố", "Elemental zinc"), value: "10 mg / 5 ml" }, { label: "Lysine", value: "200 mg / 5 ml" },
        { label: "Vitamin B6", value: "2 mg / 5 ml" }, { label: text("Quy cách", "Package"), value: "50 ml" }
      ],
      lactose: text("Nhãn hàng công bố không lactose, không gluten và không chứa cồn.", "The brand states lactose-free, gluten-free, and alcohol-free."),
      suitable: [text("Trẻ từ 3 tháng và người lớn có nhu cầu bổ sung kẽm", "Children from 3 months and adults needing zinc supplementation"), text("Khẩu phần cần bổ sung lysine và vitamin B6", "Diets needing lysine and vitamin B6 supplementation")],
      cautions: [text("Không dùng dưới 3 tháng hoặc vượt liều khuyến cáo", "Do not use under 3 months or exceed the recommended dose"), text("Nên dùng cách chế phẩm sắt hoặc canxi khoảng 2 giờ; bệnh gan, thận hoặc dùng kháng sinh cần hỏi bác sĩ", "Separate from iron or calcium by about two hours; liver or kidney disease or antibiotics require medical advice")],
      analysis: text("Mỗi 5 ml cung cấp 10 mg kẽm nguyên tố từ kẽm bisglycinate, 200 mg lysine và 2 mg vitamin B6. Đây là thực phẩm bổ sung, không thay thế điều trị nguyên nhân biếng ăn hoặc tiêu chảy.", "Each 5 ml provides 10 mg elemental zinc from zinc bisglycinate, 200 mg lysine, and 2 mg vitamin B6. This supplement does not replace evaluation and treatment of poor appetite or diarrhea."),
      source: "https://biolizin.vn/san-pham/biolizin/", sourceLabel: text("HC Clover Productos y Servicios / Biolizin Việt Nam", "HC Clover Productos y Servicios / Biolizin Vietnam"),
      sellers: workbookSellers(text("Trang sản phẩm Biolizin", "Biolizin product page"), "https://biolizin.vn/san-pham/biolizin/", "biolizin", "https://s.shopee.vn/9zw7oUxmqf")
    }),
    workbookProduct({
      id: "ferrolip-baby-iron-bisglycinate-drops-30ml", section: "nutrition", category: "vitamin", subcategory: "iron",
      name: "Ferrolip Baby Iron Bisglycinate Drops 30 ml", brand: "Ferrolip Baby – U.G.A.", image: "/assets/nutrition/ferrolip-baby-30ml-clean.png",
      age: text("Từ sơ sinh đến 10 tuổi; trẻ nhỏ dùng theo hướng dẫn chuyên môn", "From birth to age 10; young children need professional guidance"), ageGroups: ["under-6", "6-11", "12-23", "2-5", "6-9", "10-15"], targets: ["infant", "child"],
      needs: ["iron"], needLabel: text("Sắt bisglycinate dạng nhỏ giọt", "Iron bisglycinate drops"), price: 315000,
      displayMetrics: [
        { label: text("Sắt", "Iron"), value: "5 mg / 1 ml" }, { label: text("Liều 1–3 tuổi", "Ages 1–3"), value: "7,5 mg / 1,5 ml" },
        { label: text("Liều 4–10 tuổi", "Ages 4–10"), value: "10–12,5 mg" }, { label: text("Quy cách", "Package"), value: "30 ml" }
      ],
      lactose: text("Hãng công bố không chứa gluten và lactose; dung dịch nhỏ giọt vị đào.", "Manufacturer states gluten- and lactose-free; peach-flavored drops."),
      suitable: [text("Trẻ có nhu cầu bổ sung sắt đã được đánh giá", "Children with an assessed need for iron supplementation"), text("Khẩu phần cần hỗ trợ tạo hồng cầu và hemoglobin", "Diets needing support for red blood cell and hemoglobin formation")],
      cautions: [text("Không tự điều trị thiếu máu nếu chưa xác định nguyên nhân; trẻ dưới 2 tuổi dùng theo chỉ dẫn bác sĩ", "Do not self-treat anemia without determining the cause; children under 2 need medical direction"), text("Không dùng khi quá tải sắt, thalassemia hoặc thiếu máu không do thiếu sắt nếu chưa có chỉ định", "Do not use with iron overload, thalassemia, or non-iron-deficiency anemia without a prescription")],
      analysis: text("Mỗi 1 ml cung cấp 5 mg sắt nguyên tố dạng ferrous bisglycinate chelate. Liều công bố của hãng thay đổi theo tuổi từ 1 ml đến 2,5 ml mỗi ngày.", "Each 1 ml provides 5 mg elemental iron as ferrous bisglycinate chelate. Manufacturer dosage varies by age from 1 ml to 2.5 ml daily."),
      source: "https://uganutraceuticals.com/en/products/ferrolip-baby", sourceLabel: "U.G.A. Nutraceuticals – Ferrolip Baby",
      sellers: workbookSellers(text("Trang sản phẩm Ferrolip", "Ferrolip product page"), "https://uganutraceuticals.com/en/products/ferrolip-baby", "ferrolip", "https://s.shopee.vn/6fffqO9nW8")
    }),
    workbookProduct({
      id: "special-kid-sommeil-thao-duoc-125ml", section: "nutrition", category: "vitamin", subcategory: "sleep",
      name: "Special Kid Sommeil siro thảo dược 125 ml", brand: "Special Kid – Eric Favre", image: "/assets/nutrition/special-kid-sommeil-125ml.jpg",
      age: text("Trẻ từ 2 tuổi", "Children from 2 years"), ageGroups: ["2-5", "6-9", "10-15"], targets: ["child", "teen"],
      needs: ["sleep"], needLabel: text("Siro thảo dược hỗ trợ thư giãn và giấc ngủ", "Herbal syrup supporting relaxation and sleep"), price: 279000,
      displayMetrics: [
        { label: text("Hoa bia", "Hops"), value: "1.000 mg / 10 ml" }, { label: text("Oải hương", "Lavender"), value: "1.000 mg / 10 ml" },
        { label: text("Tía tô đất", "Lemon balm"), value: "1.000 mg / 10 ml" }, { label: text("Quy cách", "Package"), value: "125 ml" }
      ],
      lactose: text("Có mật ong, siro glucose-fructose, fructose và sucralose; lưu ý dị ứng thảo dược.", "Contains honey, glucose-fructose syrup, fructose, and sucralose; consider herbal allergy."),
      suitable: [text("Trẻ từ 2 tuổi khó đi vào giấc ngủ sau khi đã điều chỉnh thói quen ngủ", "Children from age 2 with sleep-onset difficulty after sleep-habit adjustment"), text("Sản phẩm hỗ trợ, không phải thuốc ngủ", "A supportive product, not a sleeping medicine")],
      cautions: [text("Không dùng dưới 24 tháng nếu không có chỉ dẫn bác sĩ; tuyệt đối không dùng mật ong dưới 12 tháng", "Do not use under 24 months without medical direction; never give honey under 12 months"), text("Khó ngủ kéo dài, ngáy hoặc ngưng thở khi ngủ cần được khám", "Persistent insomnia, snoring, or sleep apnea needs assessment")],
      analysis: text("Trong 10 ml có sáu dịch chiết thảo dược, mỗi loại 1.000 mg: hoa bia, oải hương, tía tô đất, cam, đoạn và cỏ roi ngựa chanh.", "Each 10 ml contains six herbal extracts at 1,000 mg each: hops, lavender, lemon balm, orange, linden, and lemon verbena."),
      source: "https://www.special-kid.com/en/all-products/", sourceLabel: "Special Kid – Eric Favre Wellness",
      sellers: workbookSellers(text("Trang sản phẩm Special Kid", "Special Kid product page"), "https://www.special-kid.com/en/all-products/", "special-kid", "https://s.shopee.vn/7prcWL7yrg")
    }),
    workbookProduct({
      id: "delictase-oral-drops-lactase-15ml", section: "nutrition", category: "probiotic", subcategory: "lactase",
      name: "Delictase Oral Drops – enzyme lactase 15 ml", brand: "Delictase", image: "/assets/nutrition/delictase-lactase-15ml.jpg",
      age: text("Từ sơ sinh; ưu tiên trẻ nhỏ", "From birth; primarily for young infants"), ageGroups: ["under-6", "6-11", "12-23"], targets: ["infant", "child"],
      needs: ["digestion", "lactose-free"], needLabel: text("Enzyme lactase hỗ trợ phân giải lactose trong sữa", "Lactase enzyme supporting lactose breakdown in milk"), price: 465000,
      displayMetrics: [
        { label: text("Hoạt tính lactase", "Lactase activity"), value: "756 ALU / 6 giọt" }, { label: text("Mỗi giọt", "Per drop"), value: "~126 ALU" },
        { label: text("Liều công bố", "Label serving"), value: "0,252 ml / 6 giọt" }, { label: text("Quy cách", "Package"), value: "15 ml" }
      ],
      lactose: text("Enzyme nguồn Aspergillus oryzae; đây không phải men vi sinh và không điều trị dị ứng đạm sữa bò.", "Enzyme from Aspergillus oryzae; this is not a probiotic and does not treat cow's milk protein allergy."),
      suitable: [text("Trẻ cần hỗ trợ phân giải lactose trong sữa mẹ hoặc sữa công thức", "Infants needing help breaking down lactose in breast milk or formula"), text("Dùng cùng sữa theo đúng hướng dẫn trên nhãn", "Use with milk exactly as directed on the label")],
      cautions: [text("Không thêm vào sữa nóng vì nhiệt làm mất hoạt tính enzyme", "Do not add to hot milk because heat inactivates the enzyme"), text("Tiêu chảy, mất nước, phân máu hoặc chậm tăng cân cần khám bác sĩ", "Diarrhea, dehydration, bloody stools, or poor growth needs assessment")],
      analysis: text("Trong 6 giọt (0,252 ml) có hoạt tính lactase 756 ALU; nồng độ tối thiểu 3.000 ALU/ml, tương đương khoảng 126 ALU mỗi giọt.", "Six drops (0.252 ml) provide 756 ALU lactase activity; minimum concentration is 3,000 ALU/ml, about 126 ALU per drop."),
      source: "https://delictase.com/", sourceLabel: "Delictase – Neosanté Health Solutions",
      sellers: workbookSellers(text("Trang sản phẩm Delictase", "Delictase product page"), "https://delictase.com/", "delictase", "https://s.shopee.vn/4qE0wS6DEU")
    }),
    workbookProduct({
      id: "easycol-baby-plus-lactase-15ml", section: "nutrition", category: "probiotic", subcategory: "lactase",
      name: "Easycol BABY+ enzyme lactase 15 ml", brand: "Easycol BABY+", image: "/assets/nutrition/easycol-baby-lactase-15ml.png",
      age: text("Từ sơ sinh", "From birth"), ageGroups: ["under-6", "6-11", "12-23"], targets: ["infant", "child"],
      needs: ["digestion", "lactose-free"], needLabel: text("Enzyme lactase hỗ trợ tiêu hóa lactose", "Lactase enzyme supporting lactose digestion"), price: 450000,
      displayMetrics: [
        { label: text("Hoạt chất", "Active ingredient"), value: "Lactase" }, { label: text("Dạng dùng", "Form"), value: text("Nhỏ giọt", "Drops") },
        { label: text("Không chứa", "Free from"), value: "Gluten" }, { label: text("Quy cách", "Package"), value: "15 ml" }
      ],
      lactose: text("Thành phần: nước, enzyme lactase và glycerol thực vật; hãng chưa công bố hoạt tính mỗi giọt.", "Ingredients: water, lactase enzyme, and vegetable glycerol; per-drop activity is not stated by the manufacturer."),
      suitable: [text("Trẻ sơ sinh cần hỗ trợ phân giải lactose trong sữa", "Infants needing help breaking down lactose in milk"), text("Sử dụng theo đúng hướng dẫn trên nhãn", "Use exactly as directed on the label")],
      cautions: [text("Không phải men vi sinh và không điều trị dị ứng đạm sữa bò", "Not a probiotic and does not treat cow's milk protein allergy"), text("Sốt, nôn nhiều, mất nước, phân máu hoặc bú kém cần khám bác sĩ", "Fever, repeated vomiting, dehydration, bloody stools, or poor feeding needs assessment")],
      analysis: text("Theo hãng, sản phẩm gồm nước, enzyme lactase và glycerol thực vật, không chứa gluten. Nguồn hãng chưa công bố định lượng hoặc hoạt tính lactase trên mỗi giọt.", "The manufacturer lists water, lactase enzyme, and vegetable glycerol and states that the product is gluten-free. Per-drop lactase activity is not published."),
      source: "https://easycolbaby.com/?lang=en", sourceLabel: "A.E.I. 24 – Easycol BABY+",
      sellers: workbookSellers(text("Trang sản phẩm Easycol", "Easycol product page"), "https://easycolbaby.com/?lang=en", "easycol", "https://s.shopee.vn/2g9WMX5hC8")
    }),
    workbookProduct({
      id: "bioamicus-complete-10-strain-probiotic-drops-10ml", section: "nutrition", category: "probiotic", subcategory: "multi-strain",
      name: "BioAmicus Complete Probiotic Drops 10 ml", brand: "BioAmicus Laboratories", image: "/assets/nutrition/bioamicus-complete-10ml.jpg",
      age: text("Từ sơ sinh đến người lớn; trẻ dưới 1 tuổi dùng theo hướng dẫn chuyên môn", "From birth through adulthood; infants under 1 need professional guidance"), ageGroups: ["under-6", "6-11", "12-23", "2-5", "6-9", "10-15"], targets: ["infant", "child", "teen", "adult"],
      needs: ["digestion", "immune"], needLabel: text("Men vi sinh nhỏ giọt gồm 10 chủng lợi khuẩn", "Probiotic drops with 10 strains"), price: 480000,
      displayMetrics: [
        { label: text("Tổng lợi khuẩn", "Total probiotics"), value: "1 tỷ CFU / 5 giọt" }, { label: text("Số chủng", "Strains"), value: "10 chủng" },
        { label: text("Số liều", "Approx. servings"), value: "~50 liều" }, { label: text("Quy cách", "Package"), value: "10 ml" }
      ],
      lactose: text("Nhãn hàng công bố không protein sữa, lactose, gluten, chất tạo màu, hương liệu hoặc chất bảo quản.", "The brand states no milk protein, lactose, gluten, colors, flavors, or preservatives."),
      suitable: [text("Trẻ em và người lớn cần bổ sung lợi khuẩn đường ruột", "Children and adults needing probiotic supplementation"), text("Người cần hỗ trợ cân bằng hệ vi sinh sau rối loạn tiêu hóa hoặc dùng kháng sinh", "People needing microbiome support after digestive upset or antibiotics")],
      cautions: [text("Trẻ sinh non, bệnh nền nặng, suy giảm miễn dịch hoặc có catheter tĩnh mạch trung tâm cần hỏi bác sĩ", "Preterm infants, severe illness, immunocompromise, or central venous catheters require medical advice"), text("Sốt, nôn nhiều, phân máu, mất nước hoặc triệu chứng kéo dài cần khám", "Fever, repeated vomiting, bloody stool, dehydration, or persistent symptoms need assessment")],
      analysis: text("Mỗi 5 giọt cung cấp tổng 1 tỷ CFU từ 10 chủng Lactobacillus và Bifidobacterium, tương đương 100 triệu CFU mỗi chủng theo thông tin hãng.", "Each five-drop serving provides 1 billion CFU from 10 Lactobacillus and Bifidobacterium strains, 100 million CFU per strain according to the manufacturer."),
      source: "https://bioamicus.com/bioamicus-complete-5-lactobacilli-strains-5-bifidobacteria-strains/", sourceLabel: "BioAmicus Laboratories Inc. – Canada",
      sellers: workbookSellers(text("Trang sản phẩm BioAmicus", "BioAmicus product page"), "https://bioamicus.com/bioamicus-complete-5-lactobacilli-strains-5-bifidobacteria-strains/", "bioamicus", "https://s.shopee.vn/9AN0p3PCUZ")
    }),
    workbookProduct({
      id: "buona-peginpol-macrogol-3350-20-goi-5g", section: "nutrition", category: "fiber", subcategory: "constipation",
      name: "Buona PEGinpol Macrogol 3350 – hộp 20 gói × 5 g", brand: "Buona", image: "/assets/nutrition/buona-peginpol-20x5g.png",
      age: text("Từ 6 tháng tuổi", "From 6 months"), ageGroups: ["6-11", "12-23", "2-5", "6-9", "10-15"], targets: ["infant", "child", "teen", "adult"],
      needs: ["constipation"], needLabel: text("Macrogol 3350 hỗ trợ táo bón chức năng", "Macrogol 3350 for functional constipation support"), price: 265000,
      displayMetrics: [
        { label: "Macrogol 3350", value: "4,933 g / gói" }, { label: text("Khối lượng gói", "Sachet size"), value: "5 g" },
        { label: text("Quy cách", "Package"), value: text("20 gói", "20 sachets") }, { label: text("Không chứa", "Free from"), value: text("Gluten, lactose", "Gluten, lactose") }
      ],
      lactose: text("Không chứa gluten hoặc lactose; đây là nhuận tràng thẩm thấu, không phải chất xơ hay prebiotic.", "Gluten- and lactose-free; this is an osmotic laxative, not fiber or a prebiotic."),
      suitable: [text("Người từ 6 tháng tuổi bị táo bón chức năng sau đánh giá phù hợp", "People from 6 months with appropriately assessed functional constipation"), text("Dùng kèm đủ nước theo hướng dẫn", "Use with adequate fluids as directed")],
      cautions: [text("Không dùng khi tắc, hẹp hoặc thủng ruột; bệnh Crohn hoặc viêm loét đại tràng", "Do not use with bowel obstruction, stenosis, perforation, Crohn's disease, or ulcerative colitis"), text("Đau bụng dữ dội, nôn, chướng bụng hoặc phân máu cần khám ngay", "Severe pain, vomiting, distension, or bloody stools needs urgent assessment")],
      analysis: text("Mỗi gói 5 g chứa khoảng 4,933 g Macrogol 3350. Sản phẩm không chứa gluten, lactose hoặc chất bảo quản và có hương cam.", "Each 5 g sachet contains about 4.933 g Macrogol 3350. It is free from gluten, lactose, and preservatives and is orange flavored."),
      source: "https://shop.buona.it/en/prodotto/peginpol-bustine/", sourceLabel: "Buona Italy – PEGinpol",
      sellers: workbookSellers(text("Trang sản phẩm Buona", "Buona product page"), "https://shop.buona.it/en/prodotto/peginpol-bustine/", "buona", "https://s.shopee.vn/9KgQIkNsJm")
    }),
    workbookProduct({
      id: "infogoss-iap-chat-xo-30-goi-3g", section: "nutrition", category: "fiber", subcategory: "constipation",
      name: "InfoGoss IAP – hộp 30 gói × 3 g", brand: "IAP", image: "/assets/nutrition/infogoss-iap-30x3g-thumb.jpg",
      age: text("Từ 1 tuổi đến người lớn", "From age 1 through adulthood"), ageGroups: ["12-23", "2-5", "6-9", "10-15"], targets: ["child", "teen", "adult", "mother"],
      needs: ["constipation", "digestion"], needLabel: text("Inulin, FOS, GOS và 2'-FL hỗ trợ bổ sung chất xơ", "Inulin, FOS, GOS, and 2'-FL fiber supplement"), price: 117000,
      displayMetrics: [
        { label: "Inulin", value: "900 mg / gói" }, { label: "FOS", value: "900 mg / gói" },
        { label: "GOS", value: "90 mg / gói" }, { label: "2'-FL HMO", value: "5 mg / gói" }
      ],
      lactose: text("Có galacto-oligosaccharide (GOS); người dị ứng sữa cần kiểm tra nguồn nguyên liệu và nhãn hiện hành.", "Contains galacto-oligosaccharide (GOS); people with milk allergy should verify the ingredient source and current label."),
      suitable: [text("Người từ 1 tuổi cần bổ sung chất xơ hòa tan trong khẩu phần", "People from age 1 needing soluble fiber supplementation"), text("Táo bón cần hỗ trợ nhuận tràng sau khi đã loại trừ dấu hiệu cảnh báo", "Constipation needing bowel-regularity support after warning signs are excluded")],
      cautions: [text("Đau bụng nhiều, nôn, chướng bụng, sốt hoặc phân máu cần khám trước khi dùng", "Severe pain, vomiting, distension, fever, or bloody stool requires assessment before use"), text("Uống đủ nước; giảm liều hoặc ngừng dùng nếu đầy hơi, tiêu chảy kéo dài", "Maintain adequate fluids; reduce or stop if persistent bloating or diarrhea occurs")],
      analysis: text("Mỗi gói 3 g cung cấp 900 mg inulin, 900 mg FOS, 90 mg GOS và 5 mg 2'-FL. Đây là thực phẩm bổ sung chất xơ; hiệu quả và khả năng dung nạp phụ thuộc khẩu phần, lượng nước và nguyên nhân táo bón.", "Each 3 g sachet provides 900 mg inulin, 900 mg FOS, 90 mg GOS, and 5 mg 2'-FL. This is a fiber supplement; benefit and tolerance depend on diet, fluid intake, and the cause of constipation."),
      source: "", sourceLabel: text("Công ty Cổ phần Thương mại và Dược phẩm Đông Nam Á", "Dong Nam A Pharmaceutical and Trading Joint Stock Company"),
      sellers: [{ name: "Shopee", url: "https://s.shopee.vn/2qSwYp4IQS", kind: "affiliate", platform: "shopee" }]
    }),
    workbookProduct({
      id: "menarini-atopiclair-cream-40ml", section: "care", category: "skin-care", subcategory: "barrier",
      name: "Menarini Atopiclair Cream 40 ml", brand: "Atopiclair – Menarini", image: "/assets/nutrition/atopiclair-cream-40ml.jpg",
      age: text("Từ 6 tháng tuổi trở lên", "From 6 months"), ageGroups: ["6-11", "12-23", "2-5", "6-9", "10-15"], targets: ["infant", "child", "family"],
      needs: ["sensitive", "fragrance-free", "dry-skin"], needLabel: text("Kem không steroid hỗ trợ phục hồi hàng rào da", "Non-steroidal cream supporting the skin barrier"), price: 270000,
      displayMetrics: [
        { label: text("Dạng", "Form"), value: text("Kem bôi", "Cream") }, { label: text("Quy cách", "Package"), value: "40 ml" },
        { label: "Steroid", value: text("Không", "Free") }, { label: text("Hương liệu", "Fragrance"), value: text("Không", "Free") }
      ],
      lactose: text("Không steroid, không hương liệu, không paraben và không có thành phần nguồn gốc động vật theo hãng.", "Manufacturer states steroid-, fragrance-, paraben-, and animal-derived ingredient-free."),
      suitable: [text("Da khô, nhạy cảm hoặc viêm da cơ địa cần dưỡng ẩm và hỗ trợ hàng rào da", "Dry, sensitive, or atopic skin needing moisturization and barrier support"), text("Vùng tổn thương khu trú từ 6 tháng tuổi", "Localized areas from 6 months of age")],
      cautions: [text("Chỉ dùng ngoài da; tránh mắt, vùng nhiễm trùng và vết thương sâu", "External use only; avoid eyes, infected areas, and deep wounds"), text("Không thay thế điều trị viêm da tã do nấm hoặc nhiễm khuẩn", "Does not replace treatment for fungal or bacterial diaper dermatitis")],
      analysis: text("Thành phần nổi bật gồm hyaluronic acid, bơ hạt mỡ, glycyrrhetinic acid, Vitis vinifera, telmesteine và vitamin C, E. Hãng định vị kem 40 ml cho tổn thương khu trú.", "Notable ingredients include hyaluronic acid, shea butter, glycyrrhetinic acid, Vitis vinifera, telmesteine, and vitamins C and E. The 40 ml cream is intended for localized areas."),
      source: "https://www.menarinidermaesthetics.com/Eczema/atopiclair-products", sourceLabel: "A. Menarini Asia-Pacific – Atopiclair",
      sellers: workbookSellers(text("Trang sản phẩm Menarini", "Menarini product page"), "https://www.menarinidermaesthetics.com/Eczema/atopiclair-products", "menarini", "https://s.shopee.vn/2BDFlhhnmd")
    }),
    workbookProduct({
      id: "biomed-latopic-active-face-body-cream-75ml", section: "care", category: "skin-care", subcategory: "moisturizer",
      name: "Latopic Probiotic Emollient Active Face and Body Cream 75 ml", brand: "Latopic – BIOMED", image: "/assets/nutrition/latopic-active-75ml.png",
      age: text("Từ sơ sinh theo thông tin phân phối", "From birth per distributor information"), ageGroups: ["under-6", "6-11", "12-23", "2-5", "6-9", "10-15"], targets: ["infant", "child", "family"],
      needs: ["sensitive", "dry-skin"], needLabel: text("Kem dưỡng ẩm mặt và cơ thể cho da khô, nhạy cảm", "Face and body emollient for dry, sensitive skin"), price: 390000,
      displayMetrics: [
        { label: text("Vùng dùng", "Use area"), value: text("Mặt & cơ thể", "Face & body") }, { label: text("Quy cách", "Package"), value: "75 ml" },
        { label: text("Thành phần nổi bật", "Key ingredient"), value: "Lactobacillus Ferment" }, { label: text("Đặc tính", "Claim"), value: "Hypoallergenic" }
      ],
      lactose: text("Lactobacillus Ferment là chất chuyển hóa lên men, không phải vi khuẩn sống; kiểm tra nhãn nếu dị ứng thành phần.", "Lactobacillus Ferment is a fermentation-derived ingredient, not live bacteria; check the label for ingredient allergy."),
      suitable: [text("Da khô, bong tróc, nhạy cảm hoặc có cơ địa dị ứng", "Dry, flaky, sensitive, or allergy-prone skin"), text("Dưỡng ẩm mặt và cơ thể cho trẻ em và người lớn", "Face and body moisturization for children and adults")],
      cautions: [text("Chỉ dùng ngoài da và nên thử trên vùng nhỏ với da rất nhạy cảm", "External use only; patch test very sensitive skin"), text("Không tự bôi lên vùng nhiễm trùng, rỉ dịch hoặc tổn thương rộng", "Do not self-apply to infected, weeping, or extensive lesions")],
      analysis: text("Công thức có Lactobacillus Ferment, dầu hạt bông, bơ hạt mỡ, panthenol, dầu ô liu, vitamin E và phức hợp xylitol hỗ trợ dưỡng ẩm.", "The formula includes Lactobacillus Ferment, cottonseed oil, shea butter, panthenol, olive oil, vitamin E, and a xylitol moisturizing complex."),
      source: "https://biomed.pl/en/products/latopic-aktywny-krem-do-twarzy-i-ciala/", sourceLabel: "BIOMED – Latopic Active Cream",
      sellers: workbookSellers(text("Trang sản phẩm BIOMED", "BIOMED product page"), "https://biomed.pl/en/products/latopic-aktywny-krem-do-twarzy-i-ciala/", "biomed", "https://s.shopee.vn/8V7JJcYtKZ")
    }),
    workbookProduct({
      id: "lsi-silderma-sodermix-cream-15g", section: "care", category: "skin-care", subcategory: "soothing",
      name: "LSI Silderma SODERMIX Cream 15 g", brand: "SODERMIX – LSI Silderma", image: "/assets/nutrition/sodermix-cream-15g.jpg",
      age: text("Từ sơ sinh theo thông tin phân phối; trẻ nhỏ cần tư vấn", "From birth per distributor information; seek advice for young infants"), ageGroups: ["under-6", "6-11", "12-23", "2-5", "6-9", "10-15"], targets: ["infant", "child", "family"],
      needs: ["sensitive", "dry-skin"], needLabel: text("Kem SOD thực vật hỗ trợ viêm ngứa và chăm sóc sẹo", "Plant-derived SOD cream supporting itchy skin and scar care"), price: 330000,
      displayMetrics: [
        { label: text("Hoạt chất chính", "Key active"), value: "Vegetal SOD" }, { label: text("Dạng", "Form"), value: text("Kem bôi", "Cream") },
        { label: text("Quy cách", "Package"), value: "15 g" }, { label: text("Nguồn SOD", "SOD source"), value: text("Cà chua xanh", "Green tomato") }
      ],
      lactose: text("Có chiết xuất cà chua, dầu quả bơ, methylparaben, propylene glycol và triethanolamine.", "Contains tomato extract, avocado oil, methylparaben, propylene glycol, and triethanolamine."),
      suitable: [text("Da viêm ngứa, mẩn đỏ hoặc cần hỗ trợ chăm sóc sẹo", "Itchy, inflamed, red skin or skin needing scar support"), text("Dùng bổ trợ sau khi xác định đúng nguyên nhân tổn thương", "Adjunctive use after the cause of the lesion is identified")],
      cautions: [text("Không bôi vào mắt, niêm mạc, vết thương hở hoặc vùng nhiễm trùng", "Do not apply to eyes, mucosa, open wounds, or infected areas"), text("Trẻ sơ sinh, vùng tã hoặc tổn thương rộng nên được bác sĩ đánh giá", "Infants, diaper-area lesions, or extensive lesions need professional assessment")],
      analysis: text("Hoạt chất chính theo hãng là Superoxide Dismutase thực vật từ dịch chiết cà chua xanh; nền kem còn có dầu quả bơ, dầu khoáng và petrolatum.", "The manufacturer identifies plant-derived Superoxide Dismutase from green tomato extract as the key active; the cream base also includes avocado oil, mineral oil, and petrolatum."),
      source: "https://www.lsisilderma.com/sodermix/", sourceLabel: "LSI Silderma – SODERMIX",
      sellers: workbookSellers(text("Trang sản phẩm LSI Silderma", "LSI Silderma product page"), "https://www.lsisilderma.com/sodermix/", "lsi-silderma", "https://s.shopee.vn/3g23YlYkOW")
    })
  );

  const usageGuides = {
    "growplus-tieu-hoa-2-800g": {
      steps: [text("Rửa tay, tiệt trùng dụng cụ và dùng nước đun sôi để nguội còn khoảng 50°C.", "Wash hands, sterilize utensils, and use boiled water cooled to about 50°C."), text("Pha 7 muỗng gạt ngang (khoảng 36 g bột) với 180 ml nước, khuấy tan và dùng ngay.", "Mix 7 level scoops (about 36 g powder) with 180 ml water, stir well, and serve immediately."), text("Dùng 2–3 ly mỗi ngày hoặc theo hướng dẫn của nhân viên y tế; đóng kín và dùng trong 1 tháng sau khi mở.", "Use 2–3 servings daily or as advised by a healthcare professional; close tightly and use within one month of opening.")]
    },
    "pediasure-pha-san-vani-110ml-4-loc": {
      steps: [text("Lắc kỹ hộp trước khi uống; sản phẩm pha sẵn, không cần pha loãng.", "Shake well before drinking; this is ready to drink and should not be diluted."), text("Có thể dùng 2–3 hộp 110 ml mỗi ngày hoặc theo hướng dẫn của nhân viên y tế.", "Use 2–3 110 ml cartons daily or as directed by a healthcare professional."), text("Ngon hơn khi uống lạnh; không hâm bằng lò vi sóng và dùng ngay sau khi mở.", "Best served chilled; do not microwave and consume promptly after opening.")]
    },
    "nutren-junior-pha-san-vani-110ml-thung-36": {
      steps: [text("Lắc kỹ và uống trực tiếp; không cần pha thêm nước.", "Shake well and drink directly; do not add water."), text("Khẩu phần thường dùng 2–3 hộp mỗi ngày hoặc điều chỉnh theo nhu cầu và hướng dẫn chuyên môn.", "A common intake is 2–3 cartons daily, adjusted to needs and professional guidance."), text("Dùng ngay sau khi mở; bảo quản nơi khô mát, tránh ánh nắng trực tiếp.", "Consume promptly after opening; store in a cool, dry place away from direct sunlight.")]
    },
    "vinamilk-sua-tuoi-tach-beo-khong-duong-180ml-thung-48": {
      steps: [text("Lắc đều trước khi uống và dùng trực tiếp.", "Shake well before drinking and serve directly."), text("Uống theo khẩu phần phù hợp với tuổi và chế độ ăn; không dùng thay thế bữa ăn chính.", "Use an age- and diet-appropriate serving; do not use as a replacement for main meals."), text("Không cần bảo quản lạnh khi chưa mở; sau khi mở nên dùng hết ngay.", "Refrigeration is not required before opening; consume immediately once opened.")]
    },
    "lineabon-d3k2-drops-10ml": {
      steps: [text("Lắc kỹ chai trước mỗi lần dùng và đếm giọt bằng đầu nhỏ giọt của sản phẩm.", "Shake well before each use and count drops with the product dropper."), text("Liều tham khảo theo hãng: 0–12 tháng 6 giọt/ngày; 1–3 tuổi 6–8 giọt/ngày; 3–12 tuổi 8–12 giọt/ngày; người lớn 12 giọt/ngày.", "Manufacturer guidance: 0–12 months 6 drops/day; ages 1–3, 6–8 drops/day; ages 3–12, 8–12 drops/day; adults 12 drops/day."), text("Dùng trực tiếp hoặc cùng thức ăn nguội; không nhỏ vào đồ ăn, thức uống nóng.", "Give directly or with cool food; do not add to hot food or drinks.")]
    },
    "orzax-imunol-syrup-150ml": {
      steps: [text("Lắc kỹ chai và dùng dụng cụ đong kèm theo, ưu tiên dùng sau bữa ăn.", "Shake well and use the supplied measure, preferably after a meal."), text("Liều theo hãng: 1–3 tuổi 5 ml/ngày; 3–5 tuổi 7,5 ml/ngày; từ 5 tuổi 10 ml/ngày.", "Manufacturer guidance: ages 1–3, 5 ml/day; ages 3–5, 7.5 ml/day; age 5 and above, 10 ml/day."), text("Không vượt quá liều trên nhãn và cần tính tổng vitamin C, kẽm từ các sản phẩm khác.", "Do not exceed the label serving and account for vitamin C and zinc from other products.")]
    },
    "vitabiotics-wellbaby-multivitamin-liquid-150ml": {
      steps: [text("Trẻ 6 tháng–4 tuổi dùng 5 ml mỗi ngày.", "Children aged 6 months–4 years use 5 ml daily."), text("Trộn lượng đã đong vào sữa hoặc nước thường dùng của trẻ và khuấy đều.", "Mix the measured amount into the child's usual milk or water and stir well."), text("Không cho uống trực tiếp từ thìa; không vượt quá liều và không dùng cùng đa vitamin khác nếu chưa kiểm tra tổng liều.", "Do not administer directly from a spoon; do not exceed the serving or combine with another multivitamin without checking total intake.")]
    },
    "vitabiotics-wellkid-multivitamin-liquid-150ml": {
      steps: [text("Lắc kỹ chai và dùng trong hoặc ngay sau bữa ăn chính.", "Shake well and use with or immediately after a main meal."), text("Trẻ 4–10 tuổi dùng 5 ml/ngày; trẻ 11–12 tuổi dùng 10 ml/ngày.", "Children aged 4–10 use 5 ml/day; ages 11–12 use 10 ml/day."), text("Dùng dụng cụ đong, không vượt quá liều và không phối hợp đa vitamin khác nếu chưa tính tổng liều.", "Use a measuring device, do not exceed the serving, and avoid another multivitamin unless total intake has been checked.")]
    },
    "femalto-sat-iii-hydroxyd-polymaltose-50mg-ml-30ml": {
      steps: [text("Có thể uống trực tiếp hoặc trộn với nước hoa quả, nước rau ép hay nước đóng chai; dùng một lần hoặc chia nhiều lần trong ngày. 1 ml tương ứng 14 giọt.", "Take directly or mix with fruit juice, vegetable juice, or bottled water; use once daily or in divided doses. One ml equals 14 drops."), text("Trẻ dưới 1 tuổi: thiếu sắt kèm thiếu máu 0,5–1 ml/ngày (7–14 giọt); thiếu sắt không kèm thiếu máu 0,5 ml/ngày (7 giọt).", "Under age 1: 0.5–1 ml/day (7–14 drops) for iron deficiency anemia; 0.5 ml/day (7 drops) for iron deficiency without anemia."), text("Trẻ 1–12 tuổi: tương ứng 1–2 ml/ngày hoặc 0,5–1 ml/ngày. Trên 12 tuổi và người lớn: tương ứng 2–6 ml/ngày hoặc 1–2 ml/ngày.", "Ages 1–12: 1–2 ml/day or 0.5–1 ml/day respectively. Over age 12 and adults: 2–6 ml/day or 1–2 ml/day respectively."), text("Trẻ sinh non: 2,5–5 mg sắt/kg/ngày trong 3–5 tháng chỉ theo chỉ định. Mọi liều dùng và thời gian điều trị cần được bác sĩ hoặc nhân viên y tế xác nhận.", "Preterm infants: 2.5–5 mg iron/kg/day for 3–5 months only when prescribed. All dosing and treatment duration require confirmation by a healthcare professional.")]
    },
    "dimao-pro-d3k2-oral-spray-25ml": {
      steps: [text("Lắc kỹ lọ rồi xịt trực tiếp vào miệng; có thể dùng trước hoặc sau ăn.", "Shake well, then spray directly into the mouth; it may be used before or after meals."), text("Trẻ 0–12 tháng: 1 nhát/ngày. Từ 12 tháng: liều bổ sung thông thường 1 nhát/ngày; trường hợp cần thiết chỉ tăng đến 2–3 nhát theo hướng dẫn chuyên môn. Người lớn: 2–3 nhát/ngày.", "Ages 0–12 months: 1 spray daily. From 12 months: the usual supplemental serving is 1 spray daily; increase to 2–3 only with professional guidance. Adults: 2–3 sprays daily."), text("Không tự tăng liều ở trẻ và cần tính tổng vitamin D, K từ các sản phẩm khác đang dùng.", "Do not increase a child's dose without advice and account for vitamin D and K from all other products.")]
    },
    "natures-way-kids-smart-drops-vitamin-d3-k2-11ml": {
      steps: [text("Lắc đều trước khi dùng. Có thể nhỏ trực tiếp vào miệng hoặc trộn với sữa, thức ăn hay nước trái cây.", "Shake well before use. Give directly by mouth or mix with milk, food, or juice."), text("Trẻ 0–12 tháng: 6 giọt/ngày; 1–2 tuổi: 6–8 giọt/ngày; 3–12 tuổi: 8–12 giọt/ngày; từ 12 tuổi và người lớn: 12 giọt/ngày.", "Ages 0–12 months: 6 drops/day; ages 1–2: 6–8 drops/day; ages 3–12: 8–12 drops/day; age 12 and adults: 12 drops/day."), text("Bảo quản dưới 25°C và làm lạnh sau khi mở nắp; không dùng nếu niêm phong bị hỏng.", "Store below 25°C and refrigerate after opening; do not use if the tamper seal is damaged.")]
    },
    "biolizin-zinc-bisglycinate-lysine-b6-50ml": {
      steps: [text("Lắc đều và lấy liều bằng bơm chia liều hoặc thìa sạch; có thể uống trực tiếp hoặc trộn với nước, thức ăn nguội.", "Shake well and measure with the supplied syringe or a clean spoon; give directly or mix with cool water or food."), text("Trẻ 3–6 tháng: 1 ml/ngày; 6–12 tháng: 2 ml/ngày; 1–4 tuổi: 2,5 ml/ngày; từ 5 tuổi và người lớn: 5 ml/ngày.", "Ages 3–6 months: 1 ml/day; 6–12 months: 2 ml/day; ages 1–4: 2.5 ml/day; age 5 and adults: 5 ml/day."), text("Nên dùng cách sắt hoặc canxi khoảng 2 giờ. Sau khi mở, dùng tối đa 3 tháng và ưu tiên bảo quản ngăn mát.", "Separate from iron or calcium by about two hours. After opening, use within three months and preferably refrigerate.")]
    },
    "ferrolip-baby-iron-bisglycinate-drops-30ml": {
      steps: [text("Lắc chai và đo liều bằng dụng cụ chia liều đi kèm.", "Shake the bottle and measure with the supplied dosing device."), text("Trẻ 0–12 tháng: 1 ml/ngày; 1–3 tuổi: 1,5 ml/ngày; 4–10 tuổi: 2–2,5 ml/ngày.", "Ages 0–12 months: 1 ml/day; ages 1–3: 1.5 ml/day; ages 4–10: 2–2.5 ml/day."), text("Trẻ dưới 2 tuổi, trẻ có thalassemia hoặc đang điều trị thiếu máu chỉ dùng theo hướng dẫn bác sĩ; không tự tăng liều hay kéo dài thời gian dùng.", "Children under 2, children with thalassemia, or those being treated for anemia should use only under medical direction; do not increase or prolong dosing without advice.")]
    },
    "special-kid-sommeil-thao-duoc-125ml": {
      steps: [text("Lắc kỹ trước khi dùng, uống trực tiếp hoặc pha với một ít nước.", "Shake well before use; take directly or dilute in a little water."), text("Trẻ dưới 5 tuổi dùng 5 ml buổi tối; từ 5 tuổi dùng 10 ml buổi tối.", "Children under 5 use 5 ml in the evening; age 5 and above use 10 ml in the evening."), text("Trẻ dưới 24 tháng chỉ dùng khi có hướng dẫn chuyên môn; không phối hợp thuốc an thần nếu chưa hỏi bác sĩ.", "Children under 24 months should use only with professional guidance; do not combine with sedatives without medical advice.")]
    },
    "delictase-oral-drops-lactase-15ml": {
      steps: [text("Lắc chai và dùng khẩu phần trên nhãn hiện hành; bảng thành phần công bố theo 6 giọt.", "Shake the bottle and follow the current label serving; composition is stated per 6 drops."), text("Có thể nhỏ trực tiếp vào miệng hoặc vào bình sữa ngay trước cữ bú, sau đó cho trẻ bú ngay.", "Drops may be given directly by mouth or added to the bottle immediately before feeding, then feed at once."), text("Không thêm vào sữa nóng; không cần ủ bình hoặc bảo quản lạnh để enzyme hoạt động.", "Do not add to hot milk; bottle incubation or refrigeration is not required for enzyme activity.")]
    },
    "easycol-baby-plus-lactase-15ml": {
      steps: [text("Với trẻ bú mẹ, nhỏ liều theo bảng trên nhãn vào thìa và cho dùng ngay trước cữ bú.", "For breastfed infants, place the label-directed dose on a spoon and give immediately before feeding."), text("Với sữa công thức hoặc sữa mẹ vắt, thêm 4 giọt vào bình, lắc đều và nếu có thể chuẩn bị trước khoảng 30 phút.", "For formula or expressed breast milk, add 4 drops to the bottle, shake well, and if possible prepare about 30 minutes before feeding."), text("Dùng ở mỗi cữ theo nhãn; không thêm vào sữa nóng và không dùng thay cho xử trí dị ứng đạm sữa bò.", "Use at each feed as labelled; do not add to hot milk and do not use as a substitute for managing cow's milk protein allergy.")]
    },
    "bioamicus-complete-10-strain-probiotic-drops-10ml": {
      steps: [text("Lắc kỹ trước mỗi lần dùng. Nhỏ trực tiếp, cho ra thìa hoặc trộn với sữa, nước hay thức ăn nguội; không pha vào đồ nóng.", "Shake well before each use. Give directly, on a spoon, or mix with cool milk, water, or food; do not add to hot food or drinks."), text("Trẻ dưới 1 tuổi: theo hướng dẫn chuyên môn, liều tham khảo 5 giọt/lần, ngày 1 lần. Từ 1 tuổi và người lớn: 5 giọt/lần, ngày 2 lần.", "Under age 1: use with professional guidance; the reference serving is 5 drops once daily. From age 1 and adults: 5 drops twice daily."), text("Dùng cách kháng sinh ít nhất 2–3 giờ. Không để đầu nhỏ giọt chạm miệng hoặc chất lỏng; sau mở nắp đậy kín và bảo quản ngăn mát 2–8°C.", "Separate from antibiotics by at least 2–3 hours. Keep the dropper tip away from the mouth and liquids; close tightly and refrigerate at 2–8°C after opening.")]
    },
    "buona-peginpol-macrogol-3350-20-goi-5g": {
      steps: [text("Liều theo hãng: 6 tháng–2 tuổi (đến 12 kg) 1–2 gói/ngày; 2–11 tuổi (12–20 kg) 2–4 gói/ngày; trên 11 tuổi (trên 20 kg) 2–6 gói/ngày.", "Manufacturer guidance: 6 months–2 years (up to 12 kg), 1–2 sachets/day; ages 2–11 (12–20 kg), 2–4/day; over 11 years (over 20 kg), 2–6/day."), text("Hòa tan theo tờ hướng dẫn của hộp và duy trì đủ lượng nước trong ngày.", "Dissolve according to the package leaflet and maintain adequate fluid intake."), text("Nên dùng liều thấp nhất có hiệu quả; trẻ nhỏ hoặc cần dùng kéo dài phải được nhân viên y tế theo dõi.", "Use the lowest effective amount; young children or prolonged use require professional follow-up.")]
    },
    "infogoss-iap-chat-xo-30-goi-3g": {
      steps: [text("Trẻ 1–9 tuổi: mỗi lần 1 gói (3 g), ngày 2 lần.", "Children aged 1–9: 1 sachet (3 g) per dose, twice daily."), text("Từ 9 tuổi, người lớn, phụ nữ mang thai hoặc cho con bú: mỗi lần 1 gói, ngày 2–3 lần.", "Age 9 and above, adults, and pregnant or breastfeeding women: 1 sachet per dose, 2–3 times daily."), text("Pha với nước đun sôi để nguội, sữa hoặc trộn vào thức ăn; dùng ngay sau khi pha và uống đủ nước trong ngày.", "Mix with cooled boiled water, milk, or food; use promptly after mixing and maintain adequate fluid intake.")]
    },
    "menarini-atopiclair-cream-40ml": {
      steps: [text("Làm sạch và lau khô vùng da cần chăm sóc.", "Clean and dry the area to be treated."), text("Thoa một lớp mỏng, massage nhẹ 3 lần mỗi ngày hoặc khi cần theo hướng dẫn của hãng.", "Apply a thin layer and massage gently three times daily or as needed according to the manufacturer."), text("Chỉ dùng ngoài da; tránh mắt, niêm mạc và vùng da đang nhiễm trùng.", "For external use only; avoid eyes, mucosa, and infected skin.")]
    },
    "biomed-latopic-active-face-body-cream-75ml": {
      steps: [text("Làm sạch và lau khô da trước khi thoa.", "Clean and dry the skin before application."), text("Thoa một lớp mỏng lên vùng da mặt hoặc cơ thể khô, kích ứng rồi tán nhẹ cho thấm.", "Apply a thin layer to dry or irritated facial or body skin and spread gently until absorbed."), text("Dùng đều đặn theo nhu cầu; tránh mắt và ngừng dùng nếu kích ứng tăng.", "Use regularly as needed; avoid the eyes and stop if irritation worsens.")]
    },
    "lsi-silderma-sodermix-cream-15g": {
      steps: [text("Làm sạch, lau khô vùng da và thoa một lớp kem mỏng.", "Clean and dry the area, then apply a thin layer of cream."), text("Massage nhẹ đến khi thấm, dùng 2 lần mỗi ngày theo hướng dẫn của hãng.", "Massage gently until absorbed and use twice daily according to the manufacturer."), text("Không bôi lên mắt, niêm mạc, vết thương hở hoặc vùng nhiễm trùng; tổn thương rộng cần được đánh giá.", "Do not apply to eyes, mucosa, open wounds, or infected skin; extensive lesions require assessment.")]
    }
  };

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
      label: text("Men vi sinh & enzyme tiêu hóa", "Probiotics & digestive enzymes"),
      shortLabel: text("Men vi sinh & enzyme", "Probiotics & enzymes"),
      description: text("Men vi sinh và enzyme tiêu hóa được phân biệt rõ theo chủng, hoạt tính và mục đích sử dụng trên nhãn.", "Probiotics and digestive enzymes are clearly separated by strain, activity, and labelled use."),
      subcategories: [["all", text("Tất cả", "All")], ["lactase", "Enzyme lactase"], ["diarrhea", text("Tiêu chảy", "Diarrhea")], ["constipation", text("Táo bón", "Constipation")], ["antibiotic", text("Sau kháng sinh", "After antibiotics")], ["colic", "Colic"]]
    },
    {
      id: "fiber",
      label: text("Chất xơ & hỗ trợ táo bón", "Fiber & constipation support"),
      shortLabel: text("Chất xơ & táo bón", "Fiber & constipation"),
      description: text("Chất xơ, prebiotic và sản phẩm hỗ trợ táo bón được ghi rõ cơ chế, liều dùng và cảnh báo theo nhãn.", "Fiber, prebiotics, and constipation-support products with label-backed mechanism, serving, and cautions."),
      subcategories: [["all", text("Tất cả", "All")], ["constipation", text("Hỗ trợ táo bón", "Constipation support")], ["inulin", "Inulin"], ["fos", "FOS"], ["gos", "GOS"], ["soluble", text("Chất xơ hòa tan", "Soluble fiber")]]
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
      description: text("Chăm sóc da, vùng tã, tắm gội và đồ dùng thiết yếu cho trẻ nhỏ.", "Skin and diaper-area care, bath products, and everyday essentials for young children."),
      subcategories: [["all", text("Tất cả", "All")], ["skin-care", text("Chăm sóc da & chống hăm", "Skin & diaper-area care")], ["diaper", text("Tã bỉm", "Diapers")], ["sun", text("Chống nắng", "Sun care")], ["bath", text("Tắm gội", "Bath & hair")], ["laundry", text("Nước giặt", "Laundry")], ["wipes", text("Khăn ướt", "Wipes")]]
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
      defaultCategory: "skin-care"
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
      description: text("Vitamin, khoáng chất và sản phẩm bổ sung chuyên biệt theo thông tin trên nhãn.", "Vitamins, minerals, and specialized supplements with label-backed information."),
      subcategories: [["all", text("Tất cả", "All")], ["d3", "Vitamin D3"], ["d3-k2", "Vitamin D3 + K2"], ["multi", text("Vitamin tổng hợp", "Multivitamin")], ["immune", text("Hỗ trợ miễn dịch", "Immune support")], ["sleep", text("Hỗ trợ giấc ngủ", "Sleep support")], ["dha", "DHA"], ["omega-3", "Omega-3"], ["zinc", text("Kẽm", "Zinc")], ["iron", text("Sắt", "Iron")], ["calcium", text("Canxi", "Calcium")]]
    },
    {
      id: "probiotic", area: "nutrition", label: text("Men vi sinh & enzyme tiêu hóa", "Probiotics & digestive enzymes"), shortLabel: text("Men vi sinh & enzyme", "Probiotics & enzymes"),
      description: text("Men vi sinh và enzyme tiêu hóa được phân biệt rõ theo chủng, hoạt tính và mục đích sử dụng trên nhãn.", "Probiotics and digestive enzymes are clearly separated by strain, activity, and labelled use."),
      subcategories: [["all", text("Tất cả", "All")], ["multi-strain", text("Men đa chủng", "Multi-strain")], ["lactase", "Enzyme lactase"], ["diarrhea", text("Tiêu chảy", "Diarrhea")], ["constipation", text("Táo bón", "Constipation")], ["antibiotic", text("Sau kháng sinh", "After antibiotics")], ["colic", "Colic"]]
    },
    {
      id: "fiber", area: "nutrition", label: text("Chất xơ & hỗ trợ táo bón", "Fiber & constipation support"), shortLabel: text("Chất xơ & táo bón", "Fiber & constipation"),
      description: text("Chất xơ, prebiotic và sản phẩm hỗ trợ táo bón được ghi rõ cơ chế, liều dùng và cảnh báo theo nhãn.", "Fiber, prebiotics, and constipation-support products with label-backed mechanism, serving, and cautions."),
      subcategories: [["all", text("Tất cả", "All")], ["constipation", text("Hỗ trợ táo bón", "Constipation support")], ["inulin", "Inulin"], ["fos", "FOS"], ["gos", "GOS"], ["soluble", text("Chất xơ hòa tan", "Soluble fiber")]]
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
      id: "skin-care", area: "care", label: text("Chăm sóc da & chống hăm", "Skin & diaper-area care"), shortLabel: text("Chăm sóc da & chống hăm", "Skin & diaper care"),
      description: text("Kem dưỡng ẩm, phục hồi hàng rào da, làm dịu và bảo vệ vùng da mặc tã trong cùng một nhóm dễ tra cứu.", "Moisturizers, barrier repair, soothing care, and diaper-area protection in one easy-to-browse group."),
      subcategories: [["all", text("Tất cả", "All")], ["moisturizer", text("Dưỡng ẩm", "Moisturizers")], ["barrier", text("Phục hồi hàng rào da", "Barrier repair")], ["soothing", text("Làm dịu & chăm sóc sẹo", "Soothing & scar care")], ["diaper", text("Bảo vệ vùng tã", "Diaper-area protection")]]
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

  const initialNavigation = readNavigationState();

  const state = {
    area: initialNavigation.area,
    category: initialNavigation.category,
    subcategory: initialNavigation.subcategory,
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

  function readNavigationState() {
    let saved = {};
    try {
      saved = JSON.parse(sessionStorage.getItem("growthkid:nutrition:navigation") || "{}");
    } catch (error) {
      saved = {};
    }

    const requestedArea = productAreas.some((area) => area.id === saved.area) ? saved.area : "nutrition";
    const availableCategories = categories.filter((category) => category.area === requestedArea && !category.hidden);
    const area = productAreas.find((item) => item.id === requestedArea);
    const category = availableCategories.find((item) => item.id === saved.category)
      || availableCategories.find((item) => item.id === area?.defaultCategory)
      || availableCategories[0];
    const availableSubcategories = category?.subcategories?.map(([id]) => id) || ["all"];
    const subcategory = availableSubcategories.includes(saved.subcategory) ? saved.subcategory : "all";

    return {
      area: area?.id || "nutrition",
      category: category?.id || "milk",
      subcategory
    };
  }

  function persistNavigation() {
    try {
      sessionStorage.setItem("growthkid:nutrition:navigation", JSON.stringify({
        area: state.area,
        category: state.category,
        subcategory: state.subcategory
      }));
    } catch (error) {
      return;
    }
  }

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
    if (typeof value === "string") return value;
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
      ? [["all", text("Tất cả nhu cầu", "All needs")], ["daily", text("Dùng hằng ngày", "Daily use")], ["digestion", text("Hỗ trợ tiêu hóa", "Digestive support")], ["constipation", text("Hỗ trợ táo bón", "Constipation support")], ["immune", text("Hỗ trợ miễn dịch", "Immune support")], ["sleep", text("Hỗ trợ giấc ngủ", "Sleep support")], ["energy", text("Bổ sung năng lượng", "More energy")], ["less-sugar", text("Ít đường", "Lower sugar")], ["lactose-free", text("Không lactose", "Lactose-free")], ["calcium", text("Canxi & vitamin D", "Calcium & vitamin D")], ["meal", text("Bữa phụ dinh dưỡng", "Nutritional snack")]]
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
    const usage = usageGuides[product.id];
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
      <section class="nutrition-usage">
        <div class="nutrition-usage-heading">
          <div class="nutrition-usage-icon">${icon("usage")}</div>
          <div><span>${text("Dùng đúng nhãn", "Use as labelled")}</span><h3>${text("Hướng dẫn sử dụng", "Directions for use")}</h3></div>
        </div>
        <ol>${(usage?.steps || [text("Sử dụng theo hướng dẫn trên nhãn hiện hành hoặc chỉ định của nhân viên y tế.", "Use according to the current label or a healthcare professional's direction.")]).map((item) => `<li><span>${item}</span></li>`).join("")}</ol>
        <p>${icon("info")}<span>${text("Liều trên đây được tóm tắt từ nguồn sản phẩm. Luôn đối chiếu nhãn của đúng lô đang dùng, đặc biệt với trẻ nhỏ, thai kỳ hoặc bệnh lý nền.", "Directions are summarized from product sources. Always check the label on the actual pack, especially for young children, pregnancy, or medical conditions.")}</span></p>
      </section>
      <section class="nutrition-analysis">
        <div class="nutrition-analysis-icon">${icon("spark")}</div>
        <div><span>${text("Phân tích nhãn", "Label analysis")}</span><h3>${text("GrowthKid tóm tắt", "GrowthKid summary")}</h3><p>${product.analysis}</p><small>${text("Cập nhật", "Updated")}: ${product.updated}</small></div>
      </section>
      <section class="nutrition-sources">
        <div><h3>${text("Nguồn thông tin", "Information source")}</h3>${product.source ? `<a href="${product.source}" target="_blank" rel="noreferrer">${product.sourceLabel} ${icon("external")}</a>` : `<span class="nutrition-source-name">${product.sourceLabel}</span>`}</div>
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
    if (group === "subcategory") persistNavigation();
    else renderFilters();
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
    persistNavigation();
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
    persistNavigation();
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
