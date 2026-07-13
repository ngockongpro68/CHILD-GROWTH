(function () {
  const app = document.getElementById("app");
  const page = app ? app.dataset.page : "home";
  const defaultLanguage = "en";
  const languageOptions = [
    { code: "en", label: "English", locale: "en-US", dir: "ltr" },
    { code: "vi", label: "Tiếng Việt", locale: "vi-VN", dir: "ltr" },
    { code: "es", label: "Español", locale: "es-ES", dir: "ltr" },
    { code: "hi", label: "हिन्दी", locale: "hi-IN", dir: "ltr" },
    { code: "id", label: "Bahasa Indonesia", locale: "id-ID", dir: "ltr" },
    { code: "fr", label: "Français", locale: "fr-FR", dir: "ltr" },
    { code: "pt", label: "Português", locale: "pt-BR", dir: "ltr" },
    { code: "ar", label: "العربية", locale: "ar", dir: "rtl" },
    { code: "zh", label: "中文", locale: "zh-CN", dir: "ltr" },
    { code: "ja", label: "日本語", locale: "ja-JP", dir: "ltr" }
  ];

  const translations = {
    vi: {
      "Child Growth Calculator": "Máy tính tăng trưởng trẻ em",
      "Child Growth Calculator | GrowthKid": "Máy tính tăng trưởng trẻ em | GrowthKid",
      "BMI Calculator for Kids | GrowthKid": "Máy tính BMI cho trẻ em | GrowthKid",
      "Weight-for-age Calculator | GrowthKid": "Máy tính cân nặng theo tuổi | GrowthKid",
      "Height-for-age Calculator | GrowthKid": "Máy tính chiều cao theo tuổi | GrowthKid",
      "Head Circumference Calculator | GrowthKid": "Máy tính vòng đầu | GrowthKid",
      "WHO Growth Charts | GrowthKid": "Biểu đồ tăng trưởng WHO | GrowthKid",
      "Growth Articles | GrowthKid": "Bài viết tăng trưởng | GrowthKid",
      "About GrowthKid | GrowthKid": "Giới thiệu GrowthKid | GrowthKid",
      "Calculator": "Công cụ tính",
      "Growth Charts": "Biểu đồ tăng trưởng",
      "Articles": "Bài viết",
      "About": "Giới thiệu",
      "Language": "Ngôn ngữ",
      "Language selector": "Chọn ngôn ngữ",
      "Primary navigation": "Điều hướng chính",
      "Open menu": "Mở menu",
      "Start Calculator": "Bắt đầu tính",
      "Track Your Child's Growth Using WHO Growth Standards": "Theo dõi tăng trưởng của trẻ theo chuẩn WHO",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "Nhập số đo, tính z-score và theo dõi phát triển chỉ trong vài giây.",
      "View Growth Charts": "Xem biểu đồ tăng trưởng",
      "WHO standards": "Chuẩn WHO",
      "Private by design": "Thiết kế ưu tiên riêng tư",
      "Parent friendly": "Dễ dùng cho phụ huynh",
      "WHO-based growth assessment": "Đánh giá tăng trưởng dựa trên WHO",
      "Built for a fast parent workflow while still matching the mental model healthcare professionals expect.": "Tối ưu cho thao tác nhanh của phụ huynh nhưng vẫn giữ cách trình bày quen thuộc với nhân viên y tế.",
      "Enter measurements to calculate z-scores and percentiles.": "Nhập số đo để tính z-score và bách phân vị.",
      "Date of Birth": "Ngày sinh",
      "Sex": "Giới tính",
      "Boy": "Bé trai",
      "Girl": "Bé gái",
      "Measurement Date": "Ngày đo",
      "Weight (kg)": "Cân nặng (kg)",
      "Height (cm)": "Chiều cao (cm)",
      "Head Circumference (cm)": "Vòng đầu (cm)",
      "Optional": "Không bắt buộc",
      "Calculate Growth": "Tính tăng trưởng",
      "Demo engine uses simplified reference curves for interface validation. Production should import official WHO LMS tables.": "Bản demo dùng đường tham chiếu giản lược để kiểm thử giao diện. Bản production nên nhập bảng WHO LMS chính thức.",
      "WHO Growth Chart": "Biểu đồ tăng trưởng WHO",
      "0-60 months": "0-60 tháng",
      "Z-score": "Z-score",
      "Percentile": "Bách phân vị",
      "Status": "Trạng thái",
      "Normal": "Bình thường",
      "Monitor": "Theo dõi",
      "Consult a healthcare professional": "Nên hỏi ý kiến chuyên gia y tế",
      "Weight-for-age": "Cân nặng theo tuổi",
      "Height-for-age": "Chiều cao theo tuổi",
      "BMI-for-age": "BMI theo tuổi",
      "Head circumference": "Vòng đầu",
      "Compare weight with age-based reference curves and percentile bands.": "So sánh cân nặng với đường tham chiếu theo tuổi và các dải bách phân vị.",
      "Track height in centimeters with a current point on the chart.": "Theo dõi chiều cao theo cm cùng điểm đo hiện tại trên biểu đồ.",
      "Convert weight and height into BMI-for-age z-score context.": "Chuyển cân nặng và chiều cao thành bối cảnh BMI theo tuổi và z-score.",
      "Visualize percentile lines, z-score bands, and child measurement trends.": "Hiển thị đường bách phân vị, dải z-score và xu hướng số đo của trẻ.",
      "Calculator tools": "Các công cụ tính",
      "Each calculator has its own landing page, FAQ, WHO explanation, and internal links for organic search.": "Mỗi công cụ có landing page, FAQ, giải thích WHO và liên kết nội bộ riêng để hỗ trợ SEO.",
      "BMI Calculator for Kids": "Máy tính BMI cho trẻ em",
      "Weight-for-age Calculator": "Máy tính cân nặng theo tuổi",
      "Height-for-age Calculator": "Máy tính chiều cao theo tuổi",
      "Head Circumference Calculator": "Máy tính vòng đầu",
      "Open a focused calculator page with result cards, chart context, and parent-friendly explanations.": "Mở trang công cụ riêng với thẻ kết quả, biểu đồ và phần giải thích dễ hiểu cho phụ huynh.",
      "Recent Articles": "Bài viết mới",
      "Short, practical content designed for international search traffic.": "Nội dung ngắn, thực tế, phù hợp với lưu lượng tìm kiếm quốc tế.",
      "Growth charts": "Biểu đồ tăng trưởng",
      "How to read child growth percentiles": "Cách đọc bách phân vị tăng trưởng của trẻ",
      "A simple guide to percentile lines, z-scores, and when a trend needs closer attention.": "Hướng dẫn đơn giản về đường bách phân vị, z-score và khi nào xu hướng cần được chú ý hơn.",
      "WHO standards": "Chuẩn WHO",
      "What WHO growth standards measure": "Chuẩn tăng trưởng WHO đo những gì",
      "Understand weight-for-age, height-for-age, BMI-for-age, and why age in months matters.": "Hiểu cân nặng theo tuổi, chiều cao theo tuổi, BMI theo tuổi và vì sao tuổi theo tháng quan trọng.",
      "Parents": "Phụ huynh",
      "What to prepare before a growth check": "Cần chuẩn bị gì trước khi kiểm tra tăng trưởng",
      "Measurement tips for dates, height, weight, and follow-up conversations with a clinician.": "Mẹo ghi ngày đo, chiều cao, cân nặng và trao đổi tiếp theo với nhân viên y tế.",
      "Read article": "Đọc bài viết",
      "Calculate weight-for-age, height-for-age, BMI-for-age, and view a clean growth chart in one flow.": "Tính cân nặng theo tuổi, chiều cao theo tuổi, BMI theo tuổi và xem biểu đồ tăng trưởng trong một luồng rõ ràng.",
      "Estimate BMI-for-age z-score and percentile, then compare the result with a growth chart.": "Ước tính z-score và bách phân vị BMI theo tuổi, rồi so sánh kết quả trên biểu đồ.",
      "Check how a child's weight compares with age-based growth references.": "Kiểm tra cân nặng của trẻ so với tham chiếu tăng trưởng theo tuổi.",
      "Assess height-for-age, z-score, percentile, and growth trend in a parent-friendly layout.": "Đánh giá chiều cao theo tuổi, z-score, bách phân vị và xu hướng tăng trưởng bằng giao diện dễ dùng.",
      "Track head circumference-for-age together with other growth measurements.": "Theo dõi vòng đầu theo tuổi cùng các số đo tăng trưởng khác.",
      "WHO Growth Charts": "Biểu đồ tăng trưởng WHO",
      "View percentile curves, z-score bands, and a current measurement point in a clean chart-first layout.": "Xem đường bách phân vị, dải z-score và điểm đo hiện tại trong bố cục ưu tiên biểu đồ.",
      "SEO-ready educational content for parents searching for child growth calculators, percentiles, and WHO chart explanations.": "Nội dung giáo dục sẵn sàng cho SEO dành cho phụ huynh tìm công cụ tăng trưởng, bách phân vị và giải thích biểu đồ WHO.",
      "Understand each step of your child's growth": "Hiểu rõ hơn từng bước tăng trưởng của con",
      "GrowthKid helps turn everyday measurements into WHO-based context, so parents can follow trends, save results, and know what to discuss at the next pediatric visit.": "GrowthKid giúp chuyển các số đo hằng ngày thành thông tin dễ hiểu theo chuẩn WHO, để ba mẹ theo dõi xu hướng, lưu kết quả và biết nên trao đổi gì trong lần khám nhi tiếp theo.",
      "What GrowthKid helps with": "GrowthKid giúp bạn",
      "Enter weight, height, and measurement dates in seconds.": "Nhập cân nặng, chiều cao và ngày đo trong vài giây.",
      "See z-scores, percentiles, and plain-language status.": "Xem điểm z, bách phân vị và trạng thái bằng ngôn ngữ dễ hiểu.",
      "Follow trends instead of focusing on one measurement.": "Theo dõi xu hướng thay vì chỉ nhìn một lần đo.",
      "Save or share results when talking with a pediatrician.": "Lưu hoặc chia sẻ kết quả khi cần trao đổi với bác sĩ nhi.",
      "Social snapshot": "Ảnh chia sẻ",
      "Growth snapshot": "Ảnh tóm tắt tăng trưởng",
      "Growth Snapshot": "Tóm tắt tăng trưởng",
      "WHO-based growth check": "Đánh giá tăng trưởng dựa trên WHO",
      "Growth Curves": "Đường cong tăng trưởng",
      "Your measurement": "Điểm đo của bé",
      "Median (0)": "Trung vị (0)",
      "Measured on": "Ngày đo",
      "Age at measurement": "Tuổi khi đo",
      "Growth check-in": "Tóm tắt tăng trưởng",
      "Private, name-free growth snapshot": "Ảnh tóm tắt riêng tư, không kèm tên trẻ",
      "Child Growth": "Tăng trưởng",
      "Snapshot": "Tóm tắt",
      "Tips": "Gợi ý",
      "Your child's growth is within the normal range.": "Các chỉ số đang nằm trong khoảng bình thường theo chuẩn WHO.",
      "Review the trend and measure again consistently.": "Nên theo dõi xu hướng và đo lại định kỳ với cùng cách đo.",
      "Track trends over time.": "Theo dõi xu hướng qua nhiều lần đo.",
      "Use accurate weight and height measurements.": "Đo cân nặng và chiều cao đúng cách.",
      "Talk to a pediatrician if results change quickly.": "Hỏi bác sĩ nếu chỉ số thay đổi nhanh.",
      "Educational use only - not medical advice": "Chỉ dùng tham khảo - không thay thế tư vấn y tế",
      "Source: World Health Organization (WHO)": "Nguồn: Tổ chức Y tế Thế giới (WHO)",
      "Designed as a clean, name-free card for stories, messages, and private family sharing.": "Thiết kế gọn, không có tên trẻ, phù hợp để gửi tin nhắn, đăng story hoặc chia sẻ riêng trong gia đình.",
      "A quick growth check, made easy to share": "Một tóm tắt tăng trưởng gọn gàng, dễ chia sẻ",
      "Name-free snapshot for family updates. Educational use only.": "Ảnh tóm tắt không kèm tên trẻ. Chỉ dùng cho mục đích tham khảo.",
      "WHO-based": "Theo chuẩn WHO",
      "Child growth FAQ": "FAQ tăng trưởng trẻ em",
      "BMI calculator FAQ": "FAQ máy tính BMI",
      "Weight-for-age FAQ": "FAQ cân nặng theo tuổi",
      "Height-for-age FAQ": "FAQ chiều cao theo tuổi",
      "What are WHO Child Growth Standards?": "Chuẩn tăng trưởng trẻ em WHO là gì?",
      "They are international growth references developed from the WHO Multicentre Growth Reference Study for assessing young children's physical growth.": "Đây là bộ tham chiếu tăng trưởng quốc tế được phát triển từ nghiên cứu đa trung tâm của WHO để đánh giá tăng trưởng thể chất ở trẻ nhỏ.",
      "What does a z-score mean?": "Z-score có nghĩa là gì?",
      "A z-score describes how far a measurement is from the reference median. Values near zero are close to the median.": "Z-score cho biết số đo lệch bao xa so với trung vị tham chiếu. Giá trị gần 0 nghĩa là gần trung vị.",
      "When should parents talk to a clinician?": "Khi nào phụ huynh nên trao đổi với nhân viên y tế?",
      "A single result is only one signal. Discuss growth concerns, sudden trend changes, or extreme z-scores with a qualified healthcare professional.": "Một kết quả đơn lẻ chỉ là một tín hiệu. Hãy trao đổi các lo ngại tăng trưởng, thay đổi xu hướng đột ngột hoặc z-score quá xa với chuyên gia y tế.",
      "Concise educational copy for SEO and for parents who want context before interpreting a result.": "Nội dung giáo dục ngắn gọn cho SEO và cho phụ huynh cần bối cảnh trước khi đọc kết quả.",
      "Growth Results": "Kết quả tăng trưởng",
      "View results page": "Xem trang kết quả",
      "Overview": "Tổng quan",
      "97th percentile": "Bách phân vị 97",
      "85th percentile": "Bách phân vị 85",
      "50th percentile": "Bách phân vị 50",
      "15th percentile": "Bách phân vị 15",
      "3rd percentile": "Bách phân vị 3",
      "Your child": "Con của bạn",
      "Educational prototype. Replace demo reference curves with official WHO LMS tables before clinical use.": "Bản mẫu giáo dục. Hãy thay đường tham chiếu demo bằng bảng WHO LMS chính thức trước khi dùng lâm sàng.",
      "Chart": "Biểu đồ",
      "Weight": "Cân nặng",
      "Height": "Chiều cao",
      "BMI": "BMI",
      "Interpretation": "Diễn giải",
      "Add this measurement to calculate a z-score and percentile.": "Thêm số đo này để tính z-score và bách phân vị.",
      "interpretationMetric": "Chỉ số {metric} của trẻ hiện được đánh giá là {status}.",
      "About z-score": "Về z-score",
      "Normal: -2 to +2.": "Bình thường: từ -2 đến +2.",
      "Monitor: below -2 or above +2.": "Theo dõi: dưới -2 hoặc trên +2.",
      "Consult: below -3 or above +3.": "Cần tư vấn: dưới -3 hoặc trên +3.",
      "Learn about WHO standards": "Tìm hiểu chuẩn WHO",
      "Age (months)": "Tuổi (tháng)",
      "Measurement on": "Ngày đo",
      "year": "năm",
      "years": "năm",
      "month": "tháng",
      "months": "tháng",
      "Reference context:": "Nguồn tham chiếu:",
      "WHO Child Growth Standards": "Chuẩn tăng trưởng trẻ em WHO",
      "Child growth calculator concept for parents and healthcare professionals. Educational use only and not a substitute for medical advice.": "Ý tưởng máy tính tăng trưởng dành cho phụ huynh và nhân viên y tế. Chỉ dùng cho mục đích giáo dục, không thay thế tư vấn y khoa.",
      "Measurement date must be after date of birth.": "Ngày đo phải sau ngày sinh.",
      "This prototype supports children from birth to 60 months.": "Bản mẫu này hỗ trợ trẻ từ sơ sinh đến 60 tháng.",
      "Please enter weight and height.": "Vui lòng nhập cân nặng và chiều cao."
    },
    es: {
      "Child Growth Calculator": "Calculadora de crecimiento infantil",
      "Child Growth Calculator | GrowthKid": "Calculadora de crecimiento infantil | GrowthKid",
      "BMI Calculator for Kids | GrowthKid": "Calculadora de IMC para niños | GrowthKid",
      "Weight-for-age Calculator | GrowthKid": "Calculadora de peso para la edad | GrowthKid",
      "Height-for-age Calculator | GrowthKid": "Calculadora de talla para la edad | GrowthKid",
      "Head Circumference Calculator | GrowthKid": "Calculadora de perímetro cefálico | GrowthKid",
      "WHO Growth Charts | GrowthKid": "Gráficas de crecimiento OMS | GrowthKid",
      "Growth Articles | GrowthKid": "Artículos de crecimiento | GrowthKid",
      "About GrowthKid | GrowthKid": "Acerca de GrowthKid | GrowthKid",
      "Calculator": "Calculadora",
      "Growth Charts": "Gráficas de crecimiento",
      "Articles": "Artículos",
      "About": "Acerca de",
      "Language": "Idioma",
      "Start Calculator": "Iniciar calculadora",
      "Open menu": "Abrir menú",
      "Track Your Child's Growth Using WHO Growth Standards": "Sigue el crecimiento de tu hijo con los estándares de la OMS",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "Mide el crecimiento, calcula z-scores y monitorea el desarrollo en segundos.",
      "View Growth Charts": "Ver gráficas",
      "WHO standards": "Estándares OMS",
      "Private by design": "Privado por diseño",
      "Parent friendly": "Fácil para padres",
      "WHO-based growth assessment": "Evaluación basada en la OMS",
      "Built for a fast parent workflow while still matching the mental model healthcare professionals expect.": "Creado para un flujo rápido para padres, manteniendo la lógica que esperan los profesionales de salud.",
      "Enter measurements to calculate z-scores and percentiles.": "Ingresa medidas para calcular z-scores y percentiles.",
      "Date of Birth": "Fecha de nacimiento",
      "Sex": "Sexo",
      "Boy": "Niño",
      "Girl": "Niña",
      "Measurement Date": "Fecha de medición",
      "Weight (kg)": "Peso (kg)",
      "Height (cm)": "Talla (cm)",
      "Head Circumference (cm)": "Perímetro cefálico (cm)",
      "Optional": "Opcional",
      "Calculate Growth": "Calcular crecimiento",
      "Demo engine uses simplified reference curves for interface validation. Production should import official WHO LMS tables.": "El motor demo usa curvas simplificadas para validar la interfaz. En producción se deben importar tablas LMS oficiales de la OMS.",
      "WHO Growth Chart": "Gráfica de crecimiento OMS",
      "0-60 months": "0-60 meses",
      "Z-score": "Z-score",
      "Percentile": "Percentil",
      "Status": "Estado",
      "Normal": "Normal",
      "Monitor": "Observar",
      "Consult a healthcare professional": "Consulta a un profesional de salud",
      "Weight-for-age": "Peso para la edad",
      "Height-for-age": "Talla para la edad",
      "BMI-for-age": "IMC para la edad",
      "Head circumference": "Perímetro cefálico",
      "Compare weight with age-based reference curves and percentile bands.": "Compara el peso con curvas de referencia por edad y bandas percentilares.",
      "Track height in centimeters with a current point on the chart.": "Sigue la talla en centímetros con el punto actual en la gráfica.",
      "Convert weight and height into BMI-for-age z-score context.": "Convierte peso y talla en contexto de IMC para la edad y z-score.",
      "Visualize percentile lines, z-score bands, and child measurement trends.": "Visualiza líneas percentilares, bandas z-score y tendencias de medición.",
      "Calculator tools": "Herramientas de cálculo",
      "Each calculator has its own landing page, FAQ, WHO explanation, and internal links for organic search.": "Cada calculadora tiene su propia página, FAQ, explicación OMS y enlaces internos para búsqueda orgánica.",
      "BMI Calculator for Kids": "Calculadora de IMC para niños",
      "Weight-for-age Calculator": "Calculadora de peso para la edad",
      "Height-for-age Calculator": "Calculadora de talla para la edad",
      "Head Circumference Calculator": "Calculadora de perímetro cefálico",
      "Open a focused calculator page with result cards, chart context, and parent-friendly explanations.": "Abre una página enfocada con tarjetas de resultados, contexto gráfico y explicaciones simples.",
      "Recent Articles": "Artículos recientes",
      "Short, practical content designed for international search traffic.": "Contenido breve y práctico pensado para tráfico internacional.",
      "Growth charts": "Gráficas de crecimiento",
      "How to read child growth percentiles": "Cómo leer percentiles de crecimiento infantil",
      "A simple guide to percentile lines, z-scores, and when a trend needs closer attention.": "Guía simple sobre líneas percentilares, z-scores y cuándo observar una tendencia.",
      "WHO standards": "Estándares OMS",
      "What WHO growth standards measure": "Qué miden los estándares de crecimiento OMS",
      "Understand weight-for-age, height-for-age, BMI-for-age, and why age in months matters.": "Comprende peso, talla, IMC para la edad y por qué importan los meses.",
      "Parents": "Padres",
      "What to prepare before a growth check": "Qué preparar antes de revisar el crecimiento",
      "Measurement tips for dates, height, weight, and follow-up conversations with a clinician.": "Consejos sobre fechas, talla, peso y conversaciones con un profesional.",
      "Read article": "Leer artículo",
      "Calculate weight-for-age, height-for-age, BMI-for-age, and view a clean growth chart in one flow.": "Calcula peso, talla, IMC para la edad y ve una gráfica clara en un solo flujo.",
      "Estimate BMI-for-age z-score and percentile, then compare the result with a growth chart.": "Estima z-score y percentil de IMC para la edad y compáralo en una gráfica.",
      "Check how a child's weight compares with age-based growth references.": "Compara el peso del niño con referencias de crecimiento por edad.",
      "Assess height-for-age, z-score, percentile, and growth trend in a parent-friendly layout.": "Evalúa talla para la edad, z-score, percentil y tendencia con una interfaz clara.",
      "Track head circumference-for-age together with other growth measurements.": "Sigue perímetro cefálico para la edad junto con otras medidas.",
      "WHO Growth Charts": "Gráficas de crecimiento OMS",
      "View percentile curves, z-score bands, and a current measurement point in a clean chart-first layout.": "Ve curvas percentilares, bandas z-score y el punto actual en una vista centrada en la gráfica.",
      "SEO-ready educational content for parents searching for child growth calculators, percentiles, and WHO chart explanations.": "Contenido educativo listo para SEO sobre calculadoras, percentiles y gráficas OMS.",
      "Understand each step of your child's growth": "Entiende cada paso del crecimiento de tu hijo",
      "GrowthKid helps turn everyday measurements into WHO-based context, so parents can follow trends, save results, and know what to discuss at the next pediatric visit.": "GrowthKid convierte las mediciones diarias en contexto basado en la OMS para que las familias sigan tendencias, guarden resultados y sepan qué comentar en la próxima visita pediátrica.",
      "What GrowthKid helps with": "Cómo ayuda GrowthKid",
      "Enter weight, height, and measurement dates in seconds.": "Registra peso, talla y fecha de medición en segundos.",
      "See z-scores, percentiles, and plain-language status.": "Consulta z-scores, percentiles y un estado fácil de entender.",
      "Follow trends instead of focusing on one measurement.": "Sigue tendencias sin quedarte solo con una medición.",
      "Save or share results when talking with a pediatrician.": "Guarda o comparte resultados al hablar con el pediatra.",
      "Child growth FAQ": "FAQ de crecimiento infantil",
      "BMI calculator FAQ": "FAQ de calculadora IMC",
      "Weight-for-age FAQ": "FAQ de peso para la edad",
      "Height-for-age FAQ": "FAQ de talla para la edad",
      "What are WHO Child Growth Standards?": "¿Qué son los estándares de crecimiento infantil de la OMS?",
      "They are international growth references developed from the WHO Multicentre Growth Reference Study for assessing young children's physical growth.": "Son referencias internacionales desarrolladas a partir del estudio multicéntrico de la OMS.",
      "What does a z-score mean?": "¿Qué significa un z-score?",
      "A z-score describes how far a measurement is from the reference median. Values near zero are close to the median.": "Un z-score indica qué tan lejos está una medida de la mediana de referencia.",
      "When should parents talk to a clinician?": "¿Cuándo hablar con un profesional?",
      "A single result is only one signal. Discuss growth concerns, sudden trend changes, or extreme z-scores with a qualified healthcare professional.": "Un resultado aislado es solo una señal. Consulta dudas, cambios bruscos o z-scores extremos.",
      "Concise educational copy for SEO and for parents who want context before interpreting a result.": "Texto educativo breve para SEO y contexto antes de interpretar resultados.",
      "Growth Results": "Resultados de crecimiento",
      "View results page": "Ver página de resultados",
      "Overview": "Resumen",
      "97th percentile": "Percentil 97",
      "85th percentile": "Percentil 85",
      "50th percentile": "Percentil 50",
      "15th percentile": "Percentil 15",
      "3rd percentile": "Percentil 3",
      "Your child": "Tu hijo",
      "Educational prototype. Replace demo reference curves with official WHO LMS tables before clinical use.": "Prototipo educativo. Sustituye las curvas demo por tablas LMS oficiales antes de uso clínico.",
      "Chart": "Gráfica",
      "Weight": "Peso",
      "Height": "Talla",
      "BMI": "IMC",
      "Interpretation": "Interpretación",
      "Add this measurement to calculate a z-score and percentile.": "Agrega esta medida para calcular z-score y percentil.",
      "interpretationMetric": "El indicador {metric} está marcado como {status}.",
      "About z-score": "Acerca del z-score",
      "Normal: -2 to +2.": "Normal: -2 a +2.",
      "Monitor: below -2 or above +2.": "Observar: menor a -2 o mayor a +2.",
      "Consult: below -3 or above +3.": "Consultar: menor a -3 o mayor a +3.",
      "Learn about WHO standards": "Conocer estándares OMS",
      "Age (months)": "Edad (meses)",
      "Measurement on": "Medición el",
      "year": "año",
      "years": "años",
      "month": "mes",
      "months": "meses",
      "Reference context:": "Referencia:",
      "WHO Child Growth Standards": "Estándares de crecimiento infantil OMS",
      "Child growth calculator concept for parents and healthcare professionals. Educational use only and not a substitute for medical advice.": "Concepto de calculadora para padres y profesionales. Solo uso educativo; no sustituye consejo médico.",
      "Measurement date must be after date of birth.": "La fecha de medición debe ser posterior al nacimiento.",
      "This prototype supports children from birth to 60 months.": "Este prototipo admite niños de 0 a 60 meses.",
      "Please enter weight and height.": "Ingresa peso y talla."
    },
    hi: {
      "Child Growth Calculator": "बाल विकास कैलकुलेटर",
      "Child Growth Calculator | GrowthKid": "बाल विकास कैलकुलेटर | GrowthKid",
      "BMI Calculator for Kids | GrowthKid": "बच्चों के लिए BMI कैलकुलेटर | GrowthKid",
      "Weight-for-age Calculator | GrowthKid": "उम्र के अनुसार वजन कैलकुलेटर | GrowthKid",
      "Height-for-age Calculator | GrowthKid": "उम्र के अनुसार लंबाई कैलकुलेटर | GrowthKid",
      "Head Circumference Calculator | GrowthKid": "सिर की परिधि कैलकुलेटर | GrowthKid",
      "WHO Growth Charts | GrowthKid": "WHO विकास चार्ट | GrowthKid",
      "Growth Articles | GrowthKid": "विकास लेख | GrowthKid",
      "About GrowthKid | GrowthKid": "GrowthKid के बारे में | GrowthKid",
      "Calculator": "कैलकुलेटर",
      "Growth Charts": "विकास चार्ट",
      "Articles": "लेख",
      "About": "परिचय",
      "Language": "भाषा",
      "Start Calculator": "कैलकुलेटर शुरू करें",
      "Open menu": "मेनू खोलें",
      "Track Your Child's Growth Using WHO Growth Standards": "WHO मानकों से बच्चे की वृद्धि ट्रैक करें",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "माप दर्ज करें, z-score निकालें और विकास को सेकंडों में देखें।",
      "View Growth Charts": "विकास चार्ट देखें",
      "WHO standards": "WHO मानक",
      "Private by design": "निजता केंद्रित",
      "Parent friendly": "माता-पिता के लिए आसान",
      "WHO-based growth assessment": "WHO आधारित वृद्धि आकलन",
      "Built for a fast parent workflow while still matching the mental model healthcare professionals expect.": "तेज़ उपयोग के लिए बनाया गया, फिर भी स्वास्थ्य विशेषज्ञों की अपेक्षित संरचना रखता है।",
      "Enter measurements to calculate z-scores and percentiles.": "z-score और percentile निकालने के लिए माप दर्ज करें।",
      "Date of Birth": "जन्म तिथि",
      "Sex": "लिंग",
      "Boy": "लड़का",
      "Girl": "लड़की",
      "Measurement Date": "माप तिथि",
      "Weight (kg)": "वजन (kg)",
      "Height (cm)": "लंबाई (cm)",
      "Head Circumference (cm)": "सिर की परिधि (cm)",
      "Optional": "वैकल्पिक",
      "Calculate Growth": "वृद्धि गणना करें",
      "Demo engine uses simplified reference curves for interface validation. Production should import official WHO LMS tables.": "डेमो इंजन सरल संदर्भ वक्रों का उपयोग करता है। production में आधिकारिक WHO LMS तालिकाएं जोड़ें।",
      "WHO Growth Chart": "WHO विकास चार्ट",
      "0-60 months": "0-60 महीने",
      "Z-score": "Z-score",
      "Percentile": "Percentile",
      "Status": "स्थिति",
      "Normal": "सामान्य",
      "Monitor": "निगरानी करें",
      "Consult a healthcare professional": "स्वास्थ्य विशेषज्ञ से सलाह लें",
      "Weight-for-age": "उम्र के अनुसार वजन",
      "Height-for-age": "उम्र के अनुसार लंबाई",
      "BMI-for-age": "उम्र के अनुसार BMI",
      "Head circumference": "सिर की परिधि",
      "Compare weight with age-based reference curves and percentile bands.": "वजन की तुलना उम्र आधारित संदर्भ वक्रों और percentile bands से करें।",
      "Track height in centimeters with a current point on the chart.": "चार्ट पर वर्तमान बिंदु के साथ लंबाई सेंटीमीटर में देखें।",
      "Convert weight and height into BMI-for-age z-score context.": "वजन और लंबाई को BMI-for-age z-score संदर्भ में बदलें।",
      "Visualize percentile lines, z-score bands, and child measurement trends.": "percentile lines, z-score bands और माप की प्रवृत्ति देखें।",
      "Calculator tools": "कैलकुलेटर टूल",
      "Each calculator has its own landing page, FAQ, WHO explanation, and internal links for organic search.": "हर टूल का अपना landing page, FAQ, WHO व्याख्या और internal links हैं।",
      "BMI Calculator for Kids": "बच्चों का BMI कैलकुलेटर",
      "Weight-for-age Calculator": "उम्र के अनुसार वजन कैलकुलेटर",
      "Height-for-age Calculator": "उम्र के अनुसार लंबाई कैलकुलेटर",
      "Head Circumference Calculator": "सिर की परिधि कैलकुलेटर",
      "Open a focused calculator page with result cards, chart context, and parent-friendly explanations.": "result cards, chart context और सरल व्याख्या वाला focused calculator page खोलें।",
      "Calculate weight-for-age, height-for-age, BMI-for-age, and view a clean growth chart in one flow.": "एक ही प्रवाह में weight-for-age, height-for-age, BMI-for-age निकालें और साफ growth chart देखें।",
      "Estimate BMI-for-age z-score and percentile, then compare the result with a growth chart.": "BMI-for-age z-score और percentile का अनुमान लगाएं, फिर परिणाम को growth chart से तुलना करें।",
      "Check how a child's weight compares with age-based growth references.": "देखें कि बच्चे का वजन उम्र आधारित growth references से कैसे तुलना करता है।",
      "Assess height-for-age, z-score, percentile, and growth trend in a parent-friendly layout.": "parent-friendly layout में height-for-age, z-score, percentile और growth trend देखें।",
      "Track head circumference-for-age together with other growth measurements.": "अन्य growth measurements के साथ head circumference-for-age ट्रैक करें।",
      "WHO Growth Charts": "WHO विकास चार्ट",
      "View percentile curves, z-score bands, and a current measurement point in a clean chart-first layout.": "साफ chart-first layout में percentile curves, z-score bands और वर्तमान measurement point देखें।",
      "SEO-ready educational content for parents searching for child growth calculators, percentiles, and WHO chart explanations.": "child growth calculators, percentiles और WHO chart explanations खोजने वाले माता-पिता के लिए SEO-ready educational content।",
      "Understand each step of your child's growth": "अपने बच्चे की वृद्धि को हर माप के साथ बेहतर समझें",
      "GrowthKid helps turn everyday measurements into WHO-based context, so parents can follow trends, save results, and know what to discuss at the next pediatric visit.": "GrowthKid रोज़मर्रा के मापों को WHO-आधारित संदर्भ में बदलता है, ताकि माता-पिता रुझान देख सकें, परिणाम सहेज सकें और अगली बाल रोग विशेषज्ञ की मुलाकात में बेहतर सवाल पूछ सकें।",
      "What GrowthKid helps with": "GrowthKid किन चीज़ों में मदद करता है",
      "Enter weight, height, and measurement dates in seconds.": "वज़न, लंबाई और माप की तारीख कुछ सेकंड में दर्ज करें।",
      "See z-scores, percentiles, and plain-language status.": "z-score, percentile और आसान भाषा में स्थिति देखें।",
      "Follow trends instead of focusing on one measurement.": "सिर्फ एक माप पर नहीं, पूरी प्रवृत्ति पर ध्यान दें।",
      "Save or share results when talking with a pediatrician.": "बाल रोग विशेषज्ञ से बात करते समय परिणाम सहेजें या साझा करें।",
      "Recent Articles": "नए लेख",
      "Short, practical content designed for international search traffic.": "अंतरराष्ट्रीय search traffic के लिए छोटा और उपयोगी content।",
      "Growth charts": "विकास चार्ट",
      "How to read child growth percentiles": "बच्चों के growth percentiles कैसे पढ़ें",
      "A simple guide to percentile lines, z-scores, and when a trend needs closer attention.": "percentile lines, z-scores और trend पर ध्यान देने की सरल गाइड।",
      "WHO standards": "WHO मानक",
      "What WHO growth standards measure": "WHO growth standards क्या मापते हैं",
      "Understand weight-for-age, height-for-age, BMI-for-age, and why age in months matters.": "weight-for-age, height-for-age, BMI-for-age और महीनों में उम्र का महत्व समझें।",
      "Parents": "माता-पिता",
      "What to prepare before a growth check": "growth check से पहले क्या तैयार करें",
      "Measurement tips for dates, height, weight, and follow-up conversations with a clinician.": "तिथि, लंबाई, वजन और clinician से बातचीत के लिए माप सुझाव।",
      "Read article": "लेख पढ़ें",
      "Child growth FAQ": "बाल विकास FAQ",
      "BMI calculator FAQ": "BMI कैलकुलेटर FAQ",
      "Weight-for-age FAQ": "weight-for-age FAQ",
      "Height-for-age FAQ": "height-for-age FAQ",
      "What are WHO Child Growth Standards?": "WHO Child Growth Standards क्या हैं?",
      "They are international growth references developed from the WHO Multicentre Growth Reference Study for assessing young children's physical growth.": "ये छोटे बच्चों की physical growth का आकलन करने के लिए WHO Multicentre Growth Reference Study से बने international growth references हैं।",
      "What does a z-score mean?": "z-score का क्या मतलब है?",
      "A z-score describes how far a measurement is from the reference median. Values near zero are close to the median.": "z-score बताता है कि कोई measurement reference median से कितना दूर है। zero के आसपास का value median के करीब होता है।",
      "When should parents talk to a clinician?": "माता-पिता को clinician से कब बात करनी चाहिए?",
      "A single result is only one signal. Discuss growth concerns, sudden trend changes, or extreme z-scores with a qualified healthcare professional.": "एक result सिर्फ एक संकेत है। growth concerns, अचानक trend changes या extreme z-scores पर qualified healthcare professional से बात करें।",
      "Concise educational copy for SEO and for parents who want context before interpreting a result.": "SEO और result पढ़ने से पहले context चाहने वाले माता-पिता के लिए concise educational copy.",
      "Growth Results": "विकास परिणाम",
      "View results page": "परिणाम पेज देखें",
      "Overview": "सारांश",
      "97th percentile": "97th percentile",
      "85th percentile": "85th percentile",
      "50th percentile": "50th percentile",
      "15th percentile": "15th percentile",
      "3rd percentile": "3rd percentile",
      "Educational prototype. Replace demo reference curves with official WHO LMS tables before clinical use.": "Educational prototype. Clinical use से पहले demo reference curves को official WHO LMS tables से बदलें।",
      "Your child": "आपका बच्चा",
      "Chart": "चार्ट",
      "Weight": "वजन",
      "Height": "लंबाई",
      "BMI": "BMI",
      "Interpretation": "व्याख्या",
      "interpretationMetric": "{metric} को {status} के रूप में चिह्नित किया गया है।",
      "About z-score": "z-score के बारे में",
      "Normal: -2 to +2.": "Normal: -2 से +2.",
      "Monitor: below -2 or above +2.": "Monitor: -2 से कम या +2 से अधिक.",
      "Consult: below -3 or above +3.": "Consult: -3 से कम या +3 से अधिक.",
      "Learn about WHO standards": "WHO मानकों के बारे में जानें",
      "Age (months)": "उम्र (महीने)",
      "Measurement on": "माप तिथि",
      "year": "वर्ष",
      "years": "वर्ष",
      "month": "महीना",
      "months": "महीने",
      "Reference context:": "Reference context:",
      "WHO Child Growth Standards": "WHO Child Growth Standards",
      "Child growth calculator concept for parents and healthcare professionals. Educational use only and not a substitute for medical advice.": "माता-पिता और healthcare professionals के लिए child growth calculator concept. केवल educational use, medical advice का substitute नहीं।",
      "Measurement date must be after date of birth.": "माप तिथि जन्म तिथि के बाद होनी चाहिए।",
      "This prototype supports children from birth to 60 months.": "यह prototype जन्म से 60 महीने तक के बच्चों को support करता है।",
      "Please enter weight and height.": "कृपया वजन और लंबाई दर्ज करें।"
    },
    id: {
      "Child Growth Calculator": "Kalkulator Pertumbuhan Anak",
      "Child Growth Calculator | GrowthKid": "Kalkulator Pertumbuhan Anak | GrowthKid",
      "BMI Calculator for Kids | GrowthKid": "Kalkulator BMI Anak | GrowthKid",
      "Weight-for-age Calculator | GrowthKid": "Kalkulator Berat menurut Umur | GrowthKid",
      "Height-for-age Calculator | GrowthKid": "Kalkulator Tinggi menurut Umur | GrowthKid",
      "Head Circumference Calculator | GrowthKid": "Kalkulator Lingkar Kepala | GrowthKid",
      "WHO Growth Charts | GrowthKid": "Grafik Pertumbuhan WHO | GrowthKid",
      "Growth Articles | GrowthKid": "Artikel Pertumbuhan | GrowthKid",
      "About GrowthKid | GrowthKid": "Tentang GrowthKid | GrowthKid",
      "Calculator": "Kalkulator",
      "Growth Charts": "Grafik Pertumbuhan",
      "Articles": "Artikel",
      "About": "Tentang",
      "Language": "Bahasa",
      "Start Calculator": "Mulai Kalkulator",
      "Open menu": "Buka menu",
      "Track Your Child's Growth Using WHO Growth Standards": "Pantau Pertumbuhan Anak dengan Standar WHO",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "Ukur pertumbuhan, hitung z-score, dan pantau perkembangan dalam hitungan detik.",
      "View Growth Charts": "Lihat Grafik",
      "WHO standards": "Standar WHO",
      "Private by design": "Privasi sejak awal",
      "Parent friendly": "Mudah untuk orang tua",
      "WHO-based growth assessment": "Penilaian pertumbuhan berbasis WHO",
      "Built for a fast parent workflow while still matching the mental model healthcare professionals expect.": "Dirancang untuk alur cepat bagi orang tua, tetap sesuai dengan cara pikir tenaga kesehatan.",
      "Enter measurements to calculate z-scores and percentiles.": "Masukkan ukuran untuk menghitung z-score dan persentil.",
      "Date of Birth": "Tanggal lahir",
      "Sex": "Jenis kelamin",
      "Boy": "Laki-laki",
      "Girl": "Perempuan",
      "Measurement Date": "Tanggal pengukuran",
      "Weight (kg)": "Berat (kg)",
      "Height (cm)": "Tinggi (cm)",
      "Head Circumference (cm)": "Lingkar kepala (cm)",
      "Optional": "Opsional",
      "Calculate Growth": "Hitung Pertumbuhan",
      "WHO Growth Chart": "Grafik Pertumbuhan WHO",
      "Z-score": "Z-score",
      "Percentile": "Persentil",
      "Status": "Status",
      "Normal": "Normal",
      "Monitor": "Pantau",
      "Consult a healthcare professional": "Konsultasikan dengan tenaga kesehatan",
      "Weight-for-age": "Berat menurut umur",
      "Height-for-age": "Tinggi menurut umur",
      "BMI-for-age": "BMI menurut umur",
      "Head circumference": "Lingkar kepala",
      "Compare weight with age-based reference curves and percentile bands.": "Bandingkan berat dengan kurva referensi menurut umur dan rentang persentil.",
      "Track height in centimeters with a current point on the chart.": "Pantau tinggi dalam sentimeter dengan titik pengukuran saat ini di grafik.",
      "Convert weight and height into BMI-for-age z-score context.": "Ubah berat dan tinggi menjadi konteks BMI menurut umur dan z-score.",
      "Visualize percentile lines, z-score bands, and child measurement trends.": "Visualisasikan garis persentil, rentang z-score, dan tren pengukuran anak.",
      "Calculator tools": "Alat kalkulator",
      "Each calculator has its own landing page, FAQ, WHO explanation, and internal links for organic search.": "Setiap kalkulator memiliki landing page, FAQ, penjelasan WHO, dan tautan internal untuk pencarian organik.",
      "BMI Calculator for Kids": "Kalkulator BMI Anak",
      "Weight-for-age Calculator": "Kalkulator Berat menurut Umur",
      "Height-for-age Calculator": "Kalkulator Tinggi menurut Umur",
      "Head Circumference Calculator": "Kalkulator Lingkar Kepala",
      "Open a focused calculator page with result cards, chart context, and parent-friendly explanations.": "Buka halaman kalkulator khusus dengan kartu hasil, konteks grafik, dan penjelasan yang mudah dipahami orang tua.",
      "Recent Articles": "Artikel terbaru",
      "Short, practical content designed for international search traffic.": "Konten singkat dan praktis untuk trafik pencarian internasional.",
      "Growth charts": "Grafik pertumbuhan",
      "How to read child growth percentiles": "Cara membaca persentil pertumbuhan anak",
      "A simple guide to percentile lines, z-scores, and when a trend needs closer attention.": "Panduan sederhana tentang garis persentil, z-score, dan kapan tren perlu diperhatikan.",
      "WHO standards": "Standar WHO",
      "What WHO growth standards measure": "Apa yang diukur oleh standar pertumbuhan WHO",
      "Understand weight-for-age, height-for-age, BMI-for-age, and why age in months matters.": "Pahami berat menurut umur, tinggi menurut umur, BMI menurut umur, dan pentingnya usia dalam bulan.",
      "Parents": "Orang tua",
      "What to prepare before a growth check": "Apa yang perlu disiapkan sebelum pemeriksaan pertumbuhan",
      "Measurement tips for dates, height, weight, and follow-up conversations with a clinician.": "Tips pengukuran untuk tanggal, tinggi, berat, dan diskusi lanjutan dengan tenaga kesehatan.",
      "Read article": "Baca artikel",
      "Calculate weight-for-age, height-for-age, BMI-for-age, and view a clean growth chart in one flow.": "Hitung berat, tinggi, BMI menurut umur, lalu lihat grafik pertumbuhan yang rapi dalam satu alur.",
      "Estimate BMI-for-age z-score and percentile, then compare the result with a growth chart.": "Perkirakan z-score dan persentil BMI menurut umur, lalu bandingkan hasilnya dengan grafik pertumbuhan.",
      "Check how a child's weight compares with age-based growth references.": "Periksa bagaimana berat anak dibandingkan dengan referensi pertumbuhan menurut umur.",
      "Assess height-for-age, z-score, percentile, and growth trend in a parent-friendly layout.": "Nilai tinggi menurut umur, z-score, persentil, dan tren pertumbuhan dengan tampilan yang mudah untuk orang tua.",
      "Track head circumference-for-age together with other growth measurements.": "Pantau lingkar kepala menurut umur bersama ukuran pertumbuhan lainnya.",
      "WHO Growth Charts": "Grafik Pertumbuhan WHO",
      "View percentile curves, z-score bands, and a current measurement point in a clean chart-first layout.": "Lihat kurva persentil, rentang z-score, dan titik pengukuran saat ini dalam tampilan yang mengutamakan grafik.",
      "SEO-ready educational content for parents searching for child growth calculators, percentiles, and WHO chart explanations.": "Konten edukasi siap SEO untuk orang tua yang mencari kalkulator pertumbuhan, persentil, dan penjelasan grafik WHO.",
      "Understand each step of your child's growth": "Pahami setiap langkah pertumbuhan anak",
      "GrowthKid helps turn everyday measurements into WHO-based context, so parents can follow trends, save results, and know what to discuss at the next pediatric visit.": "GrowthKid mengubah pengukuran harian menjadi konteks berbasis WHO, sehingga orang tua bisa melihat tren, menyimpan hasil, dan tahu apa yang perlu dibahas saat konsultasi anak berikutnya.",
      "What GrowthKid helps with": "Yang dibantu oleh GrowthKid",
      "Enter weight, height, and measurement dates in seconds.": "Masukkan berat, tinggi, dan tanggal pengukuran dalam hitungan detik.",
      "See z-scores, percentiles, and plain-language status.": "Lihat z-score, persentil, dan status dengan bahasa yang mudah dipahami.",
      "Follow trends instead of focusing on one measurement.": "Ikuti tren, bukan hanya satu hasil pengukuran.",
      "Save or share results when talking with a pediatrician.": "Simpan atau bagikan hasil saat berdiskusi dengan dokter anak.",
      "Child growth FAQ": "FAQ pertumbuhan anak",
      "BMI calculator FAQ": "FAQ kalkulator BMI",
      "Weight-for-age FAQ": "FAQ berat menurut umur",
      "Height-for-age FAQ": "FAQ tinggi menurut umur",
      "What are WHO Child Growth Standards?": "Apa itu Standar Pertumbuhan Anak WHO?",
      "They are international growth references developed from the WHO Multicentre Growth Reference Study for assessing young children's physical growth.": "Ini adalah referensi pertumbuhan internasional dari studi multisenter WHO untuk menilai pertumbuhan fisik anak kecil.",
      "What does a z-score mean?": "Apa arti z-score?",
      "A z-score describes how far a measurement is from the reference median. Values near zero are close to the median.": "Z-score menunjukkan seberapa jauh ukuran dari median referensi. Nilai mendekati nol berarti dekat dengan median.",
      "When should parents talk to a clinician?": "Kapan orang tua perlu berbicara dengan tenaga kesehatan?",
      "A single result is only one signal. Discuss growth concerns, sudden trend changes, or extreme z-scores with a qualified healthcare professional.": "Satu hasil hanya satu sinyal. Diskusikan kekhawatiran, perubahan tren mendadak, atau z-score ekstrem dengan tenaga kesehatan.",
      "Concise educational copy for SEO and for parents who want context before interpreting a result.": "Konten edukasi singkat untuk SEO dan untuk orang tua yang membutuhkan konteks sebelum membaca hasil.",
      "Growth Results": "Hasil Pertumbuhan",
      "View results page": "Lihat halaman hasil",
      "Overview": "Ringkasan",
      "97th percentile": "Persentil ke-97",
      "85th percentile": "Persentil ke-85",
      "50th percentile": "Persentil ke-50",
      "15th percentile": "Persentil ke-15",
      "3rd percentile": "Persentil ke-3",
      "Your child": "Anak Anda",
      "Educational prototype. Replace demo reference curves with official WHO LMS tables before clinical use.": "Prototipe edukasi. Ganti kurva referensi demo dengan tabel LMS resmi WHO sebelum digunakan secara klinis.",
      "Chart": "Grafik",
      "Weight": "Berat",
      "Height": "Tinggi",
      "BMI": "BMI",
      "Interpretation": "Interpretasi",
      "interpretationMetric": "{metric} anak Anda saat ini dinilai {status}.",
      "About z-score": "Tentang z-score",
      "Normal: -2 to +2.": "Normal: -2 sampai +2.",
      "Monitor: below -2 or above +2.": "Pantau: di bawah -2 atau di atas +2.",
      "Consult: below -3 or above +3.": "Konsultasi: di bawah -3 atau di atas +3.",
      "Learn about WHO standards": "Pelajari standar WHO",
      "Age (months)": "Usia (bulan)",
      "Measurement on": "Pengukuran pada",
      "year": "tahun",
      "years": "tahun",
      "month": "bulan",
      "months": "bulan",
      "Reference context:": "Referensi:",
      "WHO Child Growth Standards": "Standar Pertumbuhan Anak WHO",
      "Child growth calculator concept for parents and healthcare professionals. Educational use only and not a substitute for medical advice.": "Konsep kalkulator pertumbuhan untuk orang tua dan tenaga kesehatan. Hanya untuk edukasi, bukan pengganti nasihat medis.",
      "Measurement date must be after date of birth.": "Tanggal pengukuran harus setelah tanggal lahir.",
      "This prototype supports children from birth to 60 months.": "Prototipe ini mendukung anak dari lahir hingga 60 bulan.",
      "Please enter weight and height.": "Masukkan berat dan tinggi."
    },
    fr: {
      "Child Growth Calculator": "Calculateur de croissance enfant",
      "Child Growth Calculator | GrowthKid": "Calculateur de croissance enfant | GrowthKid",
      "Calculator": "Calculateur",
      "Growth Charts": "Courbes de croissance",
      "Articles": "Articles",
      "About": "À propos",
      "Language": "Langue",
      "Start Calculator": "Démarrer",
      "Track Your Child's Growth Using WHO Growth Standards": "Suivez la croissance de votre enfant avec les standards OMS",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "Mesurez la croissance, calculez les z-scores et suivez le développement en quelques secondes.",
      "View Growth Charts": "Voir les courbes",
      "WHO standards": "Standards OMS",
      "Private by design": "Confidentiel par conception",
      "Parent friendly": "Simple pour les parents",
      "WHO-based growth assessment": "Évaluation basée sur l'OMS",
      "Enter measurements to calculate z-scores and percentiles.": "Saisissez les mesures pour calculer z-scores et percentiles.",
      "Date of Birth": "Date de naissance",
      "Sex": "Sexe",
      "Boy": "Garçon",
      "Girl": "Fille",
      "Measurement Date": "Date de mesure",
      "Weight (kg)": "Poids (kg)",
      "Height (cm)": "Taille (cm)",
      "Head Circumference (cm)": "Périmètre crânien (cm)",
      "Optional": "Optionnel",
      "Calculate Growth": "Calculer",
      "WHO Growth Chart": "Courbe de croissance OMS",
      "Z-score": "Z-score",
      "Percentile": "Percentile",
      "Status": "Statut",
      "Normal": "Normal",
      "Monitor": "Surveiller",
      "Consult a healthcare professional": "Consulter un professionnel de santé",
      "Weight-for-age": "Poids pour l'âge",
      "Height-for-age": "Taille pour l'âge",
      "BMI-for-age": "IMC pour l'âge",
      "Head circumference": "Périmètre crânien",
      "Calculator tools": "Outils de calcul",
      "Recent Articles": "Articles récents",
      "Read article": "Lire l'article",
      "Growth Results": "Résultats de croissance",
      "View results page": "Voir la page résultats",
      "Overview": "Aperçu",
      "Your child": "Votre enfant",
      "Chart": "Courbe",
      "Weight": "Poids",
      "Height": "Taille",
      "BMI": "IMC",
      "Interpretation": "Interprétation",
      "interpretationMetric": "Le résultat {metric} est actuellement classé {status}.",
      "About z-score": "À propos du z-score",
      "Learn about WHO standards": "Découvrir les standards OMS",
      "Age (months)": "Âge (mois)",
      "Measurement on": "Mesure le",
      "year": "an",
      "years": "ans",
      "month": "mois",
      "months": "mois"
    },
    pt: {
      "Child Growth Calculator": "Calculadora de crescimento infantil",
      "Child Growth Calculator | GrowthKid": "Calculadora de crescimento infantil | GrowthKid",
      "Calculator": "Calculadora",
      "Growth Charts": "Gráficos de crescimento",
      "Articles": "Artigos",
      "About": "Sobre",
      "Language": "Idioma",
      "Start Calculator": "Iniciar calculadora",
      "Track Your Child's Growth Using WHO Growth Standards": "Acompanhe o crescimento da criança com padrões da OMS",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "Meça o crescimento, calcule z-scores e acompanhe o desenvolvimento em segundos.",
      "View Growth Charts": "Ver gráficos",
      "WHO standards": "Padrões OMS",
      "Private by design": "Privado por design",
      "Parent friendly": "Fácil para pais",
      "WHO-based growth assessment": "Avaliação baseada na OMS",
      "Enter measurements to calculate z-scores and percentiles.": "Insira medidas para calcular z-scores e percentis.",
      "Date of Birth": "Data de nascimento",
      "Sex": "Sexo",
      "Boy": "Menino",
      "Girl": "Menina",
      "Measurement Date": "Data da medição",
      "Weight (kg)": "Peso (kg)",
      "Height (cm)": "Altura (cm)",
      "Head Circumference (cm)": "Perímetro cefálico (cm)",
      "Optional": "Opcional",
      "Calculate Growth": "Calcular crescimento",
      "WHO Growth Chart": "Gráfico de crescimento OMS",
      "Z-score": "Z-score",
      "Percentile": "Percentil",
      "Status": "Status",
      "Normal": "Normal",
      "Monitor": "Monitorar",
      "Consult a healthcare professional": "Consulte um profissional de saúde",
      "Weight-for-age": "Peso para idade",
      "Height-for-age": "Altura para idade",
      "BMI-for-age": "IMC para idade",
      "Head circumference": "Perímetro cefálico",
      "Recent Articles": "Artigos recentes",
      "Read article": "Ler artigo",
      "Growth Results": "Resultados de crescimento",
      "Overview": "Visão geral",
      "Your child": "Sua criança",
      "Chart": "Gráfico",
      "Weight": "Peso",
      "Height": "Altura",
      "BMI": "IMC",
      "Interpretation": "Interpretação",
      "interpretationMetric": "O indicador {metric} está marcado como {status}.",
      "About z-score": "Sobre z-score",
      "Learn about WHO standards": "Saiba sobre os padrões OMS",
      "Age (months)": "Idade (meses)",
      "Measurement on": "Medição em",
      "year": "ano",
      "years": "anos",
      "month": "mês",
      "months": "meses"
    },
    ar: {
      "Child Growth Calculator": "حاسبة نمو الطفل",
      "Child Growth Calculator | GrowthKid": "حاسبة نمو الطفل | GrowthKid",
      "Calculator": "الحاسبة",
      "Growth Charts": "مخططات النمو",
      "Articles": "المقالات",
      "About": "حول",
      "Language": "اللغة",
      "Start Calculator": "ابدأ الحاسبة",
      "Track Your Child's Growth Using WHO Growth Standards": "تتبع نمو طفلك باستخدام معايير منظمة الصحة العالمية",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "أدخل القياسات واحسب z-score وتابع النمو خلال ثوان.",
      "View Growth Charts": "عرض المخططات",
      "WHO standards": "معايير WHO",
      "Private by design": "خصوصية منذ التصميم",
      "Parent friendly": "سهل للوالدين",
      "WHO-based growth assessment": "تقييم نمو مبني على WHO",
      "Date of Birth": "تاريخ الميلاد",
      "Sex": "الجنس",
      "Boy": "ذكر",
      "Girl": "أنثى",
      "Measurement Date": "تاريخ القياس",
      "Weight (kg)": "الوزن (كغ)",
      "Height (cm)": "الطول (سم)",
      "Head Circumference (cm)": "محيط الرأس (سم)",
      "Optional": "اختياري",
      "Calculate Growth": "احسب النمو",
      "Normal": "طبيعي",
      "Monitor": "راقب",
      "Consult a healthcare professional": "استشر أخصائي رعاية صحية",
      "Weight-for-age": "الوزن حسب العمر",
      "Height-for-age": "الطول حسب العمر",
      "BMI-for-age": "BMI حسب العمر",
      "Growth Results": "نتائج النمو",
      "Overview": "نظرة عامة",
      "Your child": "طفلك",
      "Chart": "مخطط",
      "Weight": "الوزن",
      "Height": "الطول",
      "BMI": "BMI",
      "Interpretation": "التفسير",
      "interpretationMetric": "مؤشر {metric} مصنف حاليا كـ {status}.",
      "Age (months)": "العمر (بالأشهر)",
      "Measurement on": "القياس في",
      "year": "سنة",
      "years": "سنوات",
      "month": "شهر",
      "months": "أشهر"
    },
    zh: {
      "Child Growth Calculator": "儿童生长计算器",
      "Child Growth Calculator | GrowthKid": "儿童生长计算器 | GrowthKid",
      "Calculator": "计算器",
      "Growth Charts": "生长曲线",
      "Articles": "文章",
      "About": "关于",
      "Language": "语言",
      "Start Calculator": "开始计算",
      "Track Your Child's Growth Using WHO Growth Standards": "使用 WHO 标准追踪孩子生长",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "输入测量值，快速计算 z-score 并观察发育情况。",
      "View Growth Charts": "查看生长曲线",
      "WHO standards": "WHO 标准",
      "Private by design": "默认保护隐私",
      "Parent friendly": "适合家长使用",
      "WHO-based growth assessment": "基于 WHO 的生长评估",
      "Date of Birth": "出生日期",
      "Sex": "性别",
      "Boy": "男孩",
      "Girl": "女孩",
      "Measurement Date": "测量日期",
      "Weight (kg)": "体重 (kg)",
      "Height (cm)": "身高 (cm)",
      "Head Circumference (cm)": "头围 (cm)",
      "Optional": "可选",
      "Calculate Growth": "计算生长",
      "Normal": "正常",
      "Monitor": "观察",
      "Consult a healthcare professional": "咨询医疗专业人员",
      "Weight-for-age": "年龄别体重",
      "Height-for-age": "年龄别身高",
      "BMI-for-age": "年龄别 BMI",
      "Growth Results": "生长结果",
      "Overview": "概览",
      "Your child": "你的孩子",
      "Chart": "图表",
      "Weight": "体重",
      "Height": "身高",
      "BMI": "BMI",
      "Interpretation": "解读",
      "interpretationMetric": "孩子的 {metric} 当前为 {status}。",
      "Age (months)": "年龄（月）",
      "Measurement on": "测量日期",
      "year": "岁",
      "years": "岁",
      "month": "个月",
      "months": "个月"
    },
    ja: {
      "Child Growth Calculator": "子どもの成長計算機",
      "Child Growth Calculator | GrowthKid": "子どもの成長計算機 | GrowthKid",
      "Calculator": "計算機",
      "Growth Charts": "成長曲線",
      "Articles": "記事",
      "About": "概要",
      "Language": "言語",
      "Start Calculator": "計算を開始",
      "Track Your Child's Growth Using WHO Growth Standards": "WHO基準で子どもの成長を確認",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "測定値を入力し、z-score と発達状況をすばやく確認できます。",
      "View Growth Charts": "成長曲線を見る",
      "WHO standards": "WHO基準",
      "Private by design": "プライバシー重視",
      "Parent friendly": "保護者にやさしい",
      "WHO-based growth assessment": "WHOに基づく成長評価",
      "Date of Birth": "生年月日",
      "Sex": "性別",
      "Boy": "男の子",
      "Girl": "女の子",
      "Measurement Date": "測定日",
      "Weight (kg)": "体重 (kg)",
      "Height (cm)": "身長 (cm)",
      "Head Circumference (cm)": "頭囲 (cm)",
      "Optional": "任意",
      "Calculate Growth": "成長を計算",
      "Normal": "正常",
      "Monitor": "経過観察",
      "Consult a healthcare professional": "医療専門家に相談",
      "Weight-for-age": "年齢別体重",
      "Height-for-age": "年齢別身長",
      "BMI-for-age": "年齢別BMI",
      "Growth Results": "成長結果",
      "Overview": "概要",
      "Your child": "お子さま",
      "Chart": "チャート",
      "Weight": "体重",
      "Height": "身長",
      "BMI": "BMI",
      "Interpretation": "解釈",
      "interpretationMetric": "{metric} は現在 {status} と判定されています。",
      "Age (months)": "月齢",
      "Measurement on": "測定日",
      "year": "歳",
      "years": "歳",
      "month": "か月",
      "months": "か月"
    }
  };

  const supplementalTranslations = {
    vi: {
      "Methodology": "Phương pháp tính",
      "Privacy": "Quyền riêng tư",
      "Medical Disclaimer": "Lưu ý y khoa",
      "Terms": "Điều khoản",
      "Methodology | GrowthKid": "Phương pháp tính | GrowthKid",
      "Privacy | GrowthKid": "Quyền riêng tư | GrowthKid",
      "Medical Disclaimer | GrowthKid": "Lưu ý y khoa | GrowthKid",
      "Terms | GrowthKid": "Điều khoản | GrowthKid",
      "Download report": "Tải báo cáo",
      "Measurements": "Số đo",
      "Age": "Tuổi",
      "Not entered": "Chưa nhập",
      "GrowthKid Growth Report": "Báo cáo tăng trưởng GrowthKid",
      "Educational use only. This report is not medical advice and does not replace a healthcare professional.": "Chỉ dùng cho mục đích giáo dục. Báo cáo này không phải tư vấn y khoa và không thay thế chuyên gia y tế.",
      "WHO reference": "Tham chiếu WHO",
      "Designed around WHO Child Growth Standards and z-score interpretation.": "Thiết kế dựa trên chuẩn tăng trưởng trẻ em WHO và cách diễn giải z-score.",
      "No signup": "Không cần đăng ký",
      "Parents can check growth without creating an account.": "Phụ huynh có thể kiểm tra tăng trưởng mà không cần tạo tài khoản.",
      "Local first": "Ưu tiên lưu trên thiết bị",
      "Measurements stay in the browser unless the user chooses to download them.": "Số đo được giữ trong trình duyệt trừ khi người dùng chọn tải xuống.",
      "Educational": "Giáo dục",
      "Clear medical disclaimers keep the tool supportive, not diagnostic.": "Lưu ý y khoa rõ ràng giúp công cụ mang tính hỗ trợ, không phải chẩn đoán.",
      "How this calculator works": "Công cụ này hoạt động như thế nào",
      "GrowthKid keeps the calculation flow transparent so parents understand what each input changes.": "GrowthKid trình bày quy trình tính rõ ràng để phụ huynh hiểu mỗi dữ liệu nhập ảnh hưởng ra sao.",
      "Data source and methodology": "Nguồn dữ liệu và phương pháp tính",
      "Medical disclaimer": "Lưu ý y khoa",
      "Age in months": "Tuổi theo tháng",
      "The calculator converts date of birth and measurement date into age in months.": "Công cụ chuyển ngày sinh và ngày đo thành tuổi theo tháng.",
      "Sex-specific curves": "Đường chuẩn theo giới tính",
      "Growth references differ for boys and girls, so sex is part of the calculation.": "Tham chiếu tăng trưởng khác nhau giữa bé trai và bé gái, nên giới tính là một phần của phép tính.",
      "Z-score estimate": "Ước tính z-score",
      "A z-score estimates how far a measurement is from the reference median.": "Z-score ước tính số đo lệch bao xa so với trung vị tham chiếu.",
      "Percentile view": "Hiển thị bách phân vị",
      "Percentiles make the result easier for parents to compare with chart lines.": "Bách phân vị giúp phụ huynh dễ so sánh kết quả với các đường trên biểu đồ.",
      "Measurement guide": "Hướng dẫn đo",
      "Measure carefully before interpreting growth": "Đo cẩn thận trước khi diễn giải tăng trưởng",
      "Small measurement errors can move a child across percentile lines, especially for infants and toddlers.": "Sai số nhỏ khi đo có thể làm trẻ chuyển qua đường bách phân vị khác, nhất là với trẻ sơ sinh và trẻ nhỏ.",
      "Use a recent and accurate measurement date.": "Dùng ngày đo gần đây và chính xác.",
      "Weigh the child without heavy clothing or shoes.": "Cân trẻ khi không mặc quần áo nặng hoặc mang giày.",
      "Measure length or height on a flat surface with the child properly positioned.": "Đo chiều dài hoặc chiều cao trên bề mặt phẳng và đặt trẻ đúng tư thế.",
      "Repeat measurements if a result looks very different from the child's usual trend.": "Đo lại nếu kết quả khác nhiều so với xu hướng thường thấy của trẻ.",
      "Talk to a pediatrician for growth concerns, sudden changes, or extreme z-scores.": "Trao đổi với bác sĩ nhi nếu có lo ngại, thay đổi đột ngột hoặc z-score quá xa.",
      "Growth education": "Kiến thức tăng trưởng",
      "What parents can learn from a child growth calculator": "Phụ huynh có thể học gì từ công cụ tính tăng trưởng",
      "A child growth calculator helps organize measurements by age and sex, then turns them into easier-to-read indicators.": "Công cụ tính tăng trưởng giúp sắp xếp số đo theo tuổi và giới tính, rồi chuyển thành các chỉ số dễ đọc hơn.",
      "Weight-for-age can flag broad growth patterns.": "Cân nặng theo tuổi có thể gợi ý xu hướng tăng trưởng tổng quát.",
      "Height-for-age helps monitor linear growth.": "Chiều cao theo tuổi giúp theo dõi tăng trưởng chiều dài/chiều cao.",
      "BMI-for-age adds context when both weight and height are available.": "BMI theo tuổi bổ sung bối cảnh khi có cả cân nặng và chiều cao.",
      "What BMI-for-age means": "BMI theo tuổi có nghĩa là gì",
      "BMI-for-age compares body mass index with children of the same age and sex rather than using adult BMI ranges.": "BMI theo tuổi so sánh chỉ số BMI với trẻ cùng tuổi và giới tính, thay vì dùng khoảng BMI của người lớn.",
      "BMI is calculated from weight and height.": "BMI được tính từ cân nặng và chiều cao.",
      "Age and sex change the interpretation.": "Tuổi và giới tính làm thay đổi cách diễn giải.",
      "A pediatrician should review persistent high or low results.": "Bác sĩ nhi nên xem xét các kết quả cao hoặc thấp kéo dài.",
      "What weight-for-age means": "Cân nặng theo tuổi có nghĩa là gì",
      "Weight-for-age compares a child's weight with age-based reference values and is most useful when tracked over time.": "Cân nặng theo tuổi so sánh cân nặng của trẻ với giá trị tham chiếu theo tuổi và hữu ích nhất khi theo dõi theo thời gian.",
      "One measurement is a snapshot.": "Một lần đo chỉ là ảnh chụp tại một thời điểm.",
      "Trends are more useful than a single point.": "Xu hướng hữu ích hơn một điểm đo đơn lẻ.",
      "Recent illness or measurement error can affect the result.": "Bệnh gần đây hoặc sai số đo có thể ảnh hưởng kết quả.",
      "What height-for-age means": "Chiều cao theo tuổi có nghĩa là gì",
      "Height-for-age helps show whether linear growth is tracking near expected reference curves.": "Chiều cao theo tuổi giúp xem tăng trưởng chiều cao có bám gần các đường tham chiếu kỳ vọng không.",
      "Use accurate height or length technique.": "Dùng kỹ thuật đo chiều cao hoặc chiều dài chính xác.",
      "Review trends across several visits.": "Xem xu hướng qua nhiều lần đo.",
      "Discuss sudden changes or very low z-scores with a clinician.": "Trao đổi với nhân viên y tế nếu có thay đổi đột ngột hoặc z-score rất thấp.",
      "What head circumference-for-age means": "Vòng đầu theo tuổi có nghĩa là gì",
      "Head circumference is commonly monitored in infancy and early childhood as one part of development tracking.": "Vòng đầu thường được theo dõi ở trẻ sơ sinh và trẻ nhỏ như một phần của việc theo dõi phát triển.",
      "Use a non-stretch measuring tape.": "Dùng thước dây không co giãn.",
      "Measure the widest part of the head.": "Đo vòng rộng nhất của đầu.",
      "Follow up with a clinician if the trend changes quickly.": "Trao đổi với nhân viên y tế nếu xu hướng thay đổi nhanh.",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "Kết quả này nằm trong khoảng thường gặp theo tuổi và giới tính. Hãy tiếp tục theo dõi tăng trưởng theo thời gian.",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "Kết quả này nằm ngoài khoảng thường gặp. Hãy kiểm tra lại số đo và theo dõi xu hướng theo thời gian.",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "Kết quả này cách xa khoảng tham chiếu. Nên trao đổi với chuyên gia y tế.",
      "Data source and growth methodology": "Nguồn dữ liệu và phương pháp tăng trưởng",
      "A transparent explanation of how GrowthKid turns measurements into z-scores, percentiles, and chart points.": "Giải thích minh bạch cách GrowthKid chuyển số đo thành z-score, bách phân vị và điểm trên biểu đồ.",
      "What this covers": "Nội dung gồm",
      "WHO reference context": "Bối cảnh tham chiếu WHO",
      "Age and sex inputs": "Dữ liệu tuổi và giới tính",
      "Z-score interpretation": "Diễn giải z-score",
      "Production data requirements": "Yêu cầu dữ liệu khi phát hành",
      "Use the calculator": "Dùng công cụ tính",
      "Start with a measurement, then review result cards and chart context together.": "Bắt đầu bằng số đo, sau đó xem thẻ kết quả cùng bối cảnh biểu đồ.",
      "Reference context": "Bối cảnh tham chiếu",
      "GrowthKid is designed around the WHO Child Growth Standards framework for young children. The interface explains weight-for-age, height-for-age, BMI-for-age, head circumference, z-scores, percentiles, and visual chart context.": "GrowthKid được thiết kế quanh khung chuẩn tăng trưởng trẻ em WHO cho trẻ nhỏ. Giao diện giải thích cân nặng theo tuổi, chiều cao theo tuổi, BMI theo tuổi, vòng đầu, z-score, bách phân vị và bối cảnh biểu đồ.",
      "Calculation approach": "Cách tính",
      "The current prototype uses simplified reference curves to validate the product experience. A production healthcare calculator should import official WHO LMS tables and calculate z-scores from those tables for each age, sex, and indicator.": "Bản mẫu hiện dùng đường tham chiếu giản lược để kiểm tra trải nghiệm sản phẩm. Bản dùng trong y tế nên nhập bảng WHO LMS chính thức và tính z-score từ các bảng đó cho từng tuổi, giới tính và chỉ số.",
      "Z-scores and percentiles": "Z-score và bách phân vị",
      "Percentiles convert that result into a chart-friendly format that many parents recognize.": "Bách phân vị chuyển kết quả thành dạng dễ xem trên biểu đồ mà nhiều phụ huynh quen thuộc.",
      "Clinical interpretation": "Diễn giải lâm sàng",
      "A single result should not be treated as a diagnosis. Trends, measurement quality, health history, and clinician review matter when interpreting growth.": "Một kết quả đơn lẻ không nên được xem là chẩn đoán. Xu hướng, chất lượng đo, tiền sử sức khỏe và đánh giá của nhân viên y tế đều quan trọng khi diễn giải tăng trưởng.",
      "Privacy-first growth checks": "Kiểm tra tăng trưởng ưu tiên quyền riêng tư",
      "GrowthKid is structured as a local-first calculator experience for parents who want quick answers without creating an account.": "GrowthKid được xây dựng như trải nghiệm tính toán ưu tiên lưu trên thiết bị cho phụ huynh muốn kiểm tra nhanh mà không cần tài khoản.",
      "Privacy principles": "Nguyên tắc quyền riêng tư",
      "No signup required": "Không cần đăng ký",
      "Local browser storage": "Lưu trong trình duyệt",
      "No selling child data": "Không bán dữ liệu trẻ em",
      "Clear disclosure before launch": "Công bố rõ ràng trước khi phát hành",
      "Related pages": "Trang liên quan",
      "Review the methodology and disclaimer before using any result for health decisions.": "Hãy xem phương pháp tính và lưu ý y khoa trước khi dùng kết quả cho quyết định sức khỏe.",
      "Local-first calculator": "Công cụ ưu tiên lưu cục bộ",
      "This prototype stores the most recent result in the browser so the chart and report can be updated on the same device. It does not require an account.": "Bản mẫu này lưu kết quả gần nhất trong trình duyệt để biểu đồ và báo cáo có thể cập nhật trên cùng thiết bị. Công cụ không yêu cầu tài khoản.",
      "Measurements entered into the calculator are sensitive. Before a production launch, any analytics, storage, or sharing behavior should be clearly disclosed and minimized.": "Số đo nhập vào công cụ là dữ liệu nhạy cảm. Trước khi phát hành, mọi phân tích, lưu trữ hoặc chia sẻ dữ liệu cần được công bố rõ và giảm tối đa.",
      "Downloads": "Tải xuống",
      "Downloaded reports are generated on the device from the visible result. Users should store or share those files carefully.": "Báo cáo tải xuống được tạo trên thiết bị từ kết quả đang hiển thị. Người dùng nên lưu hoặc chia sẻ tệp này cẩn thận.",
      "Children's privacy": "Quyền riêng tư của trẻ em",
      "A public product for children should avoid unnecessary personal data collection and should be reviewed against the privacy rules that apply in each launch market.": "Sản phẩm công khai cho trẻ em nên tránh thu thập dữ liệu cá nhân không cần thiết và cần được rà soát theo quy định quyền riêng tư ở từng thị trường.",
      "Educational tool, not medical advice": "Công cụ giáo dục, không phải tư vấn y khoa",
      "GrowthKid helps explain growth indicators, but it does not diagnose, treat, or replace a qualified healthcare professional.": "GrowthKid giúp giải thích các chỉ số tăng trưởng, nhưng không chẩn đoán, điều trị hoặc thay thế chuyên gia y tế đủ chuyên môn.",
      "Use responsibly": "Sử dụng có trách nhiệm",
      "Check measurement accuracy": "Kiểm tra độ chính xác của số đo",
      "Review trends over time": "Xem xu hướng theo thời gian",
      "Discuss concerns with a clinician": "Trao đổi lo ngại với nhân viên y tế",
      "Do not use for emergencies": "Không dùng cho tình huống khẩn cấp",
      "Helpful context": "Bối cảnh hữu ích",
      "Read the methodology page to understand how the prototype calculates and displays growth indicators.": "Đọc trang phương pháp tính để hiểu bản mẫu tính và hiển thị các chỉ số tăng trưởng như thế nào.",
      "No diagnosis": "Không chẩn đoán",
      "GrowthKid is for general education and product demonstration. It cannot diagnose malnutrition, obesity, growth delay, illness, or any medical condition.": "GrowthKid dành cho giáo dục chung và trình diễn sản phẩm. Công cụ không thể chẩn đoán suy dinh dưỡng, béo phì, chậm tăng trưởng, bệnh lý hoặc bất kỳ tình trạng y khoa nào.",
      "Clinician review": "Đánh giá của nhân viên y tế",
      "Parents should discuss concerning results, sudden changes, persistent high or low z-scores, or symptoms with a pediatrician or qualified healthcare professional.": "Phụ huynh nên trao đổi kết quả đáng lo, thay đổi đột ngột, z-score cao/thấp kéo dài hoặc triệu chứng với bác sĩ nhi hoặc chuyên gia y tế đủ chuyên môn.",
      "Measurement quality": "Chất lượng số đo",
      "Small errors in weight, height, age, or sex selection can change the displayed z-score and percentile. Recheck unexpected results before interpreting them.": "Sai số nhỏ ở cân nặng, chiều cao, tuổi hoặc chọn giới tính có thể làm thay đổi z-score và bách phân vị hiển thị. Hãy kiểm tra lại kết quả bất thường trước khi diễn giải.",
      "Emergency care": "Chăm sóc khẩn cấp",
      "This website is not designed for emergencies. Seek local emergency care for urgent symptoms or immediate health concerns.": "Website này không được thiết kế cho tình huống khẩn cấp. Hãy tìm dịch vụ cấp cứu địa phương khi có triệu chứng khẩn cấp hoặc lo ngại sức khỏe tức thời.",
      "Terms for using GrowthKid": "Điều khoản sử dụng GrowthKid",
      "These terms are written for a lightweight calculator prototype and should be reviewed by counsel before a public launch.": "Các điều khoản này dành cho bản mẫu công cụ tính đơn giản và nên được luật sư rà soát trước khi phát hành công khai.",
      "Simple expectations": "Kỳ vọng đơn giản",
      "Use for education": "Dùng cho giáo dục",
      "Do not misuse results": "Không lạm dụng kết quả",
      "Respect disclaimers": "Tôn trọng các lưu ý",
      "Review before launch": "Rà soát trước khi phát hành",
      "The privacy and medical disclaimer pages explain important limits for parents and healthcare users.": "Trang quyền riêng tư và lưu ý y khoa giải thích các giới hạn quan trọng cho phụ huynh và người dùng y tế.",
      "Educational use": "Mục đích giáo dục",
      "The site provides educational calculations and chart context. It should not be used as the sole basis for medical, nutritional, or treatment decisions.": "Website cung cấp phép tính giáo dục và bối cảnh biểu đồ. Không nên dùng làm cơ sở duy nhất cho quyết định y khoa, dinh dưỡng hoặc điều trị.",
      "Prototype status": "Trạng thái bản mẫu",
      "The current calculator uses simplified reference curves for interface validation. Production use requires official WHO LMS tables, clinical review, privacy review, and legal review.": "Công cụ hiện dùng đường tham chiếu giản lược để kiểm tra giao diện. Bản phát hành cần bảng WHO LMS chính thức, rà soát lâm sàng, quyền riêng tư và pháp lý.",
      "No warranty": "Không bảo đảm",
      "GrowthKid is provided as a prototype without warranties. Accuracy, availability, and fitness for a specific clinical purpose are not guaranteed.": "GrowthKid được cung cấp như bản mẫu và không có bảo đảm. Độ chính xác, tính khả dụng và sự phù hợp cho mục đích lâm sàng cụ thể không được cam kết.",
      "Responsible use": "Sử dụng có trách nhiệm",
      "Users are responsible for entering accurate measurements and seeking professional medical advice when needed.": "Người dùng chịu trách nhiệm nhập số đo chính xác và tìm tư vấn y khoa chuyên môn khi cần."
    },
    es: {
      "Methodology": "Metodología",
      "Privacy": "Privacidad",
      "Medical Disclaimer": "Aviso médico",
      "Terms": "Términos",
      "Download report": "Descargar informe",
      "Measurements": "Mediciones",
      "Age": "Edad",
      "Not entered": "No ingresado",
      "WHO reference": "Referencia OMS",
      "No signup": "Sin registro",
      "Local first": "Local primero",
      "Educational": "Educativo",
      "How this calculator works": "Cómo funciona esta calculadora",
      "Measurement guide": "Guía de medición",
      "Growth education": "Educación sobre crecimiento",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "Este resultado está dentro del rango típico para la edad y el sexo. Sigue observando el crecimiento.",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "Este resultado está fuera del rango típico. Revisa la medición y observa la tendencia.",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "Este resultado está lejos del rango de referencia. Considéralo con un profesional de salud."
    },
    hi: {
      "Methodology": "कार्यप्रणाली",
      "Privacy": "गोपनीयता",
      "Medical Disclaimer": "चिकित्सा अस्वीकरण",
      "Terms": "शर्तें",
      "Download report": "रिपोर्ट डाउनलोड करें",
      "Measurements": "माप",
      "Age": "उम्र",
      "Not entered": "दर्ज नहीं",
      "WHO reference": "WHO संदर्भ",
      "No signup": "साइनअप नहीं",
      "Local first": "स्थानीय पहले",
      "Educational": "शैक्षिक",
      "How this calculator works": "यह कैलकुलेटर कैसे काम करता है",
      "Measurement guide": "माप गाइड",
      "Growth education": "विकास शिक्षा"
    },
    id: {
      "Methodology": "Metodologi",
      "Privacy": "Privasi",
      "Medical Disclaimer": "Penafian medis",
      "Terms": "Ketentuan",
      "Download report": "Unduh laporan",
      "Measurements": "Pengukuran",
      "Age": "Usia",
      "Not entered": "Belum diisi",
      "WHO reference": "Referensi WHO",
      "No signup": "Tanpa daftar",
      "Local first": "Utamakan lokal",
      "Educational": "Edukasi",
      "How this calculator works": "Cara kerja kalkulator ini",
      "Measurement guide": "Panduan pengukuran",
      "Growth education": "Edukasi pertumbuhan",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "Hasil ini berada dalam rentang umum untuk usia dan jenis kelamin. Terus pantau pertumbuhan dari waktu ke waktu.",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "Hasil ini di luar rentang umum. Periksa ulang pengukuran dan pantau trennya.",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "Hasil ini jauh dari rentang referensi. Pertimbangkan untuk berkonsultasi dengan tenaga kesehatan."
    },
    fr: {
      "Methodology": "Méthodologie",
      "Privacy": "Confidentialité",
      "Medical Disclaimer": "Avis médical",
      "Terms": "Conditions",
      "Download report": "Télécharger le rapport",
      "Measurements": "Mesures",
      "Age": "Âge",
      "Not entered": "Non renseigné",
      "WHO reference": "Référence OMS",
      "No signup": "Sans inscription",
      "Local first": "Local d'abord",
      "Educational": "Éducatif",
      "How this calculator works": "Fonctionnement du calculateur",
      "Measurement guide": "Guide de mesure",
      "Growth education": "Éducation à la croissance"
    },
    pt: {
      "Methodology": "Metodologia",
      "Privacy": "Privacidade",
      "Medical Disclaimer": "Aviso médico",
      "Terms": "Termos",
      "Download report": "Baixar relatório",
      "Measurements": "Medições",
      "Age": "Idade",
      "Not entered": "Não informado",
      "WHO reference": "Referência OMS",
      "No signup": "Sem cadastro",
      "Local first": "Local primeiro",
      "Educational": "Educacional",
      "How this calculator works": "Como esta calculadora funciona",
      "Measurement guide": "Guia de medição",
      "Growth education": "Educação sobre crescimento"
    },
    ar: {
      "Methodology": "المنهجية",
      "Privacy": "الخصوصية",
      "Medical Disclaimer": "إخلاء مسؤولية طبي",
      "Terms": "الشروط",
      "Download report": "تنزيل التقرير",
      "Measurements": "القياسات",
      "Age": "العمر",
      "Not entered": "غير مدخل",
      "WHO reference": "مرجع منظمة الصحة العالمية",
      "No signup": "بدون تسجيل",
      "Local first": "محلي أولا",
      "Educational": "تعليمي",
      "How this calculator works": "كيف تعمل هذه الحاسبة",
      "Measurement guide": "دليل القياس",
      "Growth education": "تعليم النمو"
    },
    zh: {
      "Methodology": "方法",
      "Privacy": "隐私",
      "Medical Disclaimer": "医疗免责声明",
      "Terms": "条款",
      "Download report": "下载报告",
      "Measurements": "测量值",
      "Age": "年龄",
      "Not entered": "未输入",
      "WHO reference": "WHO 参考",
      "No signup": "无需注册",
      "Local first": "本地优先",
      "Educational": "教育用途",
      "How this calculator works": "此计算器的工作方式",
      "Measurement guide": "测量指南",
      "Growth education": "生长教育"
    },
    ja: {
      "Methodology": "方法",
      "Privacy": "プライバシー",
      "Medical Disclaimer": "医療免責事項",
      "Terms": "利用規約",
      "Download report": "レポートをダウンロード",
      "Measurements": "測定値",
      "Age": "年齢",
      "Not entered": "未入力",
      "WHO reference": "WHO参照",
      "No signup": "登録不要",
      "Local first": "ローカル優先",
      "Educational": "教育目的",
      "How this calculator works": "この計算機の仕組み",
      "Measurement guide": "測定ガイド",
      "Growth education": "成長に関する情報"
    }
  };

  Object.entries(supplementalTranslations).forEach(([language, values]) => {
    translations[language] = { ...(translations[language] || {}), ...values };
  });

  const featureTranslations = {
    vi: {
      "Shareable growth snapshots": "Ảnh kết quả dễ chia sẻ",
      "Turn a result into a clean privacy-friendly image that parents can save, share, or bring to a pediatric visit.": "Chuyển kết quả thành ảnh gọn, bảo vệ riêng tư để phụ huynh lưu, chia sẻ hoặc mang đến buổi khám nhi.",
      "Create a snapshot": "Tạo ảnh kết quả",
      "Trend tracker": "Theo dõi xu hướng",
      "Save repeated measurements on this device to compare a child's pattern over time instead of reacting to one point.": "Lưu các lần đo trên thiết bị này để so sánh xu hướng theo thời gian thay vì phản ứng với một điểm đo.",
      "View trend tracker": "Xem theo dõi xu hướng",
      "Embed the calculator": "Nhúng công cụ tính",
      "Clinics, newsletters, and parenting blogs can embed the calculator with a simple iframe.": "Phòng khám, newsletter và blog cha mẹ có thể nhúng công cụ bằng một iframe đơn giản.",
      "Copy embed code": "Sao chép mã nhúng",
      "Download PNG": "Tải PNG",
      "Share snapshot": "Chia sẻ ảnh",
      "Save to trend": "Lưu vào xu hướng",
      "Shareable snapshot": "Ảnh chia sẻ",
      "Growth snapshot": "Ảnh kết quả tăng trưởng",
      "No child name is included. The downloadable PNG is designed for private sharing with family or a clinician.": "Ảnh không bao gồm tên trẻ. PNG tải xuống được thiết kế để chia sẻ riêng với gia đình hoặc nhân viên y tế.",
      "Saved measurements": "Các lần đo đã lưu",
      "Stored on this device only. Trends are more useful than one isolated point.": "Chỉ lưu trên thiết bị này. Xu hướng hữu ích hơn một điểm đo đơn lẻ.",
      "Clear": "Xóa",
      "Height percentile trend": "Xu hướng bách phân vị chiều cao",
      "Save the current result to start a device-only trend. Current": "Lưu kết quả hiện tại để bắt đầu xu hướng chỉ trên thiết bị. Hiện tại",
      "Pediatrician checklist": "Checklist hỏi bác sĩ nhi",
      "Questions to ask at the next visit": "Câu hỏi nên hỏi ở lần khám tiếp theo",
      "Is my child's growth trend steady over time?": "Xu hướng tăng trưởng của con có ổn định theo thời gian không?",
      "Should we recheck weight or height before interpreting this result?": "Có nên đo lại cân nặng hoặc chiều cao trước khi diễn giải kết quả không?",
      "Does recent illness, feeding, or prematurity affect the result?": "Bệnh gần đây, cách ăn uống hoặc sinh non có ảnh hưởng kết quả không?",
      "When should we measure again?": "Khi nào nên đo lại?",
      "Are there symptoms or history that make this result more important?": "Có triệu chứng hoặc tiền sử nào khiến kết quả này cần chú ý hơn không?",
      "Copy questions": "Sao chép câu hỏi",
      "Free calculator": "Công cụ miễn phí",
      "Use the calculator, save a device-only trend, and download a privacy-friendly snapshot.": "Dùng công cụ, lưu xu hướng trên thiết bị và tải ảnh kết quả bảo vệ riêng tư.",
      "Calculate growth": "Tính tăng trưởng",
      "Parent FAQ": "FAQ cho phụ huynh",
      "Short answers for parents before they interpret a growth result.": "Câu trả lời ngắn cho phụ huynh trước khi diễn giải kết quả tăng trưởng.",
      "Start calculator": "Bắt đầu tính",
      "View charts": "Xem biểu đồ",
      "Open full calculator": "Mở công cụ đầy đủ",
      "Baby weight percentile calculator": "Công cụ tính bách phân vị cân nặng của bé",
      "Is my baby's weight normal?": "Cân nặng của bé có bình thường không?",
      "WHO vs CDC growth charts": "Biểu đồ tăng trưởng WHO và CDC",
      "How to read a child growth chart": "Cách đọc biểu đồ tăng trưởng của trẻ",
      "Saved": "Đã lưu",
      "Copied": "Đã sao chép",
      "Link copied": "Đã sao chép liên kết",
      "Consult": "Cần tư vấn"
    },
    es: {
      "Download PNG": "Descargar PNG",
      "Share snapshot": "Compartir imagen",
      "Save to trend": "Guardar tendencia",
      "Copy embed code": "Copiar código",
      "Copy questions": "Copiar preguntas",
      "Consult": "Consultar"
    },
    id: {
      "Download PNG": "Unduh PNG",
      "Share snapshot": "Bagikan cuplikan",
      "Save to trend": "Simpan tren",
      "Copy embed code": "Salin kode embed",
      "Copy questions": "Salin pertanyaan"
    }
  };

  Object.entries(featureTranslations).forEach(([language, values]) => {
    translations[language] = { ...(translations[language] || {}), ...values };
  });

  const whoReferenceTranslations = {
    vi: {
      "Not available": "Không có dữ liệu",
      "WHO Child Growth Standards 2006": "Chuẩn tăng trưởng trẻ em WHO 2006",
      "WHO Growth Reference 2007": "Tham chiếu tăng trưởng WHO 2007",
      "Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.": "Hỗ trợ chuẩn WHO cho 0-5 tuổi và tham chiếu WHO 2007 cho 5-19 tuổi. Chỉ số cân nặng theo tuổi trong WHO 2007 chỉ có đến 10 tuổi.",
      "Educational use only. The calculator uses WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years where WHO provides the indicator.": "Chỉ dùng cho mục đích giáo dục. Công cụ dùng chuẩn WHO cho 0-5 tuổi và tham chiếu WHO 2007 cho 5-19 tuổi ở các chỉ số WHO cung cấp.",
      "This calculator supports children from birth to 19 years (228 months).": "Công cụ này hỗ trợ trẻ từ sơ sinh đến 19 tuổi (228 tháng).",
      "WHO 2007 reference data could not be loaded. Please refresh and try again.": "Không tải được dữ liệu tham chiếu WHO 2007. Vui lòng làm mới trang và thử lại.",
      "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years.": "WHO Growth Reference 2007 không bao gồm vòng đầu theo tuổi cho nhóm 5-19 tuổi.",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "Dữ liệu WHO cân nặng theo tuổi chỉ có từ 5 đến 10 tuổi.",
      "WHO does not provide this reference for the selected age range.": "WHO không cung cấp tham chiếu này cho độ tuổi đã chọn.",
      "WHO reference is not available for the selected age range.": "Không có tham chiếu WHO cho độ tuổi đã chọn.",
      "The calculator uses LMS-style reference data for WHO Growth Reference 2007 from 5-19 years and keeps the under-5 experience aligned with WHO Child Growth Standards context.": "Công cụ dùng dữ liệu tham chiếu dạng LMS của WHO Growth Reference 2007 cho 5-19 tuổi và giữ trải nghiệm dưới 5 tuổi theo bối cảnh WHO Child Growth Standards.",
      "The current calculator includes WHO 2007 LMS reference data for 5-19 years where WHO provides the indicator. Production use still requires clinical review, privacy review, and legal review.": "Công cụ hiện có dữ liệu LMS WHO 2007 cho 5-19 tuổi ở các chỉ số WHO cung cấp. Khi phát hành thật vẫn cần rà soát lâm sàng, quyền riêng tư và pháp lý."
    },
    es: {
      "Not available": "No disponible",
      "WHO Growth Reference 2007": "Referencia de crecimiento OMS 2007",
      "WHO Child Growth Standards 2006": "Estándares de crecimiento infantil OMS 2006",
      "This calculator supports children from birth to 19 years (228 months).": "Esta calculadora admite niños desde el nacimiento hasta los 19 años (228 meses).",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "Los datos OMS de peso para la edad solo están disponibles de 5 a 10 años."
    },
    id: {
      "Not available": "Tidak tersedia",
      "WHO Growth Reference 2007": "Referensi Pertumbuhan WHO 2007",
      "WHO Child Growth Standards 2006": "Standar Pertumbuhan Anak WHO 2006",
      "This calculator supports children from birth to 19 years (228 months).": "Kalkulator ini mendukung anak dari lahir hingga 19 tahun (228 bulan).",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "Data WHO berat menurut usia hanya tersedia dari 5 hingga 10 tahun."
    },
    fr: {
      "Not available": "Non disponible",
      "WHO Growth Reference 2007": "Référence de croissance OMS 2007",
      "WHO Child Growth Standards 2006": "Normes OMS de croissance de l'enfant 2006"
    },
    pt: {
      "Not available": "Não disponível",
      "WHO Growth Reference 2007": "Referência de Crescimento OMS 2007",
      "WHO Child Growth Standards 2006": "Padrões de Crescimento Infantil OMS 2006"
    }
  };

  Object.entries(whoReferenceTranslations).forEach(([language, values]) => {
    translations[language] = { ...(translations[language] || {}), ...values };
  });

  const humanToneTranslations = {
    vi: {
      "Child Growth Calculator": "Công cụ theo dõi tăng trưởng của trẻ",
      "Child Growth Calculator | GrowthKid": "Công cụ theo dõi tăng trưởng của trẻ | GrowthKid",
      "Calculator": "Công cụ tính",
      "Growth Charts": "Biểu đồ tăng trưởng",
      "Articles": "Bài viết",
      "About": "Giới thiệu",
      "Language": "Ngôn ngữ",
      "Language selector": "Chọn ngôn ngữ",
      "Start Calculator": "Bắt đầu tính",
      "Start calculator": "Bắt đầu tính",
      "View Growth Charts": "Xem biểu đồ tăng trưởng",
      "View charts": "Xem biểu đồ",
      "Track Your Child's Growth Using WHO Growth Standards": "Theo dõi tăng trưởng của trẻ theo chuẩn WHO",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "Nhập số đo, xem điểm z và theo dõi xu hướng phát triển chỉ trong vài giây.",
      "Date of Birth": "Ngày sinh",
      "Measurement Date": "Ngày đo",
      "Sex": "Giới tính",
      "Boy": "Bé trai",
      "Girl": "Bé gái",
      "Weight (kg)": "Cân nặng (kg)",
      "Height (cm)": "Chiều cao (cm)",
      "Head Circumference (cm)": "Vòng đầu (cm)",
      "Optional": "Không bắt buộc",
      "Calculate Growth": "Xem kết quả tăng trưởng",
      "Growth Results": "Kết quả tăng trưởng",
      "View results page": "Xem trang kết quả",
      "Overview": "Tổng quan",
      "Weight": "Cân nặng",
      "Height": "Chiều cao",
      "BMI": "BMI",
      "Weight-for-age": "Cân nặng theo tuổi",
      "Height-for-age": "Chiều cao theo tuổi",
      "Weight-for-height": "Cân nặng theo chiều cao",
      "BMI-for-age": "BMI theo tuổi",
      "Head circumference": "Vòng đầu",
      "Z-score": "Điểm z",
      "Percentile": "Bách phân vị",
      "Status": "Nhận định",
      "Normal": "Trong khoảng bình thường",
      "Monitor": "Nên theo dõi thêm",
      "Consult": "Cần tư vấn",
      "Consult a healthcare professional": "Nên trao đổi với bác sĩ",
      "Not available": "Chưa có dữ liệu tham chiếu",
      "Not entered": "Chưa nhập",
      "Interpretation": "Cách hiểu kết quả",
      "Add this measurement to calculate a z-score and percentile.": "Nhập chỉ số này để xem điểm z và bách phân vị.",
      "About z-score": "Về điểm z",
      "Normal: -2 to +2.": "Bình thường: từ -2 đến +2.",
      "Monitor: below -2 or above +2.": "Cần theo dõi: dưới -2 hoặc trên +2.",
      "Consult: below -3 or above +3.": "Nên tư vấn y tế: dưới -3 hoặc trên +3.",
      "Learn about WHO standards": "Tìm hiểu chuẩn WHO",
      "Age (months)": "Tuổi (tháng)",
      "Measurement on": "Ngày đo",
      "year": "tuổi",
      "years": "tuổi",
      "month": "tháng",
      "months": "tháng",
      "WHO Child Growth Standards 2006": "Chuẩn tăng trưởng trẻ em WHO 2006",
      "WHO Growth Reference 2007": "Bảng tham chiếu tăng trưởng WHO 2007",
      "Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.": "Hỗ trợ chuẩn tăng trưởng WHO cho trẻ 0-5 tuổi và bảng tham chiếu WHO 2007 cho trẻ 5-19 tuổi. Chỉ số cân nặng theo tuổi trong WHO 2007 chỉ có đến 10 tuổi.",
      "Educational use only. The calculator uses WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years where WHO provides the indicator.": "Chỉ dùng cho mục đích tham khảo. Công cụ sử dụng chuẩn WHO cho trẻ 0-5 tuổi và bảng tham chiếu WHO 2007 cho trẻ 5-19 tuổi ở những chỉ số WHO có cung cấp.",
      "This calculator supports children from birth to 19 years (228 months).": "Công cụ hỗ trợ trẻ từ sơ sinh đến 19 tuổi (228 tháng).",
      "WHO 2007 reference data could not be loaded. Please refresh and try again.": "Chưa tải được dữ liệu tham chiếu WHO 2007. Vui lòng làm mới trang và thử lại.",
      "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years.": "Bảng tham chiếu WHO 2007 không có chỉ số vòng đầu theo tuổi cho nhóm 5-19 tuổi.",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "WHO chỉ có dữ liệu cân nặng theo tuổi cho nhóm 5 đến 10 tuổi.",
      "WHO does not provide this reference for the selected age range.": "WHO không cung cấp dữ liệu tham chiếu này cho độ tuổi đã chọn.",
      "WHO reference is not available for the selected age range.": "Chưa có dữ liệu tham chiếu WHO cho độ tuổi đã chọn.",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "Kết quả này nằm trong khoảng thường gặp theo tuổi và giới tính. Bạn nên tiếp tục theo dõi xu hướng theo thời gian.",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "Kết quả này nằm ngoài khoảng thường gặp. Hãy kiểm tra lại số đo và theo dõi thêm trong các lần đo sau.",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "Kết quả này cách khá xa khoảng tham chiếu. Bạn nên trao đổi với bác sĩ hoặc nhân viên y tế.",
      "Please enter weight and height.": "Vui lòng nhập cân nặng và chiều cao.",
      "Measurement date must be after date of birth.": "Ngày đo cần sau ngày sinh."
    },
    es: {
      "Child Growth Calculator": "Calculadora de crecimiento infantil",
      "Child Growth Calculator | GrowthKid": "Calculadora de crecimiento infantil | GrowthKid",
      "Calculator": "Calculadora",
      "Growth Charts": "Curvas de crecimiento",
      "Articles": "Artículos",
      "About": "Acerca de",
      "Language": "Idioma",
      "Language selector": "Selector de idioma",
      "Start Calculator": "Empezar",
      "Start calculator": "Empezar",
      "View Growth Charts": "Ver curvas de crecimiento",
      "View charts": "Ver curvas",
      "Track Your Child's Growth Using WHO Growth Standards": "Sigue el crecimiento de tu hijo con los estándares de la OMS",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "Introduce las medidas, calcula puntuaciones z y sigue la evolución en segundos.",
      "Date of Birth": "Fecha de nacimiento",
      "Measurement Date": "Fecha de medición",
      "Sex": "Sexo",
      "Boy": "Niño",
      "Girl": "Niña",
      "Weight (kg)": "Peso (kg)",
      "Height (cm)": "Talla (cm)",
      "Head Circumference (cm)": "Perímetro cefálico (cm)",
      "Optional": "Opcional",
      "Calculate Growth": "Calcular crecimiento",
      "Growth Results": "Resultados de crecimiento",
      "View results page": "Ver resultados",
      "Overview": "Resumen",
      "Weight": "Peso",
      "Height": "Talla",
      "BMI": "IMC",
      "Weight-for-age": "Peso para la edad",
      "Height-for-age": "Talla para la edad",
      "Weight-for-height": "Peso para la talla",
      "BMI-for-age": "IMC para la edad",
      "Head circumference": "Perímetro cefálico",
      "Z-score": "Puntuación z",
      "Percentile": "Percentil",
      "Status": "Interpretación",
      "Normal": "Dentro del rango esperado",
      "Monitor": "Conviene vigilar",
      "Consult": "Consultar",
      "Consult a healthcare professional": "Consulta con un profesional sanitario",
      "Not available": "Sin datos de referencia",
      "Not entered": "No introducido",
      "Interpretation": "Cómo interpretar el resultado",
      "Add this measurement to calculate a z-score and percentile.": "Añade esta medida para calcular la puntuación z y el percentil.",
      "About z-score": "Sobre la puntuación z",
      "Normal: -2 to +2.": "Rango esperado: de -2 a +2.",
      "Monitor: below -2 or above +2.": "Vigilar: por debajo de -2 o por encima de +2.",
      "Consult: below -3 or above +3.": "Consultar: por debajo de -3 o por encima de +3.",
      "Learn about WHO standards": "Conocer los estándares de la OMS",
      "Age (months)": "Edad (meses)",
      "Measurement on": "Medición del",
      "year": "año",
      "years": "años",
      "month": "mes",
      "months": "meses",
      "WHO Child Growth Standards 2006": "Estándares de crecimiento infantil de la OMS 2006",
      "WHO Growth Reference 2007": "Referencia de crecimiento de la OMS 2007",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "La referencia OMS de peso para la edad solo está disponible de los 5 a los 10 años.",
      "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years.": "La referencia OMS 2007 no incluye perímetro cefálico para la edad entre los 5 y los 19 años.",
      "WHO does not provide this reference for the selected age range.": "La OMS no ofrece esta referencia para el rango de edad seleccionado.",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "El resultado está dentro del rango esperado para la edad y el sexo. Sigue observando la tendencia con el tiempo.",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "El resultado está fuera del rango esperado. Revisa la medición y observa la tendencia en próximas mediciones.",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "El resultado se aleja bastante del rango de referencia. Conviene comentarlo con un profesional sanitario.",
      "Please enter weight and height.": "Introduce el peso y la talla.",
      "Measurement date must be after date of birth.": "La fecha de medición debe ser posterior a la fecha de nacimiento."
    },
    hi: {
      "Child Growth Calculator": "बाल विकास कैलकुलेटर",
      "Child Growth Calculator | GrowthKid": "बाल विकास कैलकुलेटर | GrowthKid",
      "Calculator": "कैलकुलेटर",
      "Growth Charts": "ग्रोथ चार्ट",
      "Articles": "लेख",
      "About": "परिचय",
      "Language": "भाषा",
      "Language selector": "भाषा चुनें",
      "Start Calculator": "कैलकुलेटर शुरू करें",
      "Start calculator": "कैलकुलेटर शुरू करें",
      "View Growth Charts": "ग्रोथ चार्ट देखें",
      "View charts": "चार्ट देखें",
      "Track Your Child's Growth Using WHO Growth Standards": "WHO मानकों से अपने बच्चे की वृद्धि देखें",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "माप दर्ज करें, Z-स्कोर देखें और विकास की दिशा समझें.",
      "Date of Birth": "जन्म तिथि",
      "Measurement Date": "माप की तारीख",
      "Sex": "लिंग",
      "Boy": "लड़का",
      "Girl": "लड़की",
      "Weight (kg)": "वजन (किग्रा)",
      "Height (cm)": "लंबाई (सेमी)",
      "Head Circumference (cm)": "सिर की परिधि (सेमी)",
      "Optional": "वैकल्पिक",
      "Calculate Growth": "विकास परिणाम देखें",
      "Growth Results": "विकास परिणाम",
      "View results page": "परिणाम पेज देखें",
      "Overview": "सारांश",
      "Weight": "वजन",
      "Height": "लंबाई",
      "BMI": "BMI",
      "Weight-for-age": "उम्र के अनुसार वजन",
      "Height-for-age": "उम्र के अनुसार लंबाई",
      "Weight-for-height": "लंबाई के अनुसार वजन",
      "BMI-for-age": "उम्र के अनुसार BMI",
      "Head circumference": "सिर की परिधि",
      "Z-score": "Z-स्कोर",
      "Percentile": "प्रतिशतक",
      "Status": "स्थिति",
      "Normal": "सामान्य सीमा में",
      "Monitor": "निगरानी करें",
      "Consult": "सलाह लें",
      "Consult a healthcare professional": "स्वास्थ्य विशेषज्ञ से सलाह लें",
      "Not available": "संदर्भ डेटा उपलब्ध नहीं",
      "Not entered": "दर्ज नहीं किया गया",
      "Interpretation": "परिणाम को समझें",
      "Add this measurement to calculate a z-score and percentile.": "Z-स्कोर और प्रतिशतक देखने के लिए यह माप दर्ज करें.",
      "About z-score": "Z-स्कोर के बारे में",
      "Normal: -2 to +2.": "सामान्य: -2 से +2 तक.",
      "Monitor: below -2 or above +2.": "निगरानी: -2 से कम या +2 से अधिक.",
      "Consult: below -3 or above +3.": "सलाह लें: -3 से कम या +3 से अधिक.",
      "Learn about WHO standards": "WHO मानकों के बारे में जानें",
      "Age (months)": "उम्र (महीने)",
      "Measurement on": "माप की तारीख",
      "year": "वर्ष",
      "years": "वर्ष",
      "month": "महीना",
      "months": "महीने",
      "WHO Child Growth Standards 2006": "WHO बाल विकास मानक 2006",
      "WHO Growth Reference 2007": "WHO वृद्धि संदर्भ 2007",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "WHO में उम्र के अनुसार वजन का संदर्भ डेटा केवल 5 से 10 वर्ष तक उपलब्ध है.",
      "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years.": "WHO Growth Reference 2007 में 5-19 वर्ष के लिए उम्र के अनुसार सिर की परिधि शामिल नहीं है.",
      "WHO does not provide this reference for the selected age range.": "चुनी गई उम्र के लिए WHO यह संदर्भ उपलब्ध नहीं कराता.",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "यह परिणाम उम्र और लिंग के हिसाब से सामान्य सीमा में है. समय के साथ रुझान देखते रहें.",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "यह परिणाम सामान्य सीमा से बाहर है. माप दोबारा जांचें और अगली मापों में रुझान देखें.",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "यह परिणाम संदर्भ सीमा से काफी दूर है. किसी स्वास्थ्य विशेषज्ञ से बात करना बेहतर होगा.",
      "Please enter weight and height.": "कृपया वजन और लंबाई दर्ज करें.",
      "Measurement date must be after date of birth.": "माप की तारीख जन्म तिथि के बाद होनी चाहिए."
    },
    id: {
      "Child Growth Calculator": "Kalkulator Pertumbuhan Anak",
      "Child Growth Calculator | GrowthKid": "Kalkulator Pertumbuhan Anak | GrowthKid",
      "Calculator": "Kalkulator",
      "Growth Charts": "Grafik pertumbuhan",
      "Articles": "Artikel",
      "About": "Tentang",
      "Language": "Bahasa",
      "Language selector": "Pilih bahasa",
      "Start Calculator": "Mulai menghitung",
      "Start calculator": "Mulai menghitung",
      "View Growth Charts": "Lihat grafik pertumbuhan",
      "View charts": "Lihat grafik",
      "Track Your Child's Growth Using WHO Growth Standards": "Pantau pertumbuhan anak dengan standar WHO",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "Masukkan hasil ukur, lihat skor-z, dan pantau perkembangan anak dalam hitungan detik.",
      "Date of Birth": "Tanggal lahir",
      "Measurement Date": "Tanggal pengukuran",
      "Sex": "Jenis kelamin",
      "Boy": "Laki-laki",
      "Girl": "Perempuan",
      "Weight (kg)": "Berat badan (kg)",
      "Height (cm)": "Tinggi badan (cm)",
      "Head Circumference (cm)": "Lingkar kepala (cm)",
      "Optional": "Opsional",
      "Calculate Growth": "Lihat hasil pertumbuhan",
      "Growth Results": "Hasil pertumbuhan",
      "View results page": "Lihat halaman hasil",
      "Overview": "Ringkasan",
      "Weight": "Berat badan",
      "Height": "Tinggi badan",
      "BMI": "BMI",
      "Weight-for-age": "Berat menurut usia",
      "Height-for-age": "Tinggi menurut usia",
      "Weight-for-height": "Berat menurut tinggi",
      "BMI-for-age": "BMI menurut usia",
      "Head circumference": "Lingkar kepala",
      "Z-score": "Skor-z",
      "Percentile": "Persentil",
      "Status": "Status",
      "Normal": "Dalam rentang normal",
      "Monitor": "Pantau lagi",
      "Consult": "Konsultasi",
      "Consult a healthcare professional": "Konsultasikan dengan tenaga kesehatan",
      "Not available": "Data referensi belum tersedia",
      "Not entered": "Belum diisi",
      "Interpretation": "Cara membaca hasil",
      "Add this measurement to calculate a z-score and percentile.": "Masukkan ukuran ini untuk melihat skor-z dan persentil.",
      "About z-score": "Tentang skor-z",
      "Normal: -2 to +2.": "Normal: -2 sampai +2.",
      "Monitor: below -2 or above +2.": "Pantau: di bawah -2 atau di atas +2.",
      "Consult: below -3 or above +3.": "Konsultasi: di bawah -3 atau di atas +3.",
      "Learn about WHO standards": "Pelajari standar WHO",
      "Age (months)": "Usia (bulan)",
      "Measurement on": "Pengukuran pada",
      "year": "tahun",
      "years": "tahun",
      "month": "bulan",
      "months": "bulan",
      "WHO Child Growth Standards 2006": "Standar Pertumbuhan Anak WHO 2006",
      "WHO Growth Reference 2007": "Referensi Pertumbuhan WHO 2007",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "Data WHO untuk berat menurut usia hanya tersedia dari usia 5 sampai 10 tahun.",
      "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years.": "Referensi WHO 2007 tidak mencakup lingkar kepala menurut usia untuk 5-19 tahun.",
      "WHO does not provide this reference for the selected age range.": "WHO tidak menyediakan referensi ini untuk rentang usia yang dipilih.",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "Hasil ini berada dalam rentang yang umum untuk usia dan jenis kelamin anak. Lanjutkan pemantauan dari waktu ke waktu.",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "Hasil ini berada di luar rentang umum. Periksa kembali pengukuran dan pantau trennya pada pengukuran berikutnya.",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "Hasil ini cukup jauh dari rentang referensi. Sebaiknya diskusikan dengan tenaga kesehatan.",
      "Please enter weight and height.": "Masukkan berat dan tinggi badan.",
      "Measurement date must be after date of birth.": "Tanggal pengukuran harus setelah tanggal lahir."
    },
    fr: {
      "Child Growth Calculator": "Calculateur de croissance de l'enfant",
      "Child Growth Calculator | GrowthKid": "Calculateur de croissance de l'enfant | GrowthKid",
      "Calculator": "Calculateur",
      "Growth Charts": "Courbes de croissance",
      "Articles": "Articles",
      "About": "À propos",
      "Language": "Langue",
      "Language selector": "Choisir la langue",
      "Start Calculator": "Commencer",
      "Start calculator": "Commencer",
      "View Growth Charts": "Voir les courbes de croissance",
      "View charts": "Voir les courbes",
      "Track Your Child's Growth Using WHO Growth Standards": "Suivez la croissance de votre enfant avec les références de l'OMS",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "Saisissez les mesures, obtenez le score z et suivez l'évolution en quelques secondes.",
      "Date of Birth": "Date de naissance",
      "Measurement Date": "Date de mesure",
      "Sex": "Sexe",
      "Boy": "Garçon",
      "Girl": "Fille",
      "Weight (kg)": "Poids (kg)",
      "Height (cm)": "Taille (cm)",
      "Head Circumference (cm)": "Périmètre crânien (cm)",
      "Optional": "Facultatif",
      "Calculate Growth": "Voir le résultat",
      "Growth Results": "Résultats de croissance",
      "View results page": "Voir les résultats",
      "Overview": "Vue d'ensemble",
      "Weight": "Poids",
      "Height": "Taille",
      "BMI": "IMC",
      "Weight-for-age": "Poids-pour-l'âge",
      "Height-for-age": "Taille-pour-l'âge",
      "Weight-for-height": "Poids-pour-la-taille",
      "BMI-for-age": "IMC-pour-l'âge",
      "Head circumference": "Périmètre crânien",
      "Z-score": "Score z",
      "Percentile": "Percentile",
      "Status": "Interprétation",
      "Normal": "Dans la plage attendue",
      "Monitor": "À surveiller",
      "Consult": "Consulter",
      "Consult a healthcare professional": "Consulter un professionnel de santé",
      "Not available": "Données de référence indisponibles",
      "Not entered": "Non renseigné",
      "Interpretation": "Comprendre le résultat",
      "Add this measurement to calculate a z-score and percentile.": "Ajoutez cette mesure pour calculer le score z et le percentile.",
      "About z-score": "À propos du score z",
      "Normal: -2 to +2.": "Plage attendue : de -2 à +2.",
      "Monitor: below -2 or above +2.": "À surveiller : inférieur à -2 ou supérieur à +2.",
      "Consult: below -3 or above +3.": "Consulter : inférieur à -3 ou supérieur à +3.",
      "Learn about WHO standards": "Comprendre les références de l'OMS",
      "Age (months)": "Âge (mois)",
      "Measurement on": "Mesure du",
      "year": "an",
      "years": "ans",
      "month": "mois",
      "months": "mois",
      "WHO Child Growth Standards 2006": "Normes OMS de croissance de l'enfant 2006",
      "WHO Growth Reference 2007": "Référence de croissance OMS 2007",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "La référence OMS du poids-pour-l'âge est disponible uniquement de 5 à 10 ans.",
      "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years.": "La référence OMS 2007 n'inclut pas le périmètre crânien-pour-l'âge de 5 à 19 ans.",
      "WHO does not provide this reference for the selected age range.": "L'OMS ne fournit pas cette référence pour l'âge sélectionné.",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "Ce résultat se situe dans la plage attendue pour l'âge et le sexe. Continuez à suivre l'évolution dans le temps.",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "Ce résultat est en dehors de la plage attendue. Vérifiez la mesure et observez la tendance lors des prochaines mesures.",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "Ce résultat est assez éloigné de la plage de référence. Il est préférable d'en parler à un professionnel de santé.",
      "Please enter weight and height.": "Veuillez saisir le poids et la taille.",
      "Measurement date must be after date of birth.": "La date de mesure doit être postérieure à la date de naissance."
    },
    pt: {
      "Child Growth Calculator": "Calculadora de crescimento infantil",
      "Child Growth Calculator | GrowthKid": "Calculadora de crescimento infantil | GrowthKid",
      "Calculator": "Calculadora",
      "Growth Charts": "Curvas de crescimento",
      "Articles": "Artigos",
      "About": "Sobre",
      "Language": "Idioma",
      "Language selector": "Selecionar idioma",
      "Start Calculator": "Começar",
      "Start calculator": "Começar",
      "View Growth Charts": "Ver curvas de crescimento",
      "View charts": "Ver curvas",
      "Track Your Child's Growth Using WHO Growth Standards": "Acompanhe o crescimento da criança com os padrões da OMS",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "Informe as medidas, veja o escore-z e acompanhe a evolução em segundos.",
      "Date of Birth": "Data de nascimento",
      "Measurement Date": "Data da medição",
      "Sex": "Sexo",
      "Boy": "Menino",
      "Girl": "Menina",
      "Weight (kg)": "Peso (kg)",
      "Height (cm)": "Altura (cm)",
      "Head Circumference (cm)": "Perímetro cefálico (cm)",
      "Optional": "Opcional",
      "Calculate Growth": "Ver resultado",
      "Growth Results": "Resultados de crescimento",
      "View results page": "Ver resultados",
      "Overview": "Resumo",
      "Weight": "Peso",
      "Height": "Altura",
      "BMI": "IMC",
      "Weight-for-age": "Peso por idade",
      "Height-for-age": "Altura por idade",
      "Weight-for-height": "Peso por altura",
      "BMI-for-age": "IMC por idade",
      "Head circumference": "Perímetro cefálico",
      "Z-score": "Escore-z",
      "Percentile": "Percentil",
      "Status": "Interpretação",
      "Normal": "Dentro da faixa esperada",
      "Monitor": "Acompanhar",
      "Consult": "Consultar",
      "Consult a healthcare professional": "Converse com um profissional de saúde",
      "Not available": "Sem dados de referência",
      "Not entered": "Não informado",
      "Interpretation": "Como ler o resultado",
      "Add this measurement to calculate a z-score and percentile.": "Informe essa medida para calcular o escore-z e o percentil.",
      "About z-score": "Sobre o escore-z",
      "Normal: -2 to +2.": "Faixa esperada: de -2 a +2.",
      "Monitor: below -2 or above +2.": "Acompanhar: abaixo de -2 ou acima de +2.",
      "Consult: below -3 or above +3.": "Consultar: abaixo de -3 ou acima de +3.",
      "Learn about WHO standards": "Entenda os padrões da OMS",
      "Age (months)": "Idade (meses)",
      "Measurement on": "Medição em",
      "year": "ano",
      "years": "anos",
      "month": "mês",
      "months": "meses",
      "WHO Child Growth Standards 2006": "Padrões de Crescimento Infantil da OMS 2006",
      "WHO Growth Reference 2007": "Referência de Crescimento da OMS 2007",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "A referência OMS de peso por idade está disponível apenas dos 5 aos 10 anos.",
      "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years.": "A Referência OMS 2007 não inclui perímetro cefálico por idade para 5-19 anos.",
      "WHO does not provide this reference for the selected age range.": "A OMS não oferece essa referência para a faixa etária selecionada.",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "O resultado está dentro da faixa esperada para idade e sexo. Continue acompanhando a tendência ao longo do tempo.",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "O resultado está fora da faixa esperada. Confira a medição e acompanhe a tendência nas próximas medidas.",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "O resultado está bem distante da faixa de referência. Vale conversar com um profissional de saúde.",
      "Please enter weight and height.": "Informe peso e altura.",
      "Measurement date must be after date of birth.": "A data da medição deve ser posterior à data de nascimento."
    },
    ar: {
      "Child Growth Calculator": "حاسبة نمو الطفل",
      "Child Growth Calculator | GrowthKid": "حاسبة نمو الطفل | GrowthKid",
      "Calculator": "الحاسبة",
      "Growth Charts": "مخططات النمو",
      "Articles": "مقالات",
      "About": "عن GrowthKid",
      "Language": "اللغة",
      "Language selector": "اختيار اللغة",
      "Start Calculator": "ابدأ الحساب",
      "Start calculator": "ابدأ الحساب",
      "View Growth Charts": "عرض مخططات النمو",
      "View charts": "عرض المخططات",
      "Track Your Child's Growth Using WHO Growth Standards": "تابع نمو طفلك وفق معايير منظمة الصحة العالمية",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "أدخل القياسات، واعرف درجة Z، وتابع اتجاه النمو خلال ثوانٍ.",
      "Date of Birth": "تاريخ الميلاد",
      "Measurement Date": "تاريخ القياس",
      "Sex": "الجنس",
      "Boy": "ذكر",
      "Girl": "أنثى",
      "Weight (kg)": "الوزن (كجم)",
      "Height (cm)": "الطول (سم)",
      "Head Circumference (cm)": "محيط الرأس (سم)",
      "Optional": "اختياري",
      "Calculate Growth": "عرض نتيجة النمو",
      "Growth Results": "نتائج النمو",
      "View results page": "عرض صفحة النتائج",
      "Overview": "نظرة عامة",
      "Weight": "الوزن",
      "Height": "الطول",
      "BMI": "مؤشر كتلة الجسم",
      "Weight-for-age": "الوزن حسب العمر",
      "Height-for-age": "الطول حسب العمر",
      "Weight-for-height": "الوزن حسب الطول",
      "BMI-for-age": "مؤشر كتلة الجسم حسب العمر",
      "Head circumference": "محيط الرأس",
      "Z-score": "درجة Z",
      "Percentile": "المئين",
      "Status": "التفسير",
      "Normal": "ضمن النطاق المتوقع",
      "Monitor": "يُنصح بالمتابعة",
      "Consult": "استشارة",
      "Consult a healthcare professional": "استشر مختصًا صحيًا",
      "Not available": "بيانات المرجع غير متاحة",
      "Not entered": "لم يُدخل",
      "Interpretation": "فهم النتيجة",
      "Add this measurement to calculate a z-score and percentile.": "أدخل هذا القياس لعرض درجة Z والمئين.",
      "About z-score": "حول درجة Z",
      "Normal: -2 to +2.": "المتوقع: من -2 إلى +2.",
      "Monitor: below -2 or above +2.": "متابعة: أقل من -2 أو أعلى من +2.",
      "Consult: below -3 or above +3.": "استشارة: أقل من -3 أو أعلى من +3.",
      "Learn about WHO standards": "تعرّف على معايير منظمة الصحة العالمية",
      "Age (months)": "العمر (بالأشهر)",
      "Measurement on": "تاريخ القياس",
      "year": "سنة",
      "years": "سنوات",
      "month": "شهر",
      "months": "أشهر",
      "WHO Child Growth Standards 2006": "معايير نمو الطفل لمنظمة الصحة العالمية 2006",
      "WHO Growth Reference 2007": "مرجع النمو لمنظمة الصحة العالمية 2007",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "تتوفر بيانات منظمة الصحة العالمية للوزن حسب العمر من 5 إلى 10 سنوات فقط.",
      "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years.": "مرجع النمو لمنظمة الصحة العالمية 2007 لا يتضمن محيط الرأس حسب العمر للفئة 5-19 سنة.",
      "WHO does not provide this reference for the selected age range.": "لا توفر منظمة الصحة العالمية هذا المرجع للفئة العمرية المختارة.",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "هذه النتيجة ضمن النطاق المتوقع للعمر والجنس. واصل متابعة الاتجاه مع الوقت.",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "هذه النتيجة خارج النطاق المتوقع. أعد التحقق من القياس وتابع الاتجاه في القياسات القادمة.",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "هذه النتيجة بعيدة نسبيًا عن النطاق المرجعي. من الأفضل مناقشتها مع مختص صحي.",
      "Please enter weight and height.": "يرجى إدخال الوزن والطول.",
      "Measurement date must be after date of birth.": "يجب أن يكون تاريخ القياس بعد تاريخ الميلاد."
    },
    zh: {
      "Child Growth Calculator": "儿童生长计算器",
      "Child Growth Calculator | GrowthKid": "儿童生长计算器 | GrowthKid",
      "Calculator": "计算器",
      "Growth Charts": "生长曲线",
      "Articles": "文章",
      "About": "关于",
      "Language": "语言",
      "Language selector": "选择语言",
      "Start Calculator": "开始计算",
      "Start calculator": "开始计算",
      "View Growth Charts": "查看生长曲线",
      "View charts": "查看曲线",
      "Track Your Child's Growth Using WHO Growth Standards": "用 WHO 标准跟踪孩子的生长",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "输入测量值，即可查看 Z 评分并了解生长趋势。",
      "Date of Birth": "出生日期",
      "Measurement Date": "测量日期",
      "Sex": "性别",
      "Boy": "男孩",
      "Girl": "女孩",
      "Weight (kg)": "体重（kg）",
      "Height (cm)": "身高（cm）",
      "Head Circumference (cm)": "头围（cm）",
      "Optional": "可选",
      "Calculate Growth": "查看生长结果",
      "Growth Results": "生长结果",
      "View results page": "查看结果页",
      "Overview": "概览",
      "Weight": "体重",
      "Height": "身高",
      "BMI": "BMI",
      "Weight-for-age": "年龄别体重",
      "Height-for-age": "年龄别身高",
      "Weight-for-height": "身高别体重",
      "BMI-for-age": "年龄别 BMI",
      "Head circumference": "头围",
      "Z-score": "Z 评分",
      "Percentile": "百分位",
      "Status": "解读",
      "Normal": "在正常范围内",
      "Monitor": "建议继续观察",
      "Consult": "咨询",
      "Consult a healthcare professional": "请咨询医疗专业人员",
      "Not available": "暂无参考数据",
      "Not entered": "未填写",
      "Interpretation": "结果解读",
      "Add this measurement to calculate a z-score and percentile.": "填写此项后可计算 Z 评分和百分位。",
      "About z-score": "关于 Z 评分",
      "Normal: -2 to +2.": "正常：-2 到 +2。",
      "Monitor: below -2 or above +2.": "观察：低于 -2 或高于 +2。",
      "Consult: below -3 or above +3.": "咨询：低于 -3 或高于 +3。",
      "Learn about WHO standards": "了解 WHO 标准",
      "Age (months)": "年龄（月）",
      "Measurement on": "测量日期",
      "year": "岁",
      "years": "岁",
      "month": "个月",
      "months": "个月",
      "WHO Child Growth Standards 2006": "WHO 儿童生长标准 2006",
      "WHO Growth Reference 2007": "WHO 生长参考 2007",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "WHO 年龄别体重参考数据仅适用于 5 至 10 岁。",
      "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years.": "WHO 2007 生长参考不包含 5-19 岁的年龄别头围。",
      "WHO does not provide this reference for the selected age range.": "WHO 未提供所选年龄段的该项参考数据。",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "该结果处于同年龄、同性别儿童的常见范围内。建议继续关注长期趋势。",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "该结果超出常见范围。请先复核测量值，并在后续测量中观察趋势。",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "该结果与参考范围相差较大，建议咨询医疗专业人员。",
      "Please enter weight and height.": "请输入体重和身高。",
      "Measurement date must be after date of birth.": "测量日期必须晚于出生日期。"
    },
    ja: {
      "Child Growth Calculator": "子どもの成長計算ツール",
      "Child Growth Calculator | GrowthKid": "子どもの成長計算ツール | GrowthKid",
      "Calculator": "計算ツール",
      "Growth Charts": "成長曲線",
      "Articles": "記事",
      "About": "GrowthKidについて",
      "Language": "言語",
      "Language selector": "言語を選択",
      "Start Calculator": "計算を始める",
      "Start calculator": "計算を始める",
      "View Growth Charts": "成長曲線を見る",
      "View charts": "曲線を見る",
      "Track Your Child's Growth Using WHO Growth Standards": "WHO基準でお子さまの成長を確認",
      "Measure growth, calculate z-scores, and monitor development in seconds.": "測定値を入力すると、Zスコアと成長の傾向をすばやく確認できます。",
      "Date of Birth": "生年月日",
      "Measurement Date": "測定日",
      "Sex": "性別",
      "Boy": "男の子",
      "Girl": "女の子",
      "Weight (kg)": "体重（kg）",
      "Height (cm)": "身長（cm）",
      "Head Circumference (cm)": "頭囲（cm）",
      "Optional": "任意",
      "Calculate Growth": "成長結果を見る",
      "Growth Results": "成長結果",
      "View results page": "結果ページを見る",
      "Overview": "概要",
      "Weight": "体重",
      "Height": "身長",
      "BMI": "BMI",
      "Weight-for-age": "年齢別体重",
      "Height-for-age": "年齢別身長",
      "Weight-for-height": "身長別体重",
      "BMI-for-age": "年齢別BMI",
      "Head circumference": "頭囲",
      "Z-score": "Zスコア",
      "Percentile": "パーセンタイル",
      "Status": "判定",
      "Normal": "標準的な範囲内",
      "Monitor": "経過を見守る",
      "Consult": "相談",
      "Consult a healthcare professional": "医療専門職に相談",
      "Not available": "参照データなし",
      "Not entered": "未入力",
      "Interpretation": "結果の見方",
      "Add this measurement to calculate a z-score and percentile.": "この測定値を入力すると、Zスコアとパーセンタイルを確認できます。",
      "About z-score": "Zスコアについて",
      "Normal: -2 to +2.": "標準範囲：-2から+2。",
      "Monitor: below -2 or above +2.": "経過観察：-2未満または+2超。",
      "Consult: below -3 or above +3.": "相談目安：-3未満または+3超。",
      "Learn about WHO standards": "WHO基準について",
      "Age (months)": "月齢",
      "Measurement on": "測定日",
      "year": "歳",
      "years": "歳",
      "month": "か月",
      "months": "か月",
      "WHO Child Growth Standards 2006": "WHO子ども成長基準 2006",
      "WHO Growth Reference 2007": "WHO成長参照 2007",
      "WHO weight-for-age reference data are available from 5 to 10 years only.": "WHOの年齢別体重データは5歳から10歳までのみ利用できます。",
      "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years.": "WHO成長参照2007には、5-19歳の年齢別頭囲は含まれていません。",
      "WHO does not provide this reference for the selected age range.": "選択した年齢範囲では、WHOの参照データが提供されていません。",
      "This result is within the typical range for age and sex. Keep tracking growth over time.": "この結果は、年齢と性別から見て標準的な範囲内です。今後も推移を見ていきましょう。",
      "This result is outside the typical range. Recheck the measurement and monitor the trend over time.": "この結果は標準的な範囲から外れています。測定値を確認し、次回以降の変化も見てください。",
      "This result is far from the reference range. Consider discussing it with a healthcare professional.": "この結果は参照範囲から大きく離れています。医療専門職に相談することをおすすめします。",
      "Please enter weight and height.": "体重と身長を入力してください。",
      "Measurement date must be after date of birth.": "測定日は生年月日より後の日付にしてください。"
    }
  };

  Object.entries(humanToneTranslations).forEach(([language, values]) => {
    translations[language] = { ...(translations[language] || {}), ...values };
  });

  const experienceTranslations = {
    es: {
      "Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.": "Compatible con los estándares de crecimiento infantil de la OMS para 0-5 años y la referencia OMS 2007 para 5-19 años. El peso para la edad solo está disponible hasta los 10 años en la referencia OMS 2007.",
      "Download report": "Descargar informe",
      "Download PNG": "Descargar PNG",
      "Share snapshot": "Compartir imagen",
      "Save to trend": "Guardar en la tendencia",
      "Growth snapshot": "Imagen del crecimiento",
      "No child name is included. The downloadable PNG is designed for private sharing with family or a clinician.": "No se incluye el nombre del niño. El PNG descargable está pensado para compartirlo de forma privada con la familia o con un profesional sanitario.",
      "Saved measurements": "Mediciones guardadas",
      "Stored on this device only. Trends are more useful than one isolated point.": "Guardado solo en este dispositivo. La tendencia suele ser más útil que una medición aislada.",
      "Questions to ask at the next visit": "Preguntas para la próxima consulta",
      "Shareable growth snapshots": "Imágenes de crecimiento fáciles de compartir",
      "Trend tracker": "Seguimiento de tendencia",
      "Embed the calculator": "Insertar la calculadora",
      "What parents can learn from a child growth calculator": "Qué pueden aprender los padres con una calculadora de crecimiento infantil",
      "Age in months": "Edad en meses"
    },
    hi: {
      "Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.": "0-5 वर्ष के लिए WHO बाल विकास मानक और 5-19 वर्ष के लिए WHO Growth Reference 2007 समर्थित हैं. WHO 2007 में उम्र के अनुसार वजन केवल 10 वर्ष तक उपलब्ध है.",
      "Download report": "रिपोर्ट डाउनलोड करें",
      "Download PNG": "PNG डाउनलोड करें",
      "Share snapshot": "चित्र साझा करें",
      "Save to trend": "रुझान में सेव करें",
      "Growth snapshot": "विकास का चित्र",
      "No child name is included. The downloadable PNG is designed for private sharing with family or a clinician.": "इसमें बच्चे का नाम शामिल नहीं है. डाउनलोड होने वाला PNG परिवार या डॉक्टर से निजी रूप से साझा करने के लिए बनाया गया है.",
      "Saved measurements": "सेव किए गए माप",
      "Stored on this device only. Trends are more useful than one isolated point.": "यह केवल इसी डिवाइस पर सेव होता है. एक अकेले माप से ज्यादा उपयोगी समय के साथ दिखने वाला रुझान होता है.",
      "Questions to ask at the next visit": "अगली मुलाकात में पूछने लायक सवाल",
      "Shareable growth snapshots": "साझा करने योग्य विकास चित्र",
      "Trend tracker": "रुझान ट्रैकर",
      "Embed the calculator": "कैलकुलेटर एम्बेड करें",
      "What parents can learn from a child growth calculator": "बाल विकास कैलकुलेटर से माता-पिता क्या समझ सकते हैं",
      "Age in months": "महीनों में उम्र"
    },
    id: {
      "Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.": "Mendukung Standar Pertumbuhan Anak WHO untuk 0-5 tahun dan Referensi Pertumbuhan WHO 2007 untuk 5-19 tahun. Berat menurut usia pada WHO 2007 tersedia sampai usia 10 tahun.",
      "Download report": "Unduh laporan",
      "Download PNG": "Unduh PNG",
      "Share snapshot": "Bagikan gambar",
      "Save to trend": "Simpan ke tren",
      "Growth snapshot": "Gambar hasil pertumbuhan",
      "No child name is included. The downloadable PNG is designed for private sharing with family or a clinician.": "Nama anak tidak dicantumkan. PNG yang diunduh dirancang untuk dibagikan secara pribadi kepada keluarga atau tenaga kesehatan.",
      "Saved measurements": "Pengukuran tersimpan",
      "Stored on this device only. Trends are more useful than one isolated point.": "Tersimpan hanya di perangkat ini. Tren biasanya lebih bermanfaat daripada satu titik pengukuran saja.",
      "Questions to ask at the next visit": "Pertanyaan untuk kunjungan berikutnya",
      "Shareable growth snapshots": "Gambar pertumbuhan yang mudah dibagikan",
      "Trend tracker": "Pelacak tren",
      "Embed the calculator": "Sematkan kalkulator",
      "What parents can learn from a child growth calculator": "Yang bisa dipahami orang tua dari kalkulator pertumbuhan anak",
      "Age in months": "Usia dalam bulan"
    },
    fr: {
      "Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.": "Compatible avec les normes OMS de croissance de l'enfant pour 0-5 ans et la référence OMS 2007 pour 5-19 ans. Le poids-pour-l'âge est disponible jusqu'à 10 ans dans la référence OMS 2007.",
      "Download report": "Télécharger le rapport",
      "Download PNG": "Télécharger le PNG",
      "Share snapshot": "Partager l'image",
      "Save to trend": "Enregistrer dans la tendance",
      "Growth snapshot": "Image de croissance",
      "No child name is included. The downloadable PNG is designed for private sharing with family or a clinician.": "Le nom de l'enfant n'apparaît pas. Le PNG téléchargeable est conçu pour un partage privé avec la famille ou un professionnel de santé.",
      "Saved measurements": "Mesures enregistrées",
      "Stored on this device only. Trends are more useful than one isolated point.": "Enregistré uniquement sur cet appareil. Une tendance est souvent plus utile qu'une mesure isolée.",
      "Questions to ask at the next visit": "Questions à poser lors de la prochaine consultation",
      "Shareable growth snapshots": "Images de croissance faciles à partager",
      "Trend tracker": "Suivi de tendance",
      "Embed the calculator": "Intégrer le calculateur",
      "What parents can learn from a child growth calculator": "Ce qu'un calculateur de croissance peut apprendre aux parents",
      "Age in months": "Âge en mois"
    },
    pt: {
      "Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.": "Compatível com os Padrões de Crescimento Infantil da OMS para 0-5 anos e com a Referência OMS 2007 para 5-19 anos. Peso por idade está disponível até 10 anos na OMS 2007.",
      "Download report": "Baixar relatório",
      "Download PNG": "Baixar PNG",
      "Share snapshot": "Compartilhar imagem",
      "Save to trend": "Salvar na tendência",
      "Growth snapshot": "Imagem do crescimento",
      "No child name is included. The downloadable PNG is designed for private sharing with family or a clinician.": "O nome da criança não aparece. O PNG baixado foi pensado para compartilhamento privado com a família ou com um profissional de saúde.",
      "Saved measurements": "Medições salvas",
      "Stored on this device only. Trends are more useful than one isolated point.": "Salvo apenas neste dispositivo. A tendência costuma ser mais útil do que uma medida isolada.",
      "Questions to ask at the next visit": "Perguntas para a próxima consulta",
      "Shareable growth snapshots": "Imagens de crescimento fáceis de compartilhar",
      "Trend tracker": "Acompanhamento de tendência",
      "Embed the calculator": "Incorporar a calculadora",
      "What parents can learn from a child growth calculator": "O que os pais podem aprender com uma calculadora de crescimento infantil",
      "Age in months": "Idade em meses"
    },
    ar: {
      "Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.": "يدعم معايير نمو الطفل لمنظمة الصحة العالمية لعمر 0-5 سنوات ومرجع النمو 2007 لعمر 5-19 سنة. الوزن حسب العمر متاح حتى 10 سنوات فقط في مرجع WHO 2007.",
      "Download report": "تنزيل التقرير",
      "Download PNG": "تنزيل PNG",
      "Share snapshot": "مشاركة الصورة",
      "Save to trend": "حفظ في الاتجاه",
      "Growth snapshot": "صورة ملخص النمو",
      "No child name is included. The downloadable PNG is designed for private sharing with family or a clinician.": "لا يتضمن الملف اسم الطفل. صُممت صورة PNG القابلة للتنزيل للمشاركة الخاصة مع العائلة أو الطبيب.",
      "Saved measurements": "القياسات المحفوظة",
      "Stored on this device only. Trends are more useful than one isolated point.": "تُحفظ على هذا الجهاز فقط. متابعة الاتجاه عادةً أكثر فائدة من قراءة واحدة منفصلة.",
      "Questions to ask at the next visit": "أسئلة لطرحها في الزيارة القادمة",
      "Shareable growth snapshots": "صور نمو سهلة المشاركة",
      "Trend tracker": "متابعة الاتجاه",
      "Embed the calculator": "تضمين الحاسبة",
      "What parents can learn from a child growth calculator": "ما الذي يمكن للوالدين فهمه من حاسبة نمو الطفل",
      "Age in months": "العمر بالأشهر"
    },
    zh: {
      "Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.": "支持 WHO 0-5 岁儿童生长标准，以及 WHO 2007 年 5-19 岁生长参考。WHO 2007 的年龄别体重仅适用于 10 岁以内。",
      "Download report": "下载报告",
      "Download PNG": "下载 PNG",
      "Share snapshot": "分享图片",
      "Save to trend": "保存到趋势",
      "Growth snapshot": "生长结果图片",
      "No child name is included. The downloadable PNG is designed for private sharing with family or a clinician.": "图片不会包含孩子姓名。下载的 PNG 适合私下分享给家人或医生。",
      "Saved measurements": "已保存的测量记录",
      "Stored on this device only. Trends are more useful than one isolated point.": "仅保存在此设备上。长期趋势通常比单次测量更有参考价值。",
      "Questions to ask at the next visit": "下次就诊可询问的问题",
      "Shareable growth snapshots": "便于分享的生长结果图片",
      "Trend tracker": "趋势跟踪",
      "Embed the calculator": "嵌入计算器",
      "What parents can learn from a child growth calculator": "家长可以从儿童生长计算器了解什么",
      "Age in months": "月龄"
    },
    ja: {
      "Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.": "0-5歳はWHO子ども成長基準、5-19歳はWHO成長参照2007に対応しています。WHO 2007の年齢別体重は10歳まで利用できます。",
      "Download report": "レポートをダウンロード",
      "Download PNG": "PNGをダウンロード",
      "Share snapshot": "画像を共有",
      "Save to trend": "推移に保存",
      "Growth snapshot": "成長結果の画像",
      "No child name is included. The downloadable PNG is designed for private sharing with family or a clinician.": "お子さまの名前は含まれません。ダウンロードできるPNGは、ご家族や医療者と個別に共有するためのものです。",
      "Saved measurements": "保存した測定値",
      "Stored on this device only. Trends are more useful than one isolated point.": "この端末にのみ保存されます。単独の測定値よりも、推移を見ることが役立ちます。",
      "Questions to ask at the next visit": "次回の受診で相談したいこと",
      "Shareable growth snapshots": "共有しやすい成長結果画像",
      "Trend tracker": "推移トラッカー",
      "Embed the calculator": "計算ツールを埋め込む",
      "What parents can learn from a child growth calculator": "子どもの成長計算ツールで保護者が確認できること",
      "Age in months": "月齢"
    }
  };

  Object.entries(experienceTranslations).forEach(([language, values]) => {
    translations[language] = { ...(translations[language] || {}), ...values };
  });

  const actionTranslations = {
    es: {
      "Clear": "Borrar"
    },
    hi: {
      "Clear": "हटाएँ",
      "Copy questions": "सवाल कॉपी करें",
      "Copy embed code": "एम्बेड कोड कॉपी करें"
    },
    id: {
      "Clear": "Hapus"
    },
    fr: {
      "Clear": "Effacer",
      "Copy questions": "Copier les questions",
      "Copy embed code": "Copier le code d'intégration"
    },
    pt: {
      "Clear": "Limpar",
      "Copy questions": "Copiar perguntas",
      "Copy embed code": "Copiar código de incorporação"
    },
    ar: {
      "Clear": "مسح",
      "Copy questions": "نسخ الأسئلة",
      "Copy embed code": "نسخ كود التضمين"
    },
    zh: {
      "Clear": "清除",
      "Copy questions": "复制问题",
      "Copy embed code": "复制嵌入代码"
    },
    ja: {
      "Clear": "消去",
      "Copy questions": "質問をコピー",
      "Copy embed code": "埋め込みコードをコピー"
    }
  };

  Object.entries(actionTranslations).forEach(([language, values]) => {
    translations[language] = { ...(translations[language] || {}), ...values };
  });

  const pnTranslations = {
    vi: {
      "Parenteral Nutrition": "Pha d&#7883;ch nu&#244;i &#259;n t&#297;nh m&#7841;ch",
      "Neonatal Bilirubin": "&#272;&#225;nh gi&#225; bilirubin s&#417; sinh",
      "Neonatal Bilirubin Assessment | GrowthKid": "&#272;&#225;nh gi&#225; bilirubin s&#417; sinh | GrowthKid",
      "Neonatal Bilirubin Assessment": "&#272;&#225;nh gi&#225; bilirubin s&#417; sinh",
      "A newborn bilirubin assessment workspace is being prepared for the next task.": "Khu v&#7921;c &#273;&#225;nh gi&#225; bilirubin s&#417; sinh &#273;ang &#273;&#432;&#7907;c chu&#7849;n b&#7883; cho task ti&#7871;p theo.",
      "Feature placeholder": "M&#7909;c ch&#7901; t&#237;nh n&#259;ng",
      "What will be added next": "Ph&#7847;n s&#7869; b&#7893; sung ti&#7871;p",
      "Age in hours": "Tu&#7893;i theo gi&#7901;",
      "Bilirubin value": "Gi&#225; tr&#7883; bilirubin",
      "Risk and follow-up guidance": "&#272;&#225;nh gi&#225; nguy c&#417; v&#224; g&#7907;i &#253; theo d&#245;i",
      "This page is ready for the bilirubin calculator details you will provide later.": "Trang n&#224;y &#273;&#227; s&#7861;n s&#224;ng &#273;&#7875; nh&#7853;n chi ti&#7871;t calculator bilirubin b&#7841;n s&#7869; g&#7917;i sau.",
      "Related tools": "C&#244;ng c&#7909; li&#234;n quan",
      "Pediatric Parenteral Nutrition Calculator | GrowthKid": "Pha d&#7883;ch nu&#244;i &#259;n t&#297;nh m&#7841;ch | GrowthKid",
      "Pediatric Parenteral Nutrition Calculator": "Pha d&#7883;ch nu&#244;i &#259;n t&#297;nh m&#7841;ch",
      "Calculate daily maintenance fluid, main bag, separate lipid infusion, electrolytes, calories, and GIR for children.": "T&#237;nh d&#7883;ch duy tr&#236;, t&#250;i ch&#237;nh, lipid truy&#7873;n ri&#234;ng, &#273;i&#7879;n gi&#7843;i, n&#259;ng l&#432;&#7907;ng v&#224; GIR cho tr&#7867; em.",
      "Safety note": "L&#432;u &#253; an to&#224;n",
      "This calculator supports calculations only. It does not replace medical orders, pharmacy compounding protocols, laboratory review, or clinical assessment.": "C&#244;ng c&#7909; ch&#7881; h&#7895; tr&#7907; t&#237;nh to&#225;n. Kh&#244;ng thay th&#7871; y l&#7879;nh, quy tr&#236;nh pha ch&#7871; khoa d&#432;&#7907;c, x&#233;t nghi&#7879;m v&#224; &#273;&#225;nh gi&#225; l&#226;m s&#224;ng.",
      "Calculate main bag and separate lipid": "T&#237;nh t&#250;i ch&#237;nh v&#224; lipid truy&#7873;n ri&#234;ng",
      "Defaults are calculated over 24 hours. Lipid 20% is calculated as a separate infusion and is not included in the main bag table.": "M&#7863;c &#273;&#7883;nh t&#237;nh cho 24 gi&#7901;. Lipid 20% &#273;&#432;&#7907;c t&#237;nh truy&#7873;n ri&#234;ng, kh&#244;ng n&#7857;m trong b&#7843;ng t&#250;i ch&#237;nh.",
      "Mode 1: NaCl 0.9% fills remaining volume": "Mode 1: NaCl 0.9% b&#249; th&#7875; t&#237;ch",
      "Mode 2: Prioritize target sodium": "Mode 2: &#431;u ti&#234;n &#273;&#250;ng Na m&#7909;c ti&#234;u",
      "Weight (kg)": "C&#226;n n&#7863;ng (kg)",
      "Protein (g/kg/day)": "&#272;&#7841;m (g/kg/ng&#224;y)",
      "Lipid (g/kg/day)": "Lipid (g/kg/ng&#224;y)",
      "Na (mEq/kg/day)": "Na (mEq/kg/ng&#224;y)",
      "K (mEq/kg/day)": "K (mEq/kg/ng&#224;y)",
      "Ca (mEq/kg/day)": "Ca (mEq/kg/ng&#224;y)",
      "Target glucose in main bag (%)": "Glucose m&#7909;c ti&#234;u trong t&#250;i ch&#237;nh (%)",
      "Compound volume for scaling (mL)": "Th&#7875; t&#237;ch mu&#7889;n pha tam su&#7845;t (mL)",
      "Calculate PN": "T&#237;nh pha d&#7883;ch",
      "PN results": "K&#7871;t qu&#7843; pha d&#7883;ch",
      "Mode": "Ch&#7871; &#273;&#7897;",
      "Mode 1: NaCl 0.9% fill": "Mode 1: NaCl 0.9% b&#249;",
      "Mode 2: target sodium": "Mode 2: Na m&#7909;c ti&#234;u",
      "Total fluid": "T&#7893;ng d&#7883;ch",
      "Main bag": "T&#250;i ch&#237;nh",
      "Main bag rate": "T&#7889;c &#273;&#7897; t&#250;i ch&#237;nh",
      "Total main bag": "T&#7893;ng t&#250;i ch&#237;nh",
      "Main bag infusion rate": "T&#7889;c &#273;&#7897; truy&#7873;n t&#250;i ch&#237;nh",
      "Final glucose concentration": "N&#7891;ng &#273;&#7897; glucose cu&#7889;i c&#249;ng",
      "Scaled compound": "Tam su&#7845;t pha",
      "Total compound": "T&#7893;ng pha",
      "Scale ratio": "T&#7927; l&#7879; quy &#273;&#7893;i",
      "Separate lipid infusion": "Lipid truy&#7873;n ri&#234;ng",
      "Lipid rate": "T&#7889;c &#273;&#7897; truy&#7873;n lipid",
      "Lipid calories": "N&#259;ng l&#432;&#7907;ng lipid",
      "Electrolytes": "&#272;i&#7879;n gi&#7843;i",
      "Target Na": "Na m&#7909;c ti&#234;u",
      "Actual Na": "Na th&#7921;c nh&#7853;n",
      "Na from NaCl 0.9%": "Na t&#7915; NaCl 0.9%",
      "Na from NaCl 10%": "Na t&#7915; NaCl 10%",
      "Target K": "K m&#7909;c ti&#234;u",
      "Target Ca": "Ca m&#7909;c ti&#234;u",
      "Total Cl": "T&#7893;ng Cl",
      "Calories": "N&#259;ng l&#432;&#7907;ng",
      "Glucose": "Glucose",
      "Protein": "&#272;&#7841;m",
      "Total calories": "T&#7893;ng n&#259;ng l&#432;&#7907;ng",
      "Warnings to review": "C&#7843;nh b&#225;o c&#7847;n ki&#7875;m tra"
    }
  };

  Object.entries(pnTranslations).forEach(([language, values]) => {
    translations[language] = { ...(translations[language] || {}), ...values };
  });

  const referenceComparisonTranslations = {
    vi: {
      "WHO 50th percentile reference": "M&#7889;c tham chi&#7871;u WHO 50th percentile",
      "A quick comparison with the WHO median for this age and sex. This is a reference point, not a required target.": "So s&#225;nh nhanh v&#7899;i trung v&#7883; WHO theo tu&#7893;i v&#224; gi&#7899;i t&#237;nh. &#272;&#226;y l&#224; m&#7889;c tham chi&#7871;u, kh&#244;ng ph&#7843;i m&#7909;c ti&#234;u b&#7855;t bu&#7897;c.",
      "Current": "Hi&#7879;n t&#7841;i",
      "Reference": "Tham chi&#7871;u",
      "Difference": "Ch&#234;nh l&#7879;ch",
      "WHO reference is not available for this age.": "WHO kh&#244;ng c&#243; m&#7889;c tham chi&#7871;u cho &#273;&#7897; tu&#7893;i n&#224;y.",
      "Compared with WHO median": "So v&#7899;i trung v&#7883; WHO"
    },
    es: {
      "WHO 50th percentile reference": "Referencia OMS del percentil 50",
      "A quick comparison with the WHO median for this age and sex. This is a reference point, not a required target.": "Comparaci&#243;n r&#225;pida con la mediana OMS para esta edad y sexo. Es una referencia, no una meta obligatoria.",
      "Current": "Actual",
      "Reference": "Referencia",
      "Difference": "Diferencia",
      "WHO reference is not available for this age.": "No hay referencia OMS disponible para esta edad.",
      "Compared with WHO median": "Comparado con la mediana OMS"
    },
    hi: {
      "WHO 50th percentile reference": "WHO 50th percentile संदर्भ",
      "A quick comparison with the WHO median for this age and sex. This is a reference point, not a required target.": "इस उम्र और लिंग के WHO median से आसान तुलना। यह सिर्फ संदर्भ है, जरूरी लक्ष्य नहीं।",
      "Current": "मौजूदा",
      "Reference": "संदर्भ",
      "Difference": "अंतर",
      "WHO reference is not available for this age.": "इस उम्र के लिए WHO संदर्भ उपलब्ध नहीं है।",
      "Compared with WHO median": "WHO median से तुलना"
    },
    id: {
      "WHO 50th percentile reference": "Acuan persentil ke-50 WHO",
      "A quick comparison with the WHO median for this age and sex. This is a reference point, not a required target.": "Perbandingan cepat dengan median WHO untuk usia dan jenis kelamin ini. Ini acuan, bukan target wajib.",
      "Current": "Saat ini",
      "Reference": "Acuan",
      "Difference": "Selisih",
      "WHO reference is not available for this age.": "Acuan WHO tidak tersedia untuk usia ini.",
      "Compared with WHO median": "Dibandingkan dengan median WHO"
    },
    fr: {
      "WHO 50th percentile reference": "R&#233;f&#233;rence OMS du 50e percentile",
      "A quick comparison with the WHO median for this age and sex. This is a reference point, not a required target.": "Comparaison rapide avec la m&#233;diane OMS pour cet &#226;ge et ce sexe. C'est un rep&#232;re, pas un objectif obligatoire.",
      "Current": "Actuel",
      "Reference": "R&#233;f&#233;rence",
      "Difference": "&#201;cart",
      "WHO reference is not available for this age.": "La r&#233;f&#233;rence OMS n'est pas disponible pour cet &#226;ge.",
      "Compared with WHO median": "Compar&#233; &#224; la m&#233;diane OMS"
    },
    pt: {
      "WHO 50th percentile reference": "Refer&#234;ncia OMS do percentil 50",
      "A quick comparison with the WHO median for this age and sex. This is a reference point, not a required target.": "Compara&#231;&#227;o r&#225;pida com a mediana OMS para esta idade e sexo. &#201; uma refer&#234;ncia, n&#227;o uma meta obrigat&#243;ria.",
      "Current": "Atual",
      "Reference": "Refer&#234;ncia",
      "Difference": "Diferen&#231;a",
      "WHO reference is not available for this age.": "A refer&#234;ncia OMS n&#227;o est&#225; dispon&#237;vel para esta idade.",
      "Compared with WHO median": "Comparado com a mediana OMS"
    },
    ar: {
      "WHO 50th percentile reference": "مرجع منظمة الصحة العالمية للمئين 50",
      "A quick comparison with the WHO median for this age and sex. This is a reference point, not a required target.": "مقارنة سريعة مع وسيط منظمة الصحة العالمية لهذا العمر والجنس. هذا مرجع فقط وليس هدفا إلزاميا.",
      "Current": "الحالي",
      "Reference": "المرجع",
      "Difference": "الفرق",
      "WHO reference is not available for this age.": "مرجع منظمة الصحة العالمية غير متاح لهذا العمر.",
      "Compared with WHO median": "مقارنة بوسيط منظمة الصحة العالمية"
    },
    zh: {
      "WHO 50th percentile reference": "WHO第50百分位参考值",
      "A quick comparison with the WHO median for this age and sex. This is a reference point, not a required target.": "与相同年龄和性别的WHO中位数快速比较。这只是参考值，不是必须达到的目标。",
      "Current": "当前",
      "Reference": "参考值",
      "Difference": "差值",
      "WHO reference is not available for this age.": "WHO未提供该年龄的参考值。",
      "Compared with WHO median": "与WHO中位数比较"
    },
    ja: {
      "WHO 50th percentile reference": "WHO 50パーセンタイル基準",
      "A quick comparison with the WHO median for this age and sex. This is a reference point, not a required target.": "この年齢と性別のWHO中央値との簡単な比較です。これは目安であり、必ず達成すべき目標ではありません。",
      "Current": "現在",
      "Reference": "目安",
      "Difference": "差",
      "WHO reference is not available for this age.": "この年齢のWHO基準は利用できません。",
      "Compared with WHO median": "WHO中央値との比較"
    }
  };

  Object.entries(referenceComparisonTranslations).forEach(([language, values]) => {
    translations[language] = { ...(translations[language] || {}), ...values };
  });

  const nutritionNavTranslations = {
    vi: "Dinh dưỡng",
    es: "Nutrición",
    hi: "पोषण",
    id: "Nutrisi",
    fr: "Nutrition",
    pt: "Nutrição",
    ar: "التغذية",
    zh: "营养",
    ja: "栄養"
  };

  Object.entries(nutritionNavTranslations).forEach(([language, value]) => {
    translations[language] = { ...(translations[language] || {}), Nutrition: value };
  });

  translations.vi = {
    ...(translations.vi || {}),
    "Nutrition Product Guide | GrowthKid": "Hướng dẫn chọn sản phẩm dinh dưỡng | GrowthKid"
  };

  let activeLanguage = languageFromPath() || readLanguage();
  let formDraft = null;
  let resultsVisible = page === "results" || page === "charts";
  let lastChartIndicator = "height";
  let growth3dCleanup = null;
  let ambientPointerCleanup = null;
  let navigationEventsController = null;
  let growth3dGeneration = 0;

  const navItems = [
    { label: "Calculator", href: "/child-growth-calculator/" },
    { label: "Growth Charts", href: "/growth-charts/" },
    { label: "Articles", href: "/articles/" },
    { label: "Nutrition", href: "/nutrition/" },
    { label: "About", href: "/about/" },
    { label: "Parenteral Nutrition", href: "/parenteral-nutrition-calculator/" },
    { label: "Neonatal Bilirubin", href: "/neonatal-bilirubin-assessment/" }
  ];

  const tools = [
    { label: "Child Growth Calculator", href: "/child-growth-calculator/" },
    { label: "BMI Calculator for Kids", href: "/bmi-calculator-for-kids/" },
    { label: "Weight-for-age Calculator", href: "/weight-for-age-calculator/" },
    { label: "Height-for-age Calculator", href: "/height-for-age-calculator/" },
    { label: "Head Circumference Calculator", href: "/head-circumference-calculator/" }
  ];

  const articles = [
    {
      tag: "Growth charts",
      title: "How to read child growth percentiles",
      text: "A simple guide to percentile lines, z-scores, and when a trend needs closer attention.",
      href: "/how-to-read-a-growth-chart/"
    },
    {
      tag: "WHO standards",
      title: "What WHO growth standards measure",
      text: "Understand weight-for-age, height-for-age, BMI-for-age, and why age in months matters.",
      href: "/who-vs-cdc-growth-charts/"
    },
    {
      tag: "Parents",
      title: "What to prepare before a growth check",
      text: "Measurement tips for dates, height, weight, and follow-up conversations with a clinician.",
      href: "/is-my-babys-weight-normal/"
    }
  ];

  const seoQuestionPages = {
    "baby-weight-percentile": {
      eyebrow: "Baby weight percentile calculator",
      title: "Baby weight percentile calculator",
      copy: "Estimate a baby's weight percentile, then review the result with age, sex, and trend context.",
      intro: "Parents often search for a quick baby weight percentile check. A safer experience explains that the number is a starting point, not a diagnosis.",
      points: ["Enter date of birth, measurement date, sex, weight, and height.", "Review the percentile together with z-score and chart context.", "Save the measurement to the trend tracker if you want to compare future checks."],
      faq: [
        ["Is a low percentile always bad?", "Not always. Consistent growth along a curve can be normal, while sudden changes deserve closer review."],
        ["Should I use WHO or CDC charts?", "WHO standards are commonly used for young children, while CDC charts are often used for older children in the United States."],
        ["Can I share the result?", "Use the snapshot download or share button, and avoid including personal identifiers."]
      ]
    },
    "is-baby-weight-normal": {
      eyebrow: "Parent question",
      title: "Is my baby's weight normal?",
      copy: "A parent-friendly guide to interpreting baby weight without overreacting to one number.",
      intro: "A single weight measurement is only one signal. Age, sex, birth history, recent illness, feeding, and trend all matter.",
      points: ["Check the measurement date and age in months.", "Compare the point with prior measurements when available.", "Talk to a pediatrician if the result is extreme or the trend changes quickly."],
      faq: [
        ["What matters more: percentile or trend?", "Trend usually gives more context than one percentile point."],
        ["What if my baby is above the 97th percentile?", "Recheck the measurement and discuss persistent high results with a clinician."],
        ["What if my baby is below the 3rd percentile?", "Recheck the measurement and seek professional guidance, especially if growth has slowed."]
      ]
    },
    "who-vs-cdc": {
      eyebrow: "Growth chart guide",
      title: "WHO vs CDC growth charts",
      copy: "Understand when parents may see WHO standards and CDC charts mentioned in growth tracking.",
      intro: "Different health systems may refer to different chart sets by age and market. The key is to compare measurements with the correct reference and review trends over time.",
      points: ["WHO standards are widely used for early childhood growth assessment.", "CDC charts are commonly referenced in the United States for older children.", "Do not mix chart systems when comparing a child's trend."],
      faq: [
        ["Why do chart systems differ?", "They are built from different reference populations and methods."],
        ["Can results change between systems?", "Yes, a percentile can differ if the reference changes."],
        ["Which should I trust?", "Follow the chart system your clinician uses for your child's age and country."]
      ]
    },
    "read-growth-chart": {
      eyebrow: "Growth chart guide",
      title: "How to read a child growth chart",
      copy: "Learn the basics of percentile curves, z-scores, and why repeated measurements are more useful than one point.",
      intro: "Growth charts are visual tools. They help parents and clinicians see whether a child is generally following a stable path over time.",
      points: ["The current point shows one measurement at one age.", "Percentile curves help compare a child's position with a reference population.", "A trend line across multiple visits is more useful than a single point."],
      faq: [
        ["What is the 50th percentile?", "It is the reference median, not a target every child must hit."],
        ["What is a z-score?", "It estimates how far a measurement is from the reference median."],
        ["When should I worry?", "Discuss sudden changes, extreme values, or symptoms with a qualified healthcare professional."]
      ]
    }
  };

  const pageConfig = {
    home: {
      title: "Track Your Child's Growth Using WHO Growth Standards",
      copy: "Measure growth, calculate z-scores, and monitor development in seconds.",
      eyebrow: "Child Growth Calculator"
    },
    calculator: {
      title: "Child Growth Calculator",
      copy: "Calculate weight-for-age, height-for-age, BMI-for-age, and view a clean growth chart in one flow.",
      eyebrow: "WHO-based growth assessment"
    },
    bmi: {
      title: "BMI Calculator for Kids",
      copy: "Estimate BMI-for-age z-score and percentile, then compare the result with a growth chart.",
      eyebrow: "BMI-for-age"
    },
    weight: {
      title: "Weight-for-age Calculator",
      copy: "Check how a child's weight compares with age-based growth references.",
      eyebrow: "Weight-for-age"
    },
    height: {
      title: "Height-for-age Calculator",
      copy: "Assess height-for-age, z-score, percentile, and growth trend in a parent-friendly layout.",
      eyebrow: "Height-for-age"
    },
    head: {
      title: "Head Circumference Calculator",
      copy: "Track head circumference-for-age together with other growth measurements.",
      eyebrow: "Head circumference"
    },
    pn: {
      title: "Pediatric Parenteral Nutrition Calculator",
      copy: "Calculate daily maintenance fluid, main bag, separate lipid infusion, electrolytes, calories, and GIR for children.",
      eyebrow: "Parenteral nutrition calculator"
    }
  };

  const pnProducts = {
    NaCl09: { label: "NaCl 0.9%", Na: 0.154, Cl: 0.154 },
    NaCl10: { label: "NaCl 10%", Na: 1.71, Cl: 1.71 },
    KCl10: { label: "KCl 10%", K: 1.34, Cl: 1.34 },
    CaCl2_10: { label: "CaCl2 10%", Ca: 1.4, Cl: 1.4 },
    D10: { label: "D10", glucose: 0.10 },
    D30: { label: "D30", glucose: 0.30 },
    Lipid20: { label: "Lipid 20%", lipid: 0.20, kcal: 2 }
  };

  const refs = {
    boy: {
      weight: [
        [0, 3.3], [3, 6.4], [6, 7.9], [9, 8.9], [12, 9.6], [18, 10.9],
        [24, 12.2], [36, 14.3], [48, 16.3], [60, 18.3]
      ],
      height: [
        [0, 49.9], [3, 61.4], [6, 67.6], [9, 72.0], [12, 75.7], [18, 82.3],
        [24, 87.8], [36, 96.1], [48, 103.3], [60, 110.0]
      ],
      bmi: [
        [0, 13.4], [3, 17.0], [6, 17.3], [9, 17.1], [12, 16.8], [18, 16.1],
        [24, 15.7], [36, 15.4], [48, 15.3], [60, 15.2]
      ],
      head: [
        [0, 34.5], [3, 40.5], [6, 43.3], [9, 45.0], [12, 46.1], [18, 47.4],
        [24, 48.3], [36, 49.5], [48, 50.2], [60, 50.7]
      ]
    },
    girl: {
      weight: [
        [0, 3.2], [3, 5.8], [6, 7.3], [9, 8.2], [12, 8.9], [18, 10.2],
        [24, 11.5], [36, 13.9], [48, 16.1], [60, 18.2]
      ],
      height: [
        [0, 49.1], [3, 59.8], [6, 65.7], [9, 70.1], [12, 74.0], [18, 80.7],
        [24, 86.4], [36, 95.1], [48, 102.7], [60, 109.4]
      ],
      bmi: [
        [0, 13.2], [3, 16.6], [6, 16.9], [9, 16.7], [12, 16.4], [18, 15.9],
        [24, 15.4], [36, 15.3], [48, 15.3], [60, 15.2]
      ],
      head: [
        [0, 33.9], [3, 39.5], [6, 42.2], [9, 43.8], [12, 44.9], [18, 46.2],
        [24, 47.2], [36, 48.5], [48, 49.2], [60, 49.7]
      ]
    }
  };

  const sdRatio = {
    weight: 0.12,
    height: 0.035,
    bmi: 0.08,
    head: 0.025
  };

  const who2007 = window.GROWTHKID_WHO_2007 || null;
  const underFiveMaxMonths = 60;
  const who2007MaxMonths = 228;
  const who2007WeightMaxMonths = 120;

  function readLanguage() {
    try {
      const saved = localStorage.getItem("growthkid:language");
      return languageOptions.some((language) => language.code === saved) ? saved : defaultLanguage;
    } catch (error) {
      return defaultLanguage;
    }
  }

  function saveLanguage(languageCode) {
    try {
      localStorage.setItem("growthkid:language", languageCode);
    } catch (error) {
      return;
    }
  }

  function languageMeta() {
    return languageOptions.find((language) => language.code === activeLanguage) || languageOptions[0];
  }

  function languageFromPath() {
    const firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
    return languageOptions.some((language) => language.code === firstSegment) ? firstSegment : null;
  }

  function pathWithoutLanguagePrefix(pathname) {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length && languageOptions.some((language) => language.code === parts[0])) {
      parts.shift();
    }
    return `/${parts.join("/")}${parts.length ? "/" : ""}`;
  }

  function pathForLanguage(languageCode) {
    const cleanPath = pathWithoutLanguagePrefix(window.location.pathname);
    if (languageCode === defaultLanguage) return cleanPath;
    return `/${languageCode}${cleanPath}`;
  }

  function localizedHref(href) {
    if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) return href;
    if (activeLanguage === defaultLanguage) return href;
    return `/${activeLanguage}${href.startsWith("/") ? href : `/${href}`}`;
  }

  function t(text) {
    if (!text || activeLanguage === defaultLanguage) return text;
    return (translations[activeLanguage] && translations[activeLanguage][text]) || text;
  }

  function template(text, values) {
    return t(text).replace(/\{(\w+)\}/g, (match, key) => (values[key] === undefined ? match : values[key]));
  }

  function decodeHtmlEntities(value) {
    const decoder = document.createElement("textarea");
    decoder.innerHTML = String(value || "");
    return decoder.value;
  }

  function canvasText(text) {
    return decodeHtmlEntities(t(text));
  }

  function languageSelectOptions() {
    return languageOptions.map((language) => `<option value="${language.code}">${language.label}</option>`).join("");
  }

  function syncLanguageControls() {
    document.querySelectorAll(".language-select").forEach((select) => {
      select.value = activeLanguage;
    });
  }

  function setDocumentLanguage() {
    const meta = languageMeta();
    document.documentElement.lang = meta.code;
    document.documentElement.dir = meta.dir;
    document.title = decodeHtmlEntities(t(titleForPage()));
  }

  function applyTranslations() {
    setDocumentLanguage();
    syncLanguageControls();

    if (activeLanguage === defaultLanguage) return;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const original = node.nodeValue;
      const trimmed = original.trim();
      const translated = decodeHtmlEntities(t(trimmed));
      if (translated !== trimmed) {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        node.nodeValue = `${leading}${translated}${trailing}`;
      }
    });

    document.querySelectorAll("[placeholder], [aria-label], [title]").forEach((element) => {
      ["placeholder", "aria-label", "title"].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value) element.setAttribute(attribute, decodeHtmlEntities(t(value)));
      });
    });
  }

  function captureViewState() {
    const form = document.getElementById("growthForm");
    if (form) {
      formDraft = Object.fromEntries(new FormData(form).entries());
    }

    const results = document.getElementById("results");
    if (results) {
      resultsVisible = window.getComputedStyle(results).display !== "none";
    }

    const activeTab = document.querySelector(".chart-tab.is-active");
    if (activeTab && activeTab.dataset.chart) {
      lastChartIndicator = activeTab.dataset.chart;
    }
  }

  function restoreFormDraft() {
    if (!formDraft) return;
    Object.entries(formDraft).forEach(([name, value]) => {
      const input = document.querySelector(`[name="${name}"]`);
      if (input) input.value = value;
    });
  }

  function changeLanguage(languageCode) {
    if (!languageOptions.some((language) => language.code === languageCode)) return;
    captureViewState();
    activeLanguage = languageCode;
    saveLanguage(languageCode);
    const nextPath = pathForLanguage(languageCode);
    if (nextPath !== window.location.pathname && window.history && window.history.replaceState) {
      window.history.replaceState(null, "", `${nextPath}${window.location.search}${window.location.hash}`);
    }
    render();
  }

  function mountVisualEffects() {
    if (growth3dCleanup) {
      growth3dCleanup();
      growth3dCleanup = null;
    }

    const generation = ++growth3dGeneration;
    import("/assets/growth-3d.js")
      .then((module) => {
        if (generation !== growth3dGeneration) return;
        growth3dCleanup = module.mountGrowthScene(document);
      })
      .catch(() => {
        document.documentElement.classList.add("no-webgl-scene");
      });
  }

  function mountAmbientPointerEffects() {
    if (ambientPointerCleanup) {
      ambientPointerCleanup();
      ambientPointerCleanup = null;
    }

    const root = document.documentElement;
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("has-ambient-pointer");
    root.style.setProperty("--ambient-x", "58%");
    root.style.setProperty("--ambient-y", "24%");
    root.style.setProperty("--ambient-shift-x", "0px");
    root.style.setProperty("--ambient-shift-y", "0px");
    root.style.setProperty("--ambient-shift-neg-x", "0px");
    root.style.setProperty("--ambient-shift-neg-y", "0px");

    const depthSelector = [
      ".calculator-card",
      ".result-card",
      ".chart-card",
      ".side-panel",
      ".article-card",
      ".feature-card",
      ".faq-item",
      ".seo-card",
      ".trust-card",
      ".method-card",
      ".education-card",
      ".content-panel",
      ".viral-card",
      ".share-preview",
      ".trend-card",
      ".question-card",
      ".btn",
      ".chart-tab",
      ".nav-links a",
      ".brand"
    ].join(",");

    const depthTargets = Array.from(document.querySelectorAll(depthSelector));
    depthTargets.forEach((target) => target.classList.add("ambient-depth-target"));

    let animationFrame = null;
    let nextPointer = { x: window.innerWidth * 0.58, y: window.innerHeight * 0.24 };

    const applyAmbientPosition = () => {
      const xPercent = clamp(nextPointer.x / Math.max(window.innerWidth, 1) * 100, 0, 100);
      const yPercent = clamp(nextPointer.y / Math.max(window.innerHeight, 1) * 100, 0, 100);
      root.style.setProperty("--ambient-x", `${xPercent.toFixed(2)}%`);
      root.style.setProperty("--ambient-y", `${yPercent.toFixed(2)}%`);
      const shiftX = (xPercent - 50) * 0.42;
      const shiftY = (yPercent - 50) * 0.32;
      root.style.setProperty("--ambient-shift-x", `${shiftX.toFixed(2)}px`);
      root.style.setProperty("--ambient-shift-y", `${shiftY.toFixed(2)}px`);
      root.style.setProperty("--ambient-shift-neg-x", `${(-shiftX).toFixed(2)}px`);
      root.style.setProperty("--ambient-shift-neg-y", `${(-shiftY).toFixed(2)}px`);
      animationFrame = null;
    };

    const onPointerMove = (event) => {
      nextPointer = { x: event.clientX, y: event.clientY };
      if (!animationFrame) animationFrame = window.requestAnimationFrame(applyAmbientPosition);
    };

    const onTargetMove = (event) => {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      target.style.setProperty("--tilt-x", `${(-y * 1.1).toFixed(2)}deg`);
      target.style.setProperty("--tilt-y", `${(x * 1.4).toFixed(2)}deg`);
      target.style.setProperty("--lift-z", "2px");
    };

    const onTargetLeave = (event) => {
      const target = event.currentTarget;
      target.style.setProperty("--tilt-x", "0deg");
      target.style.setProperty("--tilt-y", "0deg");
      target.style.setProperty("--lift-z", "0px");
    };

    if (supportsFinePointer && !reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      depthTargets.forEach((target) => {
        target.addEventListener("pointermove", onTargetMove, { passive: true });
        target.addEventListener("pointerleave", onTargetLeave);
      });
    }

    ambientPointerCleanup = () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      depthTargets.forEach((target) => {
        target.classList.remove("ambient-depth-target");
        target.removeEventListener("pointermove", onTargetMove);
        target.removeEventListener("pointerleave", onTargetLeave);
        target.style.removeProperty("--tilt-x");
        target.style.removeProperty("--tilt-y");
        target.style.removeProperty("--lift-z");
      });
      root.classList.remove("has-ambient-pointer");
      root.style.removeProperty("--ambient-x");
      root.style.removeProperty("--ambient-y");
      root.style.removeProperty("--ambient-shift-x");
      root.style.removeProperty("--ambient-shift-y");
      root.style.removeProperty("--ambient-shift-neg-x");
      root.style.removeProperty("--ambient-shift-neg-y");
    };
  }

  function icon(name) {
    const icons = {
      spark: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l1.9 5.3L19 10.2l-5.1 1.9L12 17.5l-1.9-5.4L5 10.2l5.1-1.9L12 3z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M5 16l.8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8L5 16z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
      menu: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
      arrow: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      chart: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M4 19V5M4 19h16M7 15l3-4 4 2 5-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      shield: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M12 3l7 3v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6l7-3z" stroke="currentColor" stroke-width="2"/><path d="M9 12l2 2 4-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      ruler: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M4 19 19 4l1 1L5 20l-1-1z" stroke="currentColor" stroke-width="2"/><path d="M8 15l2 2M11 12l2 2M14 9l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
      lock: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M7 10V8a5 5 0 0 1 10 0v2M6 10h12v10H6V10z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
      download: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      share: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M8 12h8M16 12l-4-4m4 4-4 4M5 20h14a1 1 0 0 0 1-1v-4M4 15v4a1 1 0 0 0 1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      copy: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M8 8h10v12H8V8zM6 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
    };
    return icons[name] || icons.spark;
  }

  function shell(content) {
    return `
      <div class="app-shell">
        ${navbar()}
        ${content}
        ${footer()}
      </div>
    `;
  }

  function navbar() {
    const currentPath = pathWithoutLanguagePrefix(window.location.pathname);
    const renderNavLink = (item) => {
      const isActive = currentPath === item.href || (item.href !== "/" && currentPath.startsWith(item.href));
      return `<a class="nav-link${isActive ? " is-active" : ""}" href="${localizedHref(item.href)}"${isActive ? ' aria-current="page"' : ""}>${t(item.label)}</a>`;
    };

    return `
      <header class="nav">
        <div class="container nav-inner">
          <a class="brand" href="${localizedHref("/")}" aria-label="GrowthKid home">
            <span class="brand-mark">${icon("spark")}</span>
            <span class="brand-name">GrowthKid</span>
          </a>
          <nav class="nav-links" aria-label="Primary navigation">
            ${navItems.map(renderNavLink).join("")}
          </nav>
          <div class="nav-actions">
            <label class="language" aria-label="Language selector">
              <span class="language-label">Language</span>
              <select class="language-select">
                ${languageSelectOptions()}
              </select>
            </label>
            <a class="btn btn-primary" href="${localizedHref("/child-growth-calculator/")}">${t("Start Calculator")} ${icon("arrow")}</a>
            <button class="menu-button" id="menuButton" aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false" aria-haspopup="true" type="button">${icon("menu")}</button>
          </div>
        </div>
        <div class="mobile-menu" id="mobileMenu">
          <label class="language mobile-language" aria-label="Language selector">
            <span class="language-label">Language</span>
            <select class="language-select">
              ${languageSelectOptions()}
            </select>
          </label>
          ${navItems.map(renderNavLink).join("")}
          <a class="mobile-menu-cta btn btn-primary" href="${localizedHref("/child-growth-calculator/")}">${t("Start Calculator")} ${icon("arrow")}</a>
        </div>
      </header>
    `;
  }

  function footer() {
    return `
      <footer class="footer">
        <div class="container footer-grid">
          <div>
            <a class="brand" href="${localizedHref("/")}">
              <span class="brand-mark">${icon("spark")}</span>
              <span>GrowthKid</span>
            </a>
            <p>Child growth calculator concept for parents and healthcare professionals. Educational use only and not a substitute for medical advice.</p>
            <p class="source-note">Reference context: <a href="https://www.who.int/tools/child-growth-standards" target="_blank" rel="noreferrer">WHO Child Growth Standards</a> and <a href="https://www.who.int/tools/growth-reference-data-for-5to19-years" target="_blank" rel="noreferrer">WHO Growth Reference 2007</a>.</p>
          </div>
          <div class="footer-links">
            ${tools.slice(0, 4).map((item) => `<a href="${localizedHref(item.href)}">${item.label}</a>`).join("")}
            <a href="${localizedHref("/methodology/")}">Methodology</a>
            <a href="${localizedHref("/privacy/")}">Privacy</a>
            <a href="${localizedHref("/medical-disclaimer/")}">Medical Disclaimer</a>
            <a href="${localizedHref("/terms/")}">Terms</a>
          </div>
        </div>
      </footer>
    `;
  }

  function calculatorCard(compact) {
    const today = currentDateInputValues();
    return `
      <form class="calculator-card" id="growthForm">
        <div class="card-header">
          <div>
            <h2>Child Growth Calculator</h2>
            <p>Enter measurements to calculate z-scores and percentiles.</p>
          </div>
        </div>
        <div class="form-grid">
          <div class="field">
            <label for="dob">Date of Birth</label>
            <div class="date-input-wrap">
              <input id="dob" name="dob" type="text" inputmode="numeric" autocomplete="bday" placeholder="DD/MM/YYYY" pattern="\\d{2}/\\d{2}/\\d{4}" value="15/05/2022" data-date-text required>
              <span class="date-calendar-icon" aria-hidden="true"></span>
              <input class="date-picker-native" type="date" value="2022-05-15" aria-label="Choose date of birth" data-date-picker data-target="dob">
            </div>
          </div>
          <div class="field">
            <label for="sex">Sex</label>
            <select id="sex" name="sex">
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>
          </div>
          <div class="field">
            <label for="measureDate">Measurement Date</label>
            <div class="date-input-wrap">
              <input id="measureDate" name="measureDate" type="text" inputmode="numeric" placeholder="DD/MM/YYYY" pattern="\\d{2}/\\d{2}/\\d{4}" value="${today.display}" data-date-text required>
              <span class="date-calendar-icon" aria-hidden="true"></span>
              <input class="date-picker-native" type="date" value="${today.iso}" aria-label="Choose measurement date" data-date-picker data-target="measureDate">
            </div>
          </div>
          <div class="field">
            <label for="weight">Weight (kg)</label>
            <input id="weight" name="weight" type="number" step="0.1" min="1" value="12.5" required>
          </div>
          <div class="field">
            <label for="height">Height (cm)</label>
            <input id="height" name="height" type="number" step="0.1" min="30" value="87" required>
          </div>
          <div class="field">
            <label for="head">Head Circumference (cm)</label>
            <input id="head" name="head" type="number" step="0.1" min="20" placeholder="Optional">
          </div>
        </div>
        <button class="btn btn-primary calc-submit" type="submit">Calculate Growth ${icon("arrow")}</button>
        <div class="form-error" id="formError"></div>
        ${compact ? "" : '<p class="source-note">Supports WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years. Weight-for-age is available to 10 years in WHO 2007.</p>'}
      </form>
    `;
  }

  function snapshotCard() {
    return `
      <aside class="snapshot-card calculator-card">
        <div class="snapshot-top">
          <strong>WHO Growth Chart</strong>
          <span>0-19 years</span>
        </div>
        <div class="mini-chart" id="heroChart">${chartSvg(sampleResult(), "height", true)}</div>
        <div class="metrics-strip">
          <div class="metric-pill"><span>Z-score</span><strong>-0.15</strong></div>
          <div class="metric-pill"><span>Percentile</span><strong>44th</strong></div>
          <div class="metric-pill"><span>Status</span><strong>Normal</strong></div>
        </div>
      </aside>
    `;
  }

  function homePage() {
    return shell(`
      <main>
        <section class="hero">
          <div class="growth-3d-scene growth-3d-scene-home" data-growth-3d aria-hidden="true"></div>
          <div class="container hero-grid">
            <div>
              <span class="eyebrow">${pageConfig.home.eyebrow}</span>
              <h1>${pageConfig.home.title}</h1>
              <p class="hero-copy">${pageConfig.home.copy}</p>
              <div class="hero-actions">
                <a class="btn btn-primary" href="#calculator">Start Calculator ${icon("arrow")}</a>
                <a class="btn btn-secondary" href="${localizedHref("/growth-charts/")}">View Growth Charts</a>
              </div>
              <div class="trust-row">
                <span><span class="check-dot">✓</span> WHO standards</span>
                <span><span class="check-dot">✓</span> Private by design</span>
                <span><span class="check-dot">✓</span> Parent friendly</span>
              </div>
            </div>
            <div class="hero-panel" id="calculator">${calculatorCard(false)}</div>
          </div>
        </section>
        ${trustBandSection()}
        ${resultsBlock(false)}
        ${viralToolkitSection()}
        ${methodologySection()}
        ${measurementGuideSection()}
        ${assessmentSection()}
        ${seoLinksSection()}
        ${articlesSection()}
      </main>
    `);
  }

  function calculatorLanding(kind) {
    const cfg = pageConfig[kind] || pageConfig.calculator;
    return shell(`
      <main>
        <section class="page-hero">
          <div class="growth-3d-scene" data-growth-3d aria-hidden="true"></div>
          <div class="container page-hero-row">
            <div>
              <span class="eyebrow">${cfg.eyebrow}</span>
              <h1>${cfg.title}</h1>
              <p class="page-copy">${cfg.copy}</p>
            </div>
            ${snapshotCard()}
          </div>
        </section>
        <section class="section section-soft" id="calculator">
          <div class="container">
            ${calculatorCard(false)}
          </div>
        </section>
        ${resultsBlock(false)}
        ${viralToolkitSection()}
        ${calculatorSeoContent(kind)}
        ${methodologySection()}
        ${measurementGuideSection()}
        ${faqSection(kind)}
        ${seoLinksSection()}
      </main>
    `);
  }

  function resultsPage() {
    return shell(`
      <main>
        ${resultsBlock(true)}
        ${viralToolkitSection()}
        ${faqSection("calculator")}
      </main>
    `);
  }

  function chartsPage() {
    return shell(`
      <main>
        <section class="page-hero">
          <div class="growth-3d-scene" data-growth-3d aria-hidden="true"></div>
          <div class="container page-hero-row">
            <div>
              <span class="eyebrow">Growth Charts</span>
              <h1>WHO Growth Charts</h1>
              <p class="page-copy">View percentile curves, z-score bands, and a current measurement point in a clean chart-first layout.</p>
            </div>
            ${snapshotCard()}
          </div>
        </section>
        ${resultsBlock(true)}
        ${viralToolkitSection()}
        ${seoLinksSection()}
      </main>
    `);
  }

  function articlesPage() {
    return shell(`
      <main>
        <section class="page-hero">
          <div class="growth-3d-scene" data-growth-3d aria-hidden="true"></div>
          <div class="container">
            <span class="eyebrow">Articles</span>
            <h1>Recent Articles</h1>
            <p class="page-copy">SEO-ready educational content for parents searching for child growth calculators, percentiles, and WHO chart explanations.</p>
          </div>
        </section>
        ${articlesSection(true)}
        ${faqSection("calculator")}
      </main>
    `);
  }

  function nutritionPage() {
    return shell(`
      <main class="nutrition-page">
        <div id="nutritionApp" class="nutrition-app" aria-live="polite"></div>
      </main>
    `);
  }

  function aboutPage() {
    return shell(`
      <main>
        <section class="page-hero">
          <div class="growth-3d-scene" data-growth-3d aria-hidden="true"></div>
          <div class="container page-hero-row">
            <div>
              <span class="eyebrow">About</span>
              <h1>Understand each step of your child's growth</h1>
              <p class="page-copy">GrowthKid helps turn everyday measurements into WHO-based context, so parents can follow trends, save results, and know what to discuss at the next pediatric visit.</p>
            </div>
            <div class="side-panel">
              <h2>What GrowthKid helps with</h2>
              <ul>
                <li>Enter weight, height, and measurement dates in seconds.</li>
                <li>See z-scores, percentiles, and plain-language status.</li>
                <li>Follow trends instead of focusing on one measurement.</li>
                <li>Save or share results when talking with a pediatrician.</li>
              </ul>
            </div>
          </div>
        </section>
        ${assessmentSection()}
        ${methodologySection()}
        ${measurementGuideSection()}
        ${seoLinksSection()}
      </main>
    `);
  }

  function pnCalculatorPage() {
    const cfg = pageConfig.pn;
    return shell(`
      <main>
        <section class="page-hero">
          <div class="growth-3d-scene" data-growth-3d aria-hidden="true"></div>
          <div class="container page-hero-row">
            <div>
              <span class="eyebrow">${t(cfg.eyebrow)}</span>
              <h1>${t(cfg.title)}</h1>
              <p class="page-copy">${t(cfg.copy)}</p>
            </div>
            <div class="side-panel pn-disclaimer">
              <h2>${t("Safety note")}</h2>
              <p>${t("This calculator supports calculations only. It does not replace medical orders, pharmacy compounding protocols, laboratory review, or clinical assessment.")}</p>
            </div>
          </div>
        </section>
        <section class="section section-soft">
          <div class="container pn-layout">
            ${pnCalculatorForm()}
            <div id="pnResults" class="pn-results"></div>
          </div>
        </section>
      </main>
    `);
  }

  function bilirubinPlaceholderPage() {
    return shell(`
      <main>
        <section class="page-hero">
          <div class="growth-3d-scene" data-growth-3d aria-hidden="true"></div>
          <div class="container page-hero-row">
            <div>
              <span class="eyebrow">${t("Neonatal Bilirubin")}</span>
              <h1>${t("Neonatal Bilirubin Assessment")}</h1>
              <p class="page-copy">&#272;&#225;nh gi&#225; TSB theo tu&#7893;i thai, gi&#7901; tu&#7893;i v&#224; y&#7871;u t&#7889; nguy c&#417; &#273;&#7897;c th&#7847;n kinh bilirubin.</p>
            </div>
            <div class="side-panel bilirubin-source-panel">
              <h2>Ngu&#7891;n logic</h2>
              <ul>
                <li>&ge;35 tu&#7847;n: ng&#432;&#7905;ng v&#224; bi&#7875;u &#273;&#7891; &#273;i&#7873;u tr&#7883; AAP 2022.</li>
                <li>&lt;35 tu&#7847;n: b&#7843;ng tham kh&#7843;o sinh non Maisels 2012.</li>
                <li>Escalation of care = ng&#432;&#7905;ng thay m&#225;u - 2 mg/dL.</li>
                <li>Bhutani 1999 ch&#7881; l&#224; to&#225;n &#273;&#7891; ti&#234;n l&#432;&#7907;ng tham kh&#7843;o, kh&#244;ng ph&#7843;i ng&#432;&#7905;ng &#273;i&#7873;u tr&#7883;.</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="section section-soft">
          <div class="container pn-layout bilirubin-layout">
            ${bilirubinAssessmentForm()}
            <div id="bilirubinResults" class="pn-results"></div>
          </div>
        </section>
      </main>
    `);
  }

  function bilirubinAssessmentForm() {
    return `
      <form class="calculator-card pn-card bilirubin-card" id="bilirubinForm">
        <div class="card-heading">
          <span class="eyebrow">Bilirubin calculator</span>
          <h2>&#272;&#225;nh gi&#225; ng&#432;&#7905;ng &#273;i&#7873;u tr&#7883;</h2>
          <p>Nh&#7853;p TSB mg/dL. V&#7899;i tr&#7867; &ge;35 tu&#7847;n, tu&#7893;i sau sinh h&#7907;p l&#7879; l&#224; 1-336 gi&#7901;.</p>
        </div>
        <div class="form-grid pn-form-grid">
          ${bilirubinNumberField("gestationalAgeWeeks", "Tu&#7893;i thai l&#250;c sinh (tu&#7847;n)", "38", "0.1", "22", "42")}
          ${bilirubinNumberField("postnatalAgeHours", "Tu&#7893;i sau sinh (gi&#7901;)", "48", "1", "0", "336")}
          ${bilirubinNumberField("bilirubinMgDl", "TSB bilirubin (mg/dL)", "15", "0.1", "0", "60")}
          <div class="field">
            <label for="neurotoxicityRisk">Y&#7871;u t&#7889; nguy c&#417; &#273;&#7897;c th&#7847;n kinh</label>
            <select id="neurotoxicityRisk" name="neurotoxicityRisk">
              <option value="no" selected>Kh&#244;ng c&#243; / ch&#432;a ghi nh&#7853;n</option>
              <option value="yes">C&#243; b&#7845;t k&#7923; y&#7871;u t&#7889; nguy c&#417;</option>
            </select>
          </div>
        </div>
        <div class="bilirubin-risk-note">
          <strong>Y&#7871;u t&#7889; nguy c&#417;:</strong>
          albumin &lt;3 g/dL, tan m&#225;u/DAT d&#432;&#417;ng, G6PD, sepsis, ho&#7863;c l&#226;m s&#224;ng kh&#244;ng &#7893;n &#273;&#7883;nh trong 24 gi&#7901; tr&#432;&#7899;c.
        </div>
        <div class="form-error" id="bilirubinFormError"></div>
        <button class="btn btn-primary calc-submit" type="submit">T&#237;nh &#273;&#225;nh gi&#225; ${icon("arrow")}</button>
      </form>
    `;
  }

  function bilirubinNumberField(name, label, value, step, min, max) {
    return `
      <div class="field">
        <label for="${name}">${label}</label>
        <input id="${name}" name="${name}" type="number" inputmode="decimal" min="${min}" max="${max}" step="${step}" value="${value}" required>
      </div>
    `;
  }

  const bilirubinPretermThresholds = [
    { maxGa: 28, label: "&lt;28 tu&#7847;n", photo: [5, 6], exchange: [11, 14] },
    { maxGa: 30, label: "28-&lt;30 tu&#7847;n", photo: [6, 8], exchange: [12, 14] },
    { maxGa: 32, label: "30-&lt;32 tu&#7847;n", photo: [8, 10], exchange: [13, 16] },
    { maxGa: 34, label: "32-&lt;34 tu&#7847;n", photo: [10, 12], exchange: [15, 18] },
    { maxGa: 35, label: "34-&lt;35 tu&#7847;n", photo: [12, 14], exchange: [17, 19] }
  ];

  const bilirubinAap2022Thresholds = {
    none: {
      35: [[1, 6.4, 14.9], [6, 7.4, 15.6], [12, 8.5, 16.4], [18, 9.6, 17.2], [24, 10.6, 17.9], [30, 11.6, 18.7], [36, 12.5, 19.4], [42, 13.4, 20], [48, 14.2, 20.7], [60, 15.6, 21.8], [72, 16.8, 22.9], [84, 17.8, 23.8], [96, 18.6, 24.5], [120, 18.7, 24.7], [144, 18.8, 24.9], [168, 18.9, 25.1], [192, 19, 25.3], [240, 19.2, 25.7], [288, 19.4, 26], [336, 19.6, 26.3]],
      36: [[1, 6.9, 15.9], [6, 7.9, 16.7], [12, 9, 17.5], [18, 10.1, 18.3], [24, 11.2, 19.1], [30, 12.1, 19.9], [36, 13.1, 20.6], [42, 13.9, 21.3], [48, 14.8, 21.9], [60, 16.2, 23.1], [72, 17.5, 24.1], [84, 18.5, 24.9], [96, 19.3, 25.5], [120, 19.4, 25.7], [144, 19.5, 25.9], [168, 19.6, 26.1], [192, 19.7, 26.2], [240, 19.9, 26.5], [288, 20.2, 26.8], [336, 20.4, 27]],
      37: [[1, 7.4, 17], [6, 8.4, 17.8], [12, 9.6, 18.7], [18, 10.7, 19.5], [24, 11.7, 20.3], [30, 12.7, 21.1], [36, 13.6, 21.8], [42, 14.5, 22.5], [48, 15.4, 23.1], [60, 16.9, 24.3], [72, 18.1, 25.2], [84, 19.2, 26], [96, 20, 26.6], [120, 20.2, 26.7], [144, 20.3, 26.9], [168, 20.4, 27], [192, 20.5, 27], [240, 20.7, 27], [288, 20.9, 27], [336, 21.1, 27]],
      38: [[1, 7.9, 18], [6, 8.9, 18.8], [12, 10.1, 19.7], [18, 11.2, 20.6], [24, 12.3, 21.4], [30, 13.3, 22.1], [36, 14.2, 22.8], [42, 15.1, 23.4], [48, 16, 24], [60, 17.5, 25.1], [72, 18.8, 25.9], [84, 19.9, 26.6], [96, 20.7, 27], [120, 20.9, 27], [144, 21, 27], [168, 21.1, 27], [192, 21.2, 27], [240, 21.4, 27], [288, 21.6, 27], [336, 21.8, 27]],
      39: [[1, 8.4, 18], [6, 9.5, 18.8], [12, 10.6, 19.7], [18, 11.8, 20.6], [24, 12.8, 21.4], [30, 13.8, 22.1], [36, 14.8, 22.8], [42, 15.7, 23.4], [48, 16.6, 24], [60, 18.1, 25.1], [72, 19.5, 25.9], [84, 20.6, 26.6], [96, 21.5, 27], [120, 21.6, 27], [144, 21.7, 27], [168, 21.8, 27], [192, 21.8, 27], [240, 21.8, 27], [288, 21.8, 27], [336, 21.8, 27]],
      40: [[1, 8.9, 18], [6, 10, 18.8], [12, 11.1, 19.7], [18, 12.2, 20.6], [24, 13.3, 21.4], [30, 14.3, 22.1], [36, 15.3, 22.8], [42, 16.2, 23.4], [48, 17, 24], [60, 18.5, 25.1], [72, 19.8, 25.9], [84, 20.9, 26.6], [96, 21.8, 27], [120, 21.8, 27], [144, 21.8, 27], [168, 21.8, 27], [192, 21.8, 27], [240, 21.8, 27], [288, 21.8, 27], [336, 21.8, 27]]
    },
    any: {
      35: [[1, 4.9, 13.1], [6, 5.8, 13.8], [12, 6.9, 14.6], [18, 7.9, 15.4], [24, 8.9, 16.1], [30, 9.8, 16.8], [36, 10.6, 17.4], [42, 11.4, 17.9], [48, 12.2, 18.5], [60, 13.5, 19.4], [72, 14.6, 20.1], [84, 15.5, 20.7], [96, 16.1, 21.1], [120, 16.3, 21.3], [144, 16.4, 21.5], [168, 16.5, 21.7], [192, 16.6, 21.9], [240, 16.9, 22.3], [288, 17.1, 22.6], [336, 17.4, 22.9]],
      36: [[1, 5.4, 13.7], [6, 6.3, 14.4], [12, 7.4, 15.2], [18, 8.5, 15.9], [24, 9.4, 16.6], [30, 10.4, 17.3], [36, 11.2, 17.9], [42, 12.1, 18.5], [48, 12.8, 19.1], [60, 14.2, 20.1], [72, 15.4, 20.9], [84, 16.3, 21.6], [96, 17, 22.1], [120, 17.1, 22.3], [144, 17.3, 22.5], [168, 17.4, 22.6], [192, 17.5, 22.8], [240, 17.7, 23.1], [288, 18, 23.3], [336, 18.2, 23.5]],
      37: [[1, 5.9, 14.3], [6, 6.9, 15], [12, 8, 15.7], [18, 9, 16.5], [24, 10, 17.2], [30, 11, 17.9], [36, 11.9, 18.5], [42, 12.7, 19.1], [48, 13.5, 19.7], [60, 14.9, 20.7], [72, 16.1, 21.7], [84, 17.1, 22.5], [96, 17.9, 23.1], [120, 18, 23.2], [144, 18.1, 23.4], [168, 18.2, 23.5], [192, 18.2, 23.5], [240, 18.2, 23.5], [288, 18.2, 23.5], [336, 18.2, 23.5]],
      38: [[1, 6.4, 14.8], [6, 7.3, 15.5], [12, 8.5, 16.3], [18, 9.5, 17], [24, 10.5, 17.7], [30, 11.5, 18.3], [36, 12.4, 19], [42, 13.2, 19.6], [48, 14, 20.1], [60, 15.4, 21.2], [72, 16.6, 22.1], [84, 17.5, 22.9], [96, 18.2, 23.5], [120, 18.2, 23.5], [144, 18.2, 23.5], [168, 18.2, 23.5], [192, 18.2, 23.5], [240, 18.2, 23.5], [288, 18.2, 23.5], [336, 18.2, 23.5]],
      39: [[1, 6.4, 14.8], [6, 7.3, 15.5], [12, 8.5, 16.3], [18, 9.5, 17], [24, 10.5, 17.7], [30, 11.5, 18.3], [36, 12.4, 19], [42, 13.2, 19.6], [48, 14, 20.1], [60, 15.4, 21.2], [72, 16.6, 22.1], [84, 17.5, 22.9], [96, 18.2, 23.5], [120, 18.2, 23.5], [144, 18.2, 23.5], [168, 18.2, 23.5], [192, 18.2, 23.5], [240, 18.2, 23.5], [288, 18.2, 23.5], [336, 18.2, 23.5]],
      40: [[1, 6.4, 14.8], [6, 7.3, 15.5], [12, 8.5, 16.3], [18, 9.5, 17], [24, 10.5, 17.7], [30, 11.5, 18.3], [36, 12.4, 19], [42, 13.2, 19.6], [48, 14, 20.1], [60, 15.4, 21.2], [72, 16.6, 22.1], [84, 17.5, 22.9], [96, 18.2, 23.5], [120, 18.2, 23.5], [144, 18.2, 23.5], [168, 18.2, 23.5], [192, 18.2, 23.5], [240, 18.2, 23.5], [288, 18.2, 23.5], [336, 18.2, 23.5]]
    }
  };

  const bilirubinBhutaniNomogram = {
    p40: [[12, 4], [18, 4.6], [24, 5.4], [30, 6.3], [36, 7.5], [42, 8.2], [48, 8.7], [54, 9.3], [60, 9.7], [66, 10.2], [72, 10.7], [78, 11.3], [84, 11.6], [90, 11.9], [96, 12.4], [102, 12.5], [108, 12.8], [114, 13], [120, 13.2], [126, 13.2], [132, 13.2], [138, 13.1], [144, 13.1]],
    p75: [[12, 5], [18, 5.7], [24, 6.5], [30, 7.6], [36, 9.5], [42, 10.3], [48, 11], [54, 11.8], [60, 12.6], [66, 13.1], [72, 13.5], [78, 14.1], [84, 14.4], [90, 14.8], [96, 15], [102, 15.3], [108, 15.5], [114, 15.5], [120, 15.6], [126, 15.5], [132, 15.5], [138, 15.3], [144, 15.2]],
    p95: [[12, 7], [18, 7.4], [24, 8.4], [30, 9.6], [36, 11.5], [42, 12.4], [48, 13.4], [54, 14.2], [60, 14.9], [66, 15.4], [72, 15.9], [78, 16.3], [84, 16.7], [90, 17.1], [96, 17.3], [102, 17.4], [108, 17.4], [114, 17.5], [120, 17.5], [126, 17.5], [132, 17.4], [138, 17.3], [144, 17.3]]
  };

  function calculateBilirubin(input) {
    const gestationalAgeWeeks = pnPositive(input.gestationalAgeWeeks, "Tuoi thai phai > 0.");
    const postnatalAgeHours = pnNonNegative(input.postnatalAgeHours, "Gio tuoi khong duoc am.");
    const bilirubinMgDl = pnNonNegative(input.bilirubinMgDl, "Bilirubin khong duoc am.");
    const hasRisk = input.neurotoxicityRisk === "yes";
    if (gestationalAgeWeeks < 22 || gestationalAgeWeeks > 42) throw new Error("Tuoi thai ngoai khoang ho tro 22-42 tuan.");
    if (gestationalAgeWeeks >= 35 && (postnatalAgeHours < 1 || postnatalAgeHours > 336)) {
      throw new Error("AAP 2022 chi ho tro gio tuoi 1-336 gio cho tre >=35 tuan.");
    }

    const threshold = gestationalAgeWeeks < 35
      ? bilirubinPretermThreshold(gestationalAgeWeeks, hasRisk)
      : bilirubinAapThreshold(gestationalAgeWeeks, postnatalAgeHours, hasRisk);
    const escalationThreshold = Math.max(0, threshold.exchangeThreshold - 2);
    const phototherapyGap = threshold.phototherapyThreshold - bilirubinMgDl;
    const exchangeGap = threshold.exchangeThreshold - bilirubinMgDl;
    const escalationGap = escalationThreshold - bilirubinMgDl;
    const action = bilirubinAction(bilirubinMgDl, threshold.phototherapyThreshold, escalationThreshold, threshold.exchangeThreshold);

    return {
      input: { gestationalAgeWeeks, postnatalAgeHours, bilirubinMgDl, hasRisk },
      threshold: { ...threshold, escalationThreshold },
      gaps: { phototherapyGap, escalationGap, exchangeGap },
      action,
      followUp: bilirubinFollowUp(phototherapyGap, postnatalAgeHours),
      labs: bilirubinLabs(action.key),
      bhutani: bilirubinBhutaniAssessment({ gestationalAgeWeeks, postnatalAgeHours, bilirubinMgDl })
    };
  }

  function bilirubinBhutaniAssessment(input) {
    const { gestationalAgeWeeks, postnatalAgeHours, bilirubinMgDl } = input;
    if (gestationalAgeWeeks < 35) {
      return {
        available: false,
        reason: "To&#225;n &#273;&#7891; Bhutani kh&#244;ng &#225;p d&#7909;ng cho tr&#7867; <35 tu&#7847;n."
      };
    }
    if (postnatalAgeHours < 12 || postnatalAgeHours > 144) {
      return {
        available: false,
        reason: "Gi&#7901; tu&#7893;i n&#7857;m ngo&#224;i kho&#7843;ng 12-144 gi&#7901; c&#7911;a to&#225;n &#273;&#7891; hi&#7875;n th&#7883;."
      };
    }

    const p40 = interpolateBilirubinCurve(bilirubinBhutaniNomogram.p40, postnatalAgeHours);
    const p75 = interpolateBilirubinCurve(bilirubinBhutaniNomogram.p75, postnatalAgeHours);
    const p95 = interpolateBilirubinCurve(bilirubinBhutaniNomogram.p95, postnatalAgeHours);
    const nearestBoundary = Math.min(Math.abs(bilirubinMgDl - p40), Math.abs(bilirubinMgDl - p75), Math.abs(bilirubinMgDl - p95));

    if (nearestBoundary < 0.2) {
      return {
        available: true,
        zoneKey: "boundary",
        zoneLabel: "S&#225;t &#273;&#432;&#7901;ng ph&#226;n v&#249;ng",
        zoneDetail: "Gi&#225; tr&#7883; n&#7857;m trong 0,2 mg/dL quanh m&#7897;t &#273;&#432;&#7901;ng b&#225;ch ph&#226;n v&#7883;; kh&#244;ng n&#234;n g&#225;n v&#249;ng b&#7857;ng s&#7889; h&#243;a &#273;&#7891; th&#7883;.",
        thresholds: { p40, p75, p95 }
      };
    }

    if (bilirubinMgDl >= p95) {
      return {
        available: true,
        zoneKey: "high",
        zoneLabel: "V&#249;ng nguy c&#417; cao (&ge;P95)",
        zoneDetail: "Nguy c&#417; bilirubin sau &#273;&#243; v&#432;&#7907;t b&#225;ch ph&#226;n v&#7883; 95 cao h&#417;n trong qu&#7847;n th&#7875; nghi&#234;n c&#7913;u.",
        thresholds: { p40, p75, p95 }
      };
    }
    if (bilirubinMgDl >= p75) {
      return {
        available: true,
        zoneKey: "high-intermediate",
        zoneLabel: "V&#249;ng nguy c&#417; trung b&#236;nh-cao (P75-P95)",
        zoneDetail: "&#272;&#226;y l&#224; ph&#226;n v&#249;ng ti&#234;n l&#432;&#7907;ng l&#7883;ch s&#7917;, kh&#244;ng ph&#7843;i ch&#7881; &#273;&#7883;nh chi&#7871;u &#273;&#232;n.",
        thresholds: { p40, p75, p95 }
      };
    }
    if (bilirubinMgDl >= p40) {
      return {
        available: true,
        zoneKey: "low-intermediate",
        zoneLabel: "V&#249;ng nguy c&#417; trung b&#236;nh-th&#7845;p (P40-P75)",
        zoneDetail: "&#272;&#226;y l&#224; ph&#226;n v&#249;ng ti&#234;n l&#432;&#7907;ng l&#7883;ch s&#7917;, kh&#244;ng ph&#7843;i ch&#7881; &#273;&#7883;nh chi&#7871;u &#273;&#232;n.",
        thresholds: { p40, p75, p95 }
      };
    }
    return {
      available: true,
      zoneKey: "low",
      zoneLabel: "V&#249;ng nguy c&#417; th&#7845;p (<P40)",
      zoneDetail: "Nguy c&#417; &#7903; &#273;&#226;y l&#224; nguy c&#417; bilirubin sau &#273;&#243; v&#432;&#7907;t P95, kh&#244;ng c&#243; ngh&#297;a l&#224; kh&#244;ng c&#7847;n theo d&#245;i l&#226;m s&#224;ng.",
      thresholds: { p40, p75, p95 }
    };
  }

  function bilirubinPretermThreshold(gestationalAgeWeeks, hasRisk) {
    const band = bilirubinPretermThresholds.find((item) => gestationalAgeWeeks < item.maxGa) || bilirubinPretermThresholds[bilirubinPretermThresholds.length - 1];
    const index = hasRisk ? 0 : 1;
    return {
      source: "Sinh non <35 tu&#7847;n: ng&#432;&#7905;ng tham kh&#7843;o Maisels 2012, c&#7847;n b&#225;c s&#297; s&#417; sinh quy&#7871;t &#273;&#7883;nh.",
      gaLabel: band.label,
      phototherapyRange: band.photo,
      exchangeRange: band.exchange,
      phototherapyThreshold: band.photo[index],
      exchangeThreshold: band.exchange[index]
    };
  }

  function bilirubinAapThreshold(gestationalAgeWeeks, postnatalAgeHours, hasRisk) {
    const completedGa = clamp(Math.floor(gestationalAgeWeeks), 35, 40);
    const points = bilirubinAap2022Thresholds[hasRisk ? "any" : "none"][completedGa];
    const [phototherapyThreshold, exchangeThreshold] = interpolateBilirubinThreshold(points, postnatalAgeHours);
    return {
      source: "AAP 2022 cho tr&#7867; &ge;35 tu&#7847;n, b&#7843;ng c&#7909;c b&#7897; l&#7845;y m&#7851;u t&#7915; PediTools.",
      gaLabel: `${completedGa} completed weeks`,
      phototherapyThreshold,
      exchangeThreshold
    };
  }

  function interpolateBilirubinThreshold(points, ageHours) {
    if (ageHours <= points[0][0]) return [points[0][1], points[0][2]];
    for (let i = 1; i < points.length; i += 1) {
      const previous = points[i - 1];
      const next = points[i];
      if (ageHours <= next[0]) {
        const ratio = (ageHours - previous[0]) / (next[0] - previous[0]);
        return [
          previous[1] + (next[1] - previous[1]) * ratio,
          previous[2] + (next[2] - previous[2]) * ratio
        ];
      }
    }
    const last = points[points.length - 1];
    return [last[1], last[2]];
  }

  function interpolateBilirubinCurve(points, ageHours) {
    if (ageHours <= points[0][0]) return points[0][1];
    for (let i = 1; i < points.length; i += 1) {
      const previous = points[i - 1];
      const next = points[i];
      if (ageHours <= next[0]) {
        const ratio = (ageHours - previous[0]) / (next[0] - previous[0]);
        return previous[1] + (next[1] - previous[1]) * ratio;
      }
    }
    return points[points.length - 1][1];
  }

  function bilirubinAction(bilirubinMgDl, phototherapyThreshold, escalationThreshold, exchangeThreshold) {
    if (bilirubinMgDl >= exchangeThreshold) {
      return {
        key: "exchange",
        tone: "danger",
        title: "Ch&#7881; &#273;&#7883;nh thay m&#225;u / c&#7845;p c&#7913;u",
        text: "TSB &#273;&#227; b&#7857;ng ho&#7863;c v&#432;&#7907;t ng&#432;&#7905;ng thay m&#225;u. Chuy&#7875;n NICU, chi&#7871;u &#273;&#232;n c&#432;&#7901;ng &#273;&#7897; cao trong l&#250;c chu&#7849;n b&#7883; thay m&#225;u."
      };
    }
    if (bilirubinMgDl >= escalationThreshold) {
      return {
        key: "escalation",
        tone: "warn",
        title: "Escalation of care",
        text: "TSB n&#7857;m trong v&#249;ng c&#225;ch ng&#432;&#7905;ng thay m&#225;u <=2 mg/dL. C&#7847;n NICU, chi&#7871;u &#273;&#232;n c&#432;&#7901;ng &#273;&#7897; cao t&#7889;i &#273;a, truy&#7873;n d&#7883;ch v&#224; l&#7863;p TSB m&#7895;i 2 gi&#7901;."
      };
    }
    if (bilirubinMgDl >= phototherapyThreshold) {
      return {
        key: "phototherapy",
        tone: "treat",
        title: "Ch&#7881; &#273;&#7883;nh chi&#7871;u &#273;&#232;n",
        text: "TSB &#273;&#227; b&#7857;ng ho&#7863;c v&#432;&#7907;t ng&#432;&#7905;ng chi&#7871;u &#273;&#232;n. D&#249;ng chi&#7871;u &#273;&#232;n c&#432;&#7901;ng &#273;&#7897; cao v&#224; ki&#7875;m tra TSB sau 4-12 gi&#7901; t&#249;y nguy c&#417;."
      };
    }
    return {
      key: "followup",
      tone: "ok",
      title: "Ch&#432;a &#273;&#7841;t ng&#432;&#7905;ng chi&#7871;u &#273;&#232;n",
      text: "Theo d&#245;i l&#226;m s&#224;ng v&#224; l&#7863;p bilirubin theo kho&#7843;ng c&#225;ch so v&#7899;i ng&#432;&#7905;ng chi&#7871;u &#273;&#232;n."
    };
  }

  function bilirubinFollowUp(phototherapyGap, postnatalAgeHours) {
    if (phototherapyGap <= 0) return "Khi &#273;ang chi&#7871;u &#273;&#232;n: l&#7863;p TSB sau 4-12 gi&#7901;; n&#7871;u g&#7847;n ng&#432;&#7905;ng thay m&#225;u ho&#7863;c c&#242;n t&#259;ng nhanh, l&#7863;p m&#7895;i 2 gi&#7901;.";
    if (phototherapyGap < 2) {
      return postnatalAgeHours < 24
        ? "Th&#7845;p h&#417;n ng&#432;&#7905;ng 0-1.9 mg/dL v&#224; <24 gi&#7901; tu&#7893;i: tr&#236; ho&#227;n xu&#7845;t vi&#7879;n, c&#226;n nh&#7855;c chi&#7871;u &#273;&#232;n, l&#7863;p TSB sau 4-8 gi&#7901;."
        : "Th&#7845;p h&#417;n ng&#432;&#7905;ng 0-1.9 mg/dL: l&#7863;p TSB sau 4-24 gi&#7901;, c&#226;n nh&#7855;c chi&#7871;u &#273;&#232;n ho&#7863;c theo d&#245;i s&#225;t.";
    }
    if (phototherapyGap < 3.5) return "Th&#7845;p h&#417;n ng&#432;&#7905;ng 2.0-3.4 mg/dL: l&#7863;p TSB/TcB sau 4-24 gi&#7901;.";
    if (phototherapyGap < 5.5) return "Th&#7845;p h&#417;n ng&#432;&#7905;ng 3.5-5.4 mg/dL: l&#7863;p bilirubin sau 1-2 ng&#224;y.";
    if (phototherapyGap < 7) return postnatalAgeHours < 72 ? "Th&#7845;p h&#417;n ng&#432;&#7905;ng 5.5-6.9 mg/dL: n&#7871;u xu&#7845;t vi&#7879;n <72 gi&#7901;, t&#225;i kh&#225;m trong 2 ng&#224;y; TcB/TSB theo l&#226;m s&#224;ng." : "Th&#7845;p h&#417;n ng&#432;&#7905;ng 5.5-6.9 mg/dL: theo d&#245;i theo &#273;&#225;nh gi&#225; l&#226;m s&#224;ng.";
    return postnatalAgeHours < 72 ? "Th&#7845;p h&#417;n ng&#432;&#7905;ng >=7 mg/dL: n&#7871;u xu&#7845;t vi&#7879;n <72 gi&#7901;, t&#225;i kh&#225;m trong 3 ng&#224;y; TcB/TSB theo l&#226;m s&#224;ng." : "Th&#7845;p h&#417;n ng&#432;&#7905;ng >=7 mg/dL: theo d&#245;i theo &#273;&#225;nh gi&#225; l&#226;m s&#224;ng.";
  }

  function bilirubinLabs(actionKey) {
    if (actionKey === "exchange" || actionKey === "escalation") {
      return ["TSB + bilirubin tr&#7921;c ti&#7871;p", "CBC, Hct/Hb, reticulocyte", "&#272;i&#7879;n gi&#7843;i, &#273;&#432;&#7901;ng huy&#7871;t, kh&#237; m&#225;u n&#7871;u n&#7863;ng", "Albumin", "Nh&#243;m m&#225;u m&#7865;/con, Rh, DAT", "Type & screen / crossmatch, chu&#7849;n b&#7883; m&#225;u thay"];
    }
    if (actionKey === "phototherapy") {
      return ["TSB +/- bilirubin tr&#7921;c ti&#7871;p", "Nh&#243;m m&#225;u m&#7865;/con, Rh, DAT", "CBC, Hct/Hb, reticulocyte", "G6PD n&#7871;u c&#243; nguy c&#417; ho&#7863;c v&#224;ng da n&#7863;ng/kh&#243; gi&#7843;i th&#237;ch"];
    }
    return ["TSB ho&#7863;c TcB", "&#272;&#225;nh gi&#225; b&#250;, c&#226;n n&#7863;ng, m&#7845;t n&#432;&#7899;c", "Nh&#243;m m&#225;u m&#7865;/con n&#7871;u nghi b&#7845;t &#273;&#7891;ng", "DAT n&#7871;u nghi tan m&#225;u"];
  }

  function bilirubinChartPath(points, x, y) {
    return points.map((point, index) => `${index === 0 ? "M" : "L"}${x(point[0]).toFixed(1)},${y(point[1]).toFixed(1)}`).join(" ");
  }

  function bilirubinChartBandPath(upperPoints, lowerPoints, x, y) {
    const upper = bilirubinChartPath(upperPoints, x, y);
    const lower = [...lowerPoints].reverse().map((point) => `L${x(point[0]).toFixed(1)},${y(point[1]).toFixed(1)}`).join(" ");
    return `${upper} ${lower} Z`;
  }

  function bilirubinAapVisiblePoints(points, domainEnd) {
    const visible = points.filter((point) => point[0] <= domainEnd).map((point) => [...point]);
    const last = visible[visible.length - 1];
    if (last && last[0] < domainEnd) {
      const [photo, exchange] = interpolateBilirubinThreshold(points, domainEnd);
      visible.push([domainEnd, photo, exchange]);
    }
    return visible;
  }

  function bilirubinAapChartSvg(result) {
    const width = 760;
    const height = 430;
    const padding = { left: 54, right: 28, top: 26, bottom: 58 };
    const completedGa = clamp(Math.floor(result.input.gestationalAgeWeeks), 35, 40);
    const sourcePoints = bilirubinAap2022Thresholds[result.input.hasRisk ? "any" : "none"][completedGa];
    const domainStart = 1;
    const domainEnd = clamp(Math.max(168, Math.ceil(result.input.postnatalAgeHours / 24) * 24), 168, 336);
    const visible = bilirubinAapVisiblePoints(sourcePoints, domainEnd);
    const yMax = clamp(Math.max(30, Math.ceil((result.input.bilirubinMgDl + 2) / 5) * 5), 30, 65);
    const x = (hour) => padding.left + ((hour - domainStart) / (domainEnd - domainStart)) * (width - padding.left - padding.right);
    const y = (value) => height - padding.bottom - (value / yMax) * (height - padding.top - padding.bottom);
    const photo = visible.map((point) => [point[0], point[1]]);
    const exchange = visible.map((point) => [point[0], point[2]]);
    const escalation = visible.map((point) => [point[0], Math.max(0, point[2] - 2)]);
    const chartTop = visible.map((point) => [point[0], yMax]);
    const chartBottom = visible.map((point) => [point[0], 0]);
    const xTicks = [1, ...Array.from({ length: Math.floor(domainEnd / 24) }, (_, index) => (index + 1) * 24)];
    const yTicks = Array.from({ length: Math.floor(yMax / 5) + 1 }, (_, index) => index * 5);
    const pointX = x(result.input.postnatalAgeHours);
    const pointY = y(result.input.bilirubinMgDl);
    const labelWidth = 94;
    const labelHeight = 28;
    const labelX = pointX > width - padding.right - labelWidth - 14 ? pointX - labelWidth - 10 : pointX + 10;
    const labelY = pointY < padding.top + 42 ? pointY + 10 : pointY - 36;

    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="bilirubinAapChartTitle bilirubinAapChartDesc">
        <title id="bilirubinAapChartTitle">Bi&#7875;u &#273;&#7891; ng&#432;&#7905;ng &#273;i&#7873;u tr&#7883; bilirubin AAP 2022</title>
        <desc id="bilirubinAapChartDesc">Tu&#7893;i thai ${completedGa} tu&#7847;n, ${result.input.hasRisk ? "c&#243;" : "kh&#244;ng c&#243;"} y&#7871;u t&#7889; nguy c&#417;, TSB ${pnFmt(result.input.bilirubinMgDl, 1)} mg/dL t&#7841;i ${pnFmt(result.input.postnatalAgeHours, 0)} gi&#7901;.</desc>
        <rect width="${width}" height="${height}" fill="#ffffff"></rect>
        <path d="${bilirubinChartBandPath(chartTop, exchange, x, y)}" fill="#fee2e2"></path>
        <path d="${bilirubinChartBandPath(exchange, escalation, x, y)}" fill="#fef3c7"></path>
        <path d="${bilirubinChartBandPath(escalation, photo, x, y)}" fill="#dbeafe"></path>
        <path d="${bilirubinChartBandPath(photo, chartBottom, x, y)}" fill="#f0fdf4"></path>
        ${yTicks.map((value) => `
          <line x1="${padding.left}" y1="${y(value).toFixed(1)}" x2="${width - padding.right}" y2="${y(value).toFixed(1)}" stroke="#cbd5e1" stroke-width="1" opacity="0.72"></line>
          <text x="${padding.left - 10}" y="${y(value).toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#475569" font-size="12">${value}</text>
        `).join("")}
        ${xTicks.map((hour) => `
          <line x1="${x(hour).toFixed(1)}" y1="${padding.top}" x2="${x(hour).toFixed(1)}" y2="${height - padding.bottom}" stroke="#e2e8f0" stroke-width="1"></line>
          <text x="${x(hour).toFixed(1)}" y="${height - 34}" text-anchor="middle" fill="#475569" font-size="12">${hour}</text>
        `).join("")}
        <path d="${bilirubinChartPath(photo, x, y)}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linejoin="round"></path>
        <path d="${bilirubinChartPath(escalation, x, y)}" fill="none" stroke="#d97706" stroke-width="3" stroke-linejoin="round"></path>
        <path d="${bilirubinChartPath(exchange, x, y)}" fill="none" stroke="#dc2626" stroke-width="3" stroke-linejoin="round"></path>
        <line x1="${pointX.toFixed(1)}" y1="${padding.top}" x2="${pointX.toFixed(1)}" y2="${height - padding.bottom}" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.55"></line>
        <circle cx="${pointX.toFixed(1)}" cy="${pointY.toFixed(1)}" r="9" fill="#ffffff" stroke="#0f172a" stroke-width="3"></circle>
        <circle cx="${pointX.toFixed(1)}" cy="${pointY.toFixed(1)}" r="4" fill="#0f172a"></circle>
        <rect x="${labelX.toFixed(1)}" y="${labelY.toFixed(1)}" width="${labelWidth}" height="${labelHeight}" rx="6" fill="#0f172a"></rect>
        <text x="${(labelX + 9).toFixed(1)}" y="${(labelY + 18).toFixed(1)}" fill="#ffffff" font-size="12" font-weight="700">TSB ${pnFmt(result.input.bilirubinMgDl, 1)}</text>
        <line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="#64748b" stroke-width="1.3"></line>
        <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="#64748b" stroke-width="1.3"></line>
        <text x="${padding.left}" y="16" fill="#334155" font-size="12" font-weight="700">TSB (mg/dL)</text>
        <text x="${(padding.left + width - padding.right) / 2}" y="${height - 10}" text-anchor="middle" fill="#475569" font-size="12">Gi&#7901; tu&#7893;i sau sinh</text>
      </svg>
    `;
  }

  function bilirubinBhutaniChartSvg(result) {
    const width = 760;
    const height = 430;
    const padding = { left: 54, right: 48, top: 26, bottom: 58 };
    const domainStart = 12;
    const domainEnd = 144;
    const yMax = clamp(Math.max(25, Math.ceil((result.input.bilirubinMgDl + 2) / 5) * 5), 25, 65);
    const x = (hour) => padding.left + ((hour - domainStart) / (domainEnd - domainStart)) * (width - padding.left - padding.right);
    const y = (value) => height - padding.bottom - (value / yMax) * (height - padding.top - padding.bottom);
    const chartTop = bilirubinBhutaniNomogram.p95.map((point) => [point[0], yMax]);
    const chartBottom = bilirubinBhutaniNomogram.p40.map((point) => [point[0], 0]);
    const xTicks = Array.from({ length: 12 }, (_, index) => (index + 1) * 12);
    const yTicks = Array.from({ length: Math.floor(yMax / 5) + 1 }, (_, index) => index * 5);
    const showPoint = result.bhutani.available;
    const pointX = showPoint ? x(result.input.postnatalAgeHours) : 0;
    const pointY = showPoint ? y(result.input.bilirubinMgDl) : 0;
    const labelWidth = 94;
    const labelHeight = 28;
    const labelX = showPoint && pointX > width - padding.right - labelWidth - 14 ? pointX - labelWidth - 10 : pointX + 10;
    const labelY = showPoint && pointY < padding.top + 42 ? pointY + 10 : pointY - 36;

    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="bilirubinBhutaniChartTitle bilirubinBhutaniChartDesc">
        <title id="bilirubinBhutaniChartTitle">To&#225;n &#273;&#7891; nguy c&#417; bilirubin Bhutani</title>
        <desc id="bilirubinBhutaniChartDesc">B&#7889;n v&#249;ng nguy c&#417; l&#7883;ch s&#7917; theo b&#225;ch ph&#226;n v&#7883; 40, 75 v&#224; 95.${showPoint ? ` TSB ${pnFmt(result.input.bilirubinMgDl, 1)} mg/dL t&#7841;i ${pnFmt(result.input.postnatalAgeHours, 0)} gi&#7901;.` : ""}</desc>
        <rect width="${width}" height="${height}" fill="#ffffff"></rect>
        <path d="${bilirubinChartBandPath(chartTop, bilirubinBhutaniNomogram.p95, x, y)}" fill="#fee2e2"></path>
        <path d="${bilirubinChartBandPath(bilirubinBhutaniNomogram.p95, bilirubinBhutaniNomogram.p75, x, y)}" fill="#ffedd5"></path>
        <path d="${bilirubinChartBandPath(bilirubinBhutaniNomogram.p75, bilirubinBhutaniNomogram.p40, x, y)}" fill="#fef9c3"></path>
        <path d="${bilirubinChartBandPath(bilirubinBhutaniNomogram.p40, chartBottom, x, y)}" fill="#dcfce7"></path>
        ${yTicks.map((value) => `
          <line x1="${padding.left}" y1="${y(value).toFixed(1)}" x2="${width - padding.right}" y2="${y(value).toFixed(1)}" stroke="#cbd5e1" stroke-width="1" opacity="0.72"></line>
          <text x="${padding.left - 10}" y="${y(value).toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#475569" font-size="12">${value}</text>
        `).join("")}
        ${xTicks.map((hour) => `
          <line x1="${x(hour).toFixed(1)}" y1="${padding.top}" x2="${x(hour).toFixed(1)}" y2="${height - padding.bottom}" stroke="#e2e8f0" stroke-width="1"></line>
          <text x="${x(hour).toFixed(1)}" y="${height - 34}" text-anchor="middle" fill="#475569" font-size="12">${hour}</text>
        `).join("")}
        <path d="${bilirubinChartPath(bilirubinBhutaniNomogram.p40, x, y)}" fill="none" stroke="#15803d" stroke-width="2.6" stroke-linejoin="round"></path>
        <path d="${bilirubinChartPath(bilirubinBhutaniNomogram.p75, x, y)}" fill="none" stroke="#ca8a04" stroke-width="2.6" stroke-linejoin="round"></path>
        <path d="${bilirubinChartPath(bilirubinBhutaniNomogram.p95, x, y)}" fill="none" stroke="#dc2626" stroke-width="2.6" stroke-linejoin="round"></path>
        <text x="${width - padding.right + 8}" y="${y(bilirubinBhutaniNomogram.p40.at(-1)[1]).toFixed(1)}" dominant-baseline="middle" fill="#166534" font-size="12" font-weight="700">P40</text>
        <text x="${width - padding.right + 8}" y="${y(bilirubinBhutaniNomogram.p75.at(-1)[1]).toFixed(1)}" dominant-baseline="middle" fill="#854d0e" font-size="12" font-weight="700">P75</text>
        <text x="${width - padding.right + 8}" y="${y(bilirubinBhutaniNomogram.p95.at(-1)[1]).toFixed(1)}" dominant-baseline="middle" fill="#991b1b" font-size="12" font-weight="700">P95</text>
        ${showPoint ? `
          <line x1="${pointX.toFixed(1)}" y1="${padding.top}" x2="${pointX.toFixed(1)}" y2="${height - padding.bottom}" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.55"></line>
          <circle cx="${pointX.toFixed(1)}" cy="${pointY.toFixed(1)}" r="9" fill="#ffffff" stroke="#0f172a" stroke-width="3"></circle>
          <circle cx="${pointX.toFixed(1)}" cy="${pointY.toFixed(1)}" r="4" fill="#0f172a"></circle>
          <rect x="${labelX.toFixed(1)}" y="${labelY.toFixed(1)}" width="${labelWidth}" height="${labelHeight}" rx="6" fill="#0f172a"></rect>
          <text x="${(labelX + 9).toFixed(1)}" y="${(labelY + 18).toFixed(1)}" fill="#ffffff" font-size="12" font-weight="700">TSB ${pnFmt(result.input.bilirubinMgDl, 1)}</text>
        ` : ""}
        <line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="#64748b" stroke-width="1.3"></line>
        <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="#64748b" stroke-width="1.3"></line>
        <text x="${padding.left}" y="16" fill="#334155" font-size="12" font-weight="700">TSB (mg/dL)</text>
        <text x="${(padding.left + width - padding.right) / 2}" y="${height - 10}" text-anchor="middle" fill="#475569" font-size="12">Gi&#7901; tu&#7893;i sau sinh</text>
      </svg>
    `;
  }

  function renderBilirubinCharts(result) {
    if (result.input.gestationalAgeWeeks < 35) {
      return `
        <section class="side-panel bilirubin-chart-unavailable">
          <h2>Bi&#7875;u &#273;&#7891; AAP 2022 / Bhutani</h2>
          <p>Hai bi&#7875;u &#273;&#7891; n&#224;y kh&#244;ng &#225;p d&#7909;ng cho tr&#7867; &lt;35 tu&#7847;n. K&#7871;t qu&#7843; ph&#237;a tr&#234;n &#273;ang d&#249;ng b&#7843;ng tham kh&#7843;o sinh non Maisels 2012.</p>
        </section>
      `;
    }

    const completedGa = clamp(Math.floor(result.input.gestationalAgeWeeks), 35, 40);
    const bhutaniSummary = result.bhutani.available
      ? `<strong>${result.bhutani.zoneLabel}</strong><span>${result.bhutani.zoneDetail}</span>`
      : `<strong>Ch&#432;a th&#7875; ph&#226;n v&#249;ng</strong><span>${result.bhutani.reason}</span>`;

    return `
      <section class="result-card bilirubin-chart-card" data-bilirubin-charts>
        <div class="bilirubin-chart-header">
          <div>
            <span class="eyebrow">Tra c&#7913;u tr&#7921;c quan</span>
            <h2>Bi&#7875;u &#273;&#7891; bilirubin theo gi&#7901; tu&#7893;i</h2>
          </div>
          <div class="bilirubin-chart-tabs" role="tablist" aria-label="Ch&#7885;n bi&#7875;u &#273;&#7891; bilirubin">
            <button class="bilirubin-chart-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="bilirubinChartAap" data-bilirubin-chart="aap">${icon("chart")} AAP 2022</button>
            <button class="bilirubin-chart-tab" type="button" role="tab" aria-selected="false" aria-controls="bilirubinChartBhutani" data-bilirubin-chart="bhutani">${icon("chart")} Bhutani</button>
          </div>
        </div>

        <div class="bilirubin-chart-panel" id="bilirubinChartAap" role="tabpanel" data-bilirubin-chart-panel="aap">
          <div class="bilirubin-chart-context">
            <span>${completedGa} tu&#7847;n ho&#224;n ch&#7881;nh</span>
            <span>${result.input.hasRisk ? "C&#243;" : "Kh&#244;ng c&#243;"} y&#7871;u t&#7889; nguy c&#417;</span>
            <strong>${pnFmt(result.input.postnatalAgeHours, 0)} gi&#7901; / TSB ${pnFmt(result.input.bilirubinMgDl, 1)}</strong>
          </div>
          <div class="bilirubin-chart-frame">${bilirubinAapChartSvg(result)}</div>
          <div class="bilirubin-chart-legend" aria-label="Ch&#250; gi&#7843;i AAP 2022">
            <span><i class="is-photo"></i>Ng&#432;&#7905;ng chi&#7871;u &#273;&#232;n ${pnFmt(result.threshold.phototherapyThreshold, 1)}</span>
            <span><i class="is-escalation"></i>Escalation ${pnFmt(result.threshold.escalationThreshold, 1)}</span>
            <span><i class="is-exchange"></i>Thay m&#225;u ${pnFmt(result.threshold.exchangeThreshold, 1)}</span>
            <span><i class="is-current"></i>TSB hi&#7879;n t&#7841;i</span>
          </div>
          <p class="bilirubin-chart-note">Bi&#7875;u &#273;&#7891; d&#249;ng tu&#7893;i thai ho&#224;n ch&#7881;nh v&#224; y&#7871;u t&#7889; nguy c&#417; &#273;&#227; ch&#7885;n. <a href="https://publications.aap.org/pediatrics/article/150/3/e2022058859/188726/Clinical-Practice-Guideline-Revision-Management-of" target="_blank" rel="noreferrer">Ngu&#7891;n AAP 2022</a>.</p>
        </div>

        <div class="bilirubin-chart-panel" id="bilirubinChartBhutani" role="tabpanel" data-bilirubin-chart-panel="bhutani" hidden>
          <div class="bilirubin-bhutani-summary is-${result.bhutani.zoneKey || "unavailable"}">${bhutaniSummary}</div>
          <div class="bilirubin-chart-frame">${bilirubinBhutaniChartSvg(result)}</div>
          <div class="bilirubin-chart-legend" aria-label="Ch&#250; gi&#7843;i Bhutani">
            <span><i class="is-low"></i>Th&#7845;p &lt;P40</span>
            <span><i class="is-low-intermediate"></i>Trung b&#236;nh-th&#7845;p</span>
            <span><i class="is-high-intermediate"></i>Trung b&#236;nh-cao</span>
            <span><i class="is-high"></i>Cao &ge;P95</span>
          </div>
          <p class="bilirubin-chart-note"><strong>L&#432;u &#253;:</strong> Bhutani d&#7921; b&#225;o nguy c&#417; TSB sau &#273;&#243; v&#432;&#7907;t P95, kh&#244;ng ph&#7843;i ng&#432;&#7905;ng chi&#7871;u &#273;&#232;n hay thay m&#225;u. C&#225;c &#273;&#432;&#7901;ng &#273;&#432;&#7907;c s&#7889; h&#243;a t&#7915; to&#225;n &#273;&#7891; c&#244;ng b&#7889; &#273;&#7875; hi&#7875;n th&#7883;; &#273;i&#7875;m s&#225;t &#273;&#432;&#7901;ng c&#7847;n &#273;&#7885;c tr&#7921;c ti&#7871;p ngu&#7891;n. Qu&#7847;n th&#7875; g&#7889;c l&#224; tr&#7867; kh&#7887;e m&#7841;nh DAT &#226;m, &ge;36 tu&#7847;n v&#224; &ge;2000 g ho&#7863;c &ge;35 tu&#7847;n v&#224; &ge;2500 g; c&#226;n n&#7863;ng sinh ch&#432;a &#273;&#432;&#7907;c nh&#7853;p trong c&#244;ng c&#7909; n&#224;y. AAP 2022 &#273;&#227; thay risk zones b&#7857;ng kho&#7843;ng c&#225;ch t&#7899;i ng&#432;&#7905;ng chi&#7871;u &#273;&#232;n. <a href="https://pubmed.ncbi.nlm.nih.gov/9917432/" target="_blank" rel="noreferrer">Bhutani 1999</a>.</p>
        </div>
      </section>
    `;
  }

  function activateBilirubinChart(root, chartKey) {
    root.querySelectorAll("[data-bilirubin-chart]").forEach((button) => {
      const isActive = button.dataset.bilirubinChart === chartKey;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    root.querySelectorAll("[data-bilirubin-chart-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.bilirubinChartPanel !== chartKey;
    });
  }

  function renderBilirubinResults(result) {
    const threshold = result.threshold;
    const isPreterm = result.input.gestationalAgeWeeks < 35;
    const thresholdRows = [
      ["Nh&#243;m tu&#7893;i thai", threshold.gaLabel],
      ["Ngu&#7891;n", threshold.source],
      ["Ng&#432;&#7905;ng chi&#7871;u &#273;&#232;n", `${pnFmt(threshold.phototherapyThreshold, 1)} mg/dL${isPreterm ? ` (${threshold.phototherapyRange[0]}-${threshold.phototherapyRange[1]})` : ""}`],
      ["Ng&#432;&#7905;ng escalation", `${pnFmt(threshold.escalationThreshold, 1)} mg/dL`],
      ["Ng&#432;&#7905;ng thay m&#225;u", `${pnFmt(threshold.exchangeThreshold, 1)} mg/dL${isPreterm ? ` (${threshold.exchangeRange[0]}-${threshold.exchangeRange[1]})` : ""}`]
    ];

    return `
      <div class="pn-result-stack bilirubin-result-stack">
        <div class="result-card pn-summary-card bilirubin-action-card bilirubin-${result.action.tone}">
          <span class="eyebrow">K&#7871;t lu&#7853;n</span>
          <h2>${result.action.title}</h2>
          <p>${result.action.text}</p>
          <div class="result-grid pn-summary-grid">
            ${pnMetric("TSB", `${pnFmt(result.input.bilirubinMgDl, 1)} mg/dL`)}
            ${pnMetric("C&#225;ch ng&#432;&#7905;ng chi&#7871;u", `${pnFmt(result.gaps.phototherapyGap, 1)} mg/dL`)}
            ${pnMetric("C&#225;ch ng&#432;&#7905;ng thay m&#225;u", `${pnFmt(result.gaps.exchangeGap, 1)} mg/dL`)}
          </div>
        </div>

        ${renderBilirubinCharts(result)}

        ${pnTable("Ng&#432;&#7905;ng &#273;i&#7873;u tr&#7883;", thresholdRows)}

        <div class="pn-two-col">
          <div class="side-panel bilirubin-follow-panel">
            <h2>L&#7863;p bilirubin</h2>
            <p>${result.followUp}</p>
          </div>
          <div class="side-panel bilirubin-labs-panel">
            <h2>X&#233;t nghi&#7879;m g&#7907;i &#253;</h2>
            <ul>${result.labs.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>

        <div class="side-panel pn-disclaimer">
          <h2>C&#7843;nh b&#225;o l&#226;m s&#224;ng</h2>
          <p>C&#244;ng c&#7909; n&#224;y ch&#7881; h&#7895; tr&#7907; quy&#7871;t &#273;&#7883;nh. Lu&#244;n x&#225;c nh&#7853;n v&#7899;i b&#225;c s&#297; s&#417; sinh/NICU, quy tr&#236;nh b&#7879;nh vi&#7879;n v&#224; t&#236;nh tr&#7841;ng l&#226;m s&#224;ng th&#7921;c t&#7871;.</p>
        </div>
      </div>
    `;
  }

  function pnCalculatorForm() {
    return `
      <form class="calculator-card pn-card" id="pnForm">
        <div class="card-heading">
          <span class="eyebrow">PN calculator</span>
          <h2>${t("Calculate main bag and separate lipid")}</h2>
          <p>${t("Defaults are calculated over 24 hours. Lipid 20% is calculated as a separate infusion and is not included in the main bag table.")}</p>
          <div class="pn-mode-control" role="radiogroup" aria-label="Calculation mode">
            <label><input type="radio" name="sodiumMode" value="baseFill" checked> <span>${t("Mode 1: NaCl 0.9% fills remaining volume")}</span></label>
            <label><input type="radio" name="sodiumMode" value="targetNa"> <span>${t("Mode 2: Prioritize target sodium")}</span></label>
          </div>
        </div>
        <div class="form-grid pn-form-grid">
          ${pnNumberField("weightKg", "Weight (kg)", "10", "0.1")}
          ${pnNumberField("proteinGPerKgDay", "Protein (g/kg/day)", "2", "0.1")}
          <div class="field">
            <label for="aminoAcidPercent">Amino acid</label>
            <select id="aminoAcidPercent" name="aminoAcidPercent">
              <option value="5">Amino acid 5%</option>
              <option value="6.5">Amino acid 6.5%</option>
              <option value="10" selected>Amino acid 10%</option>
              <option value="20">Amino acid 20%</option>
            </select>
          </div>
          ${pnNumberField("lipidGPerKgDay", "Lipid (g/kg/day)", "2", "0.1")}
          ${pnNumberField("naMEqPerKgDay", "Na (mEq/kg/day)", "2", "0.1")}
          ${pnNumberField("kMEqPerKgDay", "K (mEq/kg/day)", "2", "0.1")}
          ${pnNumberField("caMEqPerKgDay", "Ca (mEq/kg/day)", "0.5", "0.1")}
          ${pnNumberField("targetDextrosePercent", "Target glucose in main bag (%)", "12.5", "0.1")}
          ${pnNumberField("desiredCompoundVolumeMl", "Compound volume for scaling (mL)", "500", "1")}
        </div>
        <div class="form-error" id="pnFormError"></div>
        <button class="btn btn-primary calc-submit" type="submit">${t("Calculate PN")} ${icon("arrow")}</button>
      </form>
    `;
  }

  function pnNumberField(name, label, value, step) {
    return `
      <div class="field">
        <label for="${name}">${t(label)}</label>
        <input id="${name}" name="${name}" type="number" inputmode="decimal" min="0" step="${step}" value="${value}" required>
      </div>
    `;
  }

  function calculateMaintenanceFluidMlDay(weightKg) {
    if (weightKg <= 0) throw new Error("Can nang phai > 0.");
    if (weightKg <= 10) return weightKg * 100;
    if (weightKg <= 20) return 1000 + (weightKg - 10) * 50;
    return 1500 + (weightKg - 20) * 20;
  }

  function calculatePn(input) {
    const weightKg = pnPositive(input.weightKg, "Can nang phai > 0.");
    const infusionHoursMainBag = 24;
    const infusionHoursLipid = 24;
    const sodiumMode = input.sodiumMode === "targetNa" ? "targetNa" : "baseFill";
    const proteinGPerKgDay = pnNonNegative(input.proteinGPerKgDay, "Dam khong duoc am.");
    const aminoAcidPercent = pnPositive(input.aminoAcidPercent, "Chon nong do amino acid.");
    const lipidGPerKgDay = pnNonNegative(input.lipidGPerKgDay, "Lipid khong duoc am.");
    const naMEqPerKgDay = pnNonNegative(input.naMEqPerKgDay, "Na khong duoc am.");
    const kMEqPerKgDay = pnNonNegative(input.kMEqPerKgDay, "K khong duoc am.");
    const caMEqPerKgDay = pnNonNegative(input.caMEqPerKgDay, "Ca khong duoc am.");
    const targetDextrosePercent = pnNonNegative(input.targetDextrosePercent, "Glucose khong duoc am.");
    const otherIVFluidMlDay = 0;
    const otherAdditivesMlDay = 0;
    const desiredCompoundVolumeMl = pnPositive(input.desiredCompoundVolumeMl || 500, "The tich tam suat phai > 0.");
    const warnings = [];

    const totalFluidMlDay = calculateMaintenanceFluidMlDay(weightKg);
    const lipidGDay = weightKg * lipidGPerKgDay;
    const lipidVolumeMl = lipidGDay / pnProducts.Lipid20.lipid;
    const lipidRateMlHour = lipidVolumeMl / infusionHoursLipid;
    const lipidKcal = lipidVolumeMl * pnProducts.Lipid20.kcal;
    const mainBagTargetVolumeMl = totalFluidMlDay - lipidVolumeMl - otherIVFluidMlDay;
    if (mainBagTargetVolumeMl <= 0) {
      throw new Error("The tich lipid va dich khac da vuot hoac bang tong dich duy tri. Khong the tinh tui chinh.");
    }

    const mainBagRateMlHour = mainBagTargetVolumeMl / infusionHoursMainBag;
    const proteinGDay = weightKg * proteinGPerKgDay;
    const aminoAcidVolumeMl = proteinGDay / (aminoAcidPercent / 100);
    const proteinKcal = proteinGDay * 4;
    const targetNaMEqDay = weightKg * naMEqPerKgDay;
    const targetKMEqDay = weightKg * kMEqPerKgDay;
    const targetCaMEqDay = weightKg * caMEqPerKgDay;
    const KCl10VolumeMl = targetKMEqDay / pnProducts.KCl10.K;
    const CaCl2VolumeMl = targetCaMEqDay / pnProducts.CaCl2_10.Ca;
    const targetDextroseG = targetDextrosePercent * mainBagTargetVolumeMl / 100;
    const remainingAfterFixedMl = mainBagTargetVolumeMl - aminoAcidVolumeMl - KCl10VolumeMl - CaCl2VolumeMl - otherAdditivesMlDay;
    if (remainingAfterFixedMl <= 0) {
      throw new Error("The tich amino acid, KCl, CaCl2 va phu gia da vuot tui chinh.");
    }

    const minDextroseSolutionVolumeMl = targetDextroseG / pnProducts.D30.glucose;
    const maxDextroseSolutionVolumeMl = targetDextroseG / pnProducts.D10.glucose;
    if (minDextroseSolutionVolumeMl > remainingAfterFixedMl + 0.000001) {
      throw new Error("Khong du the tich de dat nong do glucose muc tieu bang D30.");
    }

    const dextroseSolutionVolumeMl = choosePnDextroseVolume({
      sodiumMode,
      targetNaMEqDay,
      remainingAfterFixedMl,
      minDextroseSolutionVolumeMl,
      maxDextroseSolutionVolumeMl
    });

    let D30VolumeMl = (targetDextroseG - pnProducts.D10.glucose * dextroseSolutionVolumeMl) / (pnProducts.D30.glucose - pnProducts.D10.glucose);
    let D10VolumeMl = dextroseSolutionVolumeMl - D30VolumeMl;
    if (D10VolumeMl < -0.000001 || D30VolumeMl < -0.000001) {
      throw new Error("Khong the dat nong do glucose muc tieu chi voi D10 va D30.");
    }
    D10VolumeMl = Math.max(0, D10VolumeMl);
    D30VolumeMl = Math.max(0, D30VolumeMl);

    let NaCl09VolumeMl = remainingAfterFixedMl - D10VolumeMl - D30VolumeMl;
    if (NaCl09VolumeMl < -0.000001) {
      throw new Error("Tong the tich thanh phan vuot tui chinh.");
    }
    NaCl09VolumeMl = Math.max(0, NaCl09VolumeMl);

    let NaCl10VolumeMl = 0;
    const sodiumMix = sodiumMode === "targetNa"
      ? solveTargetSodiumMix(targetNaMEqDay, NaCl09VolumeMl)
      : solveBaseFillSodiumMix(targetNaMEqDay, NaCl09VolumeMl, warnings);
    NaCl10VolumeMl = sodiumMix.NaCl10VolumeMl;
    NaCl09VolumeMl = sodiumMix.NaCl09VolumeMl;

    const baseNaMEq = NaCl09VolumeMl * pnProducts.NaCl09.Na;
    const NaFromNaCl10MEq = NaCl10VolumeMl * pnProducts.NaCl10.Na;
    const actualNaMEqDay = baseNaMEq + NaFromNaCl10MEq;
    const NaDifferenceMEq = actualNaMEqDay - targetNaMEqDay;
    const NaDifferenceMEqKgDay = NaDifferenceMEq / weightKg;
    if (actualNaMEqDay > targetNaMEqDay + 0.000001) {
      warnings.push("Na thuc nhan cao hon Na muc tieu, chu yeu do NaCl 0.9% trong tui chinh. Can kiem tra lai.");
    }
    if (Math.abs(NaDifferenceMEqKgDay) > 0.2) {
      warnings.push("Na thuc nhan lech dang ke so voi Na muc tieu. Can kiem tra lai.");
    }

    const ClFromNaCl09 = NaCl09VolumeMl * pnProducts.NaCl09.Cl;
    const ClFromNaCl10 = NaCl10VolumeMl * pnProducts.NaCl10.Cl;
    const ClFromKCl10 = KCl10VolumeMl * pnProducts.KCl10.Cl;
    const ClFromCaCl2 = CaCl2VolumeMl * pnProducts.CaCl2_10.Cl;
    const totalClMEqDay = ClFromNaCl09 + ClFromNaCl10 + ClFromKCl10 + ClFromCaCl2;
    const totalClMEqKgDay = totalClMEqDay / weightKg;
    const GIR_mg_kg_min = targetDextroseG * 1000 / weightKg / infusionHoursMainBag / 60;
    const dextroseKcal = targetDextroseG * 3.4;
    const totalKcalDay = dextroseKcal + proteinKcal + lipidKcal;
    const finalMainBagVolumeMl = NaCl10VolumeMl + KCl10VolumeMl + CaCl2VolumeMl + D10VolumeMl + D30VolumeMl + aminoAcidVolumeMl + NaCl09VolumeMl + otherAdditivesMlDay;
    const roundingDifferenceMl = mainBagTargetVolumeMl - finalMainBagVolumeMl;

    if (Math.abs(roundingDifferenceMl) > 0.5) warnings.push("Tong the tich thanh phan chua khop voi the tich tui chinh muc tieu. Can kiem tra lai lam tron hoac du lieu nhap.");
    if (GIR_mg_kg_min > 12) warnings.push("GIR cao, can kiem tra nguy co tang duong huyet, tang CO2, gan nhiem mo hoac tang triglyceride.");
    if (totalClMEqKgDay > 6) warnings.push("Tai chloride cao, can kiem tra nguy co tang Cl mau/toan chuyen hoa.");
    if (KCl10VolumeMl > 0) warnings.push("KCl dam dac bat buoc phai pha loang. Khong truyen nhanh. Can kiem tra kali mau, chuc nang than va toc do truyen theo quy trinh benh vien.");
    if (CaCl2VolumeMl > 0) warnings.push("Can kiem tra tuong hop CaCl2, dac biet neu sau nay them phosphate.");

    return {
      input: { weightKg, proteinGPerKgDay, aminoAcidPercent, lipidGPerKgDay, naMEqPerKgDay, kMEqPerKgDay, caMEqPerKgDay, targetDextrosePercent, otherIVFluidMlDay, otherAdditivesMlDay, infusionHoursMainBag, infusionHoursLipid, sodiumMode, desiredCompoundVolumeMl },
      fluid: { totalFluidMlDay, totalFluidRateMlHour: totalFluidMlDay / 24, mainBagTargetVolumeMl, mainBagRateMlHour, infusionHoursMainBag, lipidVolumeMl, lipidRateMlHour, infusionHoursLipid },
      mainBagComposition: { NaCl10VolumeMl, KCl10VolumeMl, CaCl2VolumeMl, D10VolumeMl, D30VolumeMl, aminoAcidVolumeMl, NaCl09VolumeMl, otherAdditivesMlDay, finalMainBagVolumeMl, roundingDifferenceMl },
      macronutrients: { proteinGDay, proteinGPerKgDay, aminoAcidPercent, lipidGDay, lipidGPerKgDay, lipidVolumeMl, targetDextrosePercent, targetDextroseG, GIR_mg_kg_min },
      electrolytes: { targetNaMEqDay, actualNaMEqDay, baseNaFromNaCl09MEq: baseNaMEq, NaFromNaCl10MEq, NaDifferenceMEq, NaDifferenceMEqKgDay, targetKMEqDay, actualKMEqDay: targetKMEqDay, KCl10VolumeMl, targetCaMEqDay, actualCaMEqDay: targetCaMEqDay, CaCl2VolumeMl, totalClMEqDay, totalClMEqKgDay },
      calories: { dextroseKcal, proteinKcal, lipidKcal, totalKcalDay, totalKcalKgDay: totalKcalDay / weightKg, nonProteinKcal: dextroseKcal + lipidKcal },
      scaling: calculatePnScaling({ NaCl10VolumeMl, KCl10VolumeMl, CaCl2VolumeMl, D10VolumeMl, D30VolumeMl, aminoAcidVolumeMl, NaCl09VolumeMl, finalMainBagVolumeMl }, desiredCompoundVolumeMl),
      warnings
    };
  }

  function choosePnDextroseVolume({ sodiumMode, targetNaMEqDay, remainingAfterFixedMl, minDextroseSolutionVolumeMl, maxDextroseSolutionVolumeMl }) {
    const upperDextrose = Math.min(maxDextroseSolutionVolumeMl, remainingAfterFixedMl);
    if (sodiumMode !== "targetNa") {
      const dextroseVolumeNoNaOverTargetMl = remainingAfterFixedMl - (targetNaMEqDay > 0 ? targetNaMEqDay / pnProducts.NaCl09.Na : 0);
      return clamp(dextroseVolumeNoNaOverTargetMl, minDextroseSolutionVolumeMl, upperDextrose);
    }

    if (targetNaMEqDay <= 0) {
      if (remainingAfterFixedMl > upperDextrose + 0.000001) {
        throw new Error("Mode 2 khong the dat Na bang 0 vi van can dung NaCl 0.9% de bu the tich.");
      }
      return upperDextrose;
    }

    const dextroseLowerByNa = remainingAfterFixedMl - targetNaMEqDay / pnProducts.NaCl09.Na;
    const dextroseUpperByNa = remainingAfterFixedMl - targetNaMEqDay / pnProducts.NaCl10.Na;
    const lower = Math.max(minDextroseSolutionVolumeMl, dextroseLowerByNa, 0);
    const upper = Math.min(upperDextrose, dextroseUpperByNa);
    if (lower > upper + 0.000001) {
      throw new Error("Mode 2 khong the vua dat Na muc tieu vua dat glucose bang D10/D30 voi the tich hien tai.");
    }
    return lower;
  }

  function solveBaseFillSodiumMix(targetNaMEqDay, initialNaCl09VolumeMl, warnings) {
    let NaCl09VolumeMl = initialNaCl09VolumeMl;
    let NaCl10VolumeMl = 0;
    const baseNaBeforeNaCl10MEq = NaCl09VolumeMl * pnProducts.NaCl09.Na;
    if (targetNaMEqDay > baseNaBeforeNaCl10MEq) {
      NaCl10VolumeMl = (targetNaMEqDay - baseNaBeforeNaCl10MEq) / (pnProducts.NaCl10.Na - pnProducts.NaCl09.Na);
      NaCl09VolumeMl -= NaCl10VolumeMl;
      if (NaCl09VolumeMl < -0.000001) {
        throw new Error("Khong du the tich NaCl 0.9% de thay bang NaCl 10%. Can xem lai glucose, tong dich hoac dien giai.");
      }
      NaCl09VolumeMl = Math.max(0, NaCl09VolumeMl);
    } else if (baseNaBeforeNaCl10MEq >= targetNaMEqDay && targetNaMEqDay > 0) {
      warnings.push("Na tu NaCl 0.9% da bang hoac vuot nhu cau Na muc tieu. Khong them NaCl 10%.");
    }
    return { NaCl10VolumeMl, NaCl09VolumeMl };
  }

  function solveTargetSodiumMix(targetNaMEqDay, sodiumVolumeMl) {
    if (targetNaMEqDay <= 0) return { NaCl10VolumeMl: 0, NaCl09VolumeMl: sodiumVolumeMl };
    const minNa = sodiumVolumeMl * pnProducts.NaCl09.Na;
    const maxNa = sodiumVolumeMl * pnProducts.NaCl10.Na;
    if (targetNaMEqDay < minNa - 0.000001) {
      throw new Error("Mode 2 khong the dat Na muc tieu vi NaCl 0.9% da cung cap Na cao hon muc tieu. Hay giam the tich con lai hoac chon Mode 1.");
    }
    if (targetNaMEqDay > maxNa + 0.000001) {
      throw new Error("Mode 2 khong the dat Na muc tieu voi the tich con lai. Can giam glucose, tang the tich tui chinh hoac xem lai Na muc tieu.");
    }
    const NaCl10VolumeMl = (targetNaMEqDay - minNa) / (pnProducts.NaCl10.Na - pnProducts.NaCl09.Na);
    return { NaCl10VolumeMl, NaCl09VolumeMl: sodiumVolumeMl - NaCl10VolumeMl };
  }

  function calculatePnScaling(volumes, desiredVolumeMl) {
    const ratio = desiredVolumeMl / (volumes.finalMainBagVolumeMl || 1);
    return {
      desiredVolumeMl,
      ratio,
      NaCl10VolumeMl: volumes.NaCl10VolumeMl * ratio,
      KCl10VolumeMl: volumes.KCl10VolumeMl * ratio,
      CaCl2VolumeMl: volumes.CaCl2VolumeMl * ratio,
      D10VolumeMl: volumes.D10VolumeMl * ratio,
      D30VolumeMl: volumes.D30VolumeMl * ratio,
      aminoAcidVolumeMl: volumes.aminoAcidVolumeMl * ratio,
      NaCl09VolumeMl: volumes.NaCl09VolumeMl * ratio
    };
  }

  function pnPositive(value, message) {
    const number = Number(value);
    if (!Number.isFinite(number) || number <= 0) throw new Error(message);
    return number;
  }

  function pnNonNegative(value, message) {
    const number = Number(value || 0);
    if (!Number.isFinite(number) || number < 0) throw new Error(message);
    return number;
  }

  function renderPnResults(result) {
    return `
      <div class="pn-result-stack">
        <div class="result-card pn-summary-card">
          <h2>${t("PN results")}</h2>
          <div class="result-grid pn-summary-grid">
            ${pnMetric("Weight", `${pnFmt(result.input.weightKg, 1)} kg`)}
            ${pnMetric("Mode", result.input.sodiumMode === "targetNa" ? t("Mode 2: target sodium") : t("Mode 1: NaCl 0.9% fill"))}
            ${pnMetric("Total fluid", `${pnFmt(result.fluid.totalFluidMlDay, 0)} mL/day`)}
            ${pnMetric("Main bag", `${pnFmt(result.fluid.mainBagTargetVolumeMl, 1)} mL/day`)}
            ${pnMetric("Main bag rate", `${pnFmt(result.fluid.mainBagRateMlHour, 2)} mL/hour`)}
          </div>
        </div>

        ${pnTable("Main bag", [
          ["NaCl 10%", `${pnFmt(result.mainBagComposition.NaCl10VolumeMl, 2)} mL`],
          ["KCl 10%", `${pnFmt(result.mainBagComposition.KCl10VolumeMl, 2)} mL`],
          ["CaCl2 10%", `${pnFmt(result.mainBagComposition.CaCl2VolumeMl, 2)} mL`],
          ["D10", `${pnFmt(result.mainBagComposition.D10VolumeMl, 2)} mL`],
          ["D30", `${pnFmt(result.mainBagComposition.D30VolumeMl, 2)} mL`],
          [`Amino acid ${pnPercent(result.macronutrients.aminoAcidPercent)}%`, `${pnFmt(result.mainBagComposition.aminoAcidVolumeMl, 2)} mL`],
          ["NaCl 0.9%", `${pnFmt(result.mainBagComposition.NaCl09VolumeMl, 2)} mL`],
          ["Total main bag", `${pnFmt(result.mainBagComposition.finalMainBagVolumeMl, 2)} mL/day`],
          ["Main bag infusion rate", `${pnFmt(result.fluid.mainBagRateMlHour, 2)} mL/hour`],
          ["Final glucose concentration", `D${pnFmt(result.macronutrients.targetDextrosePercent, 1)}%`],
          ["GIR", `${pnFmt(result.macronutrients.GIR_mg_kg_min, 2)} mg/kg/min`]
        ])}

        ${pnTable(`${t("Scaled compound")} ${pnFmt(result.scaling.desiredVolumeMl, 0)} mL`, [
          ["NaCl 10%", `${pnFmt(result.scaling.NaCl10VolumeMl, 2)} mL`],
          ["KCl 10%", `${pnFmt(result.scaling.KCl10VolumeMl, 2)} mL`],
          ["CaCl2 10%", `${pnFmt(result.scaling.CaCl2VolumeMl, 2)} mL`],
          ["D10", `${pnFmt(result.scaling.D10VolumeMl, 2)} mL`],
          ["D30", `${pnFmt(result.scaling.D30VolumeMl, 2)} mL`],
          [`Amino acid ${pnPercent(result.macronutrients.aminoAcidPercent)}%`, `${pnFmt(result.scaling.aminoAcidVolumeMl, 2)} mL`],
          ["NaCl 0.9%", `${pnFmt(result.scaling.NaCl09VolumeMl, 2)} mL`],
          ["Total compound", `${pnFmt(result.scaling.desiredVolumeMl, 2)} mL`],
          ["Scale ratio", `${pnFmt(result.scaling.ratio, 4)} x`]
        ])}

        <div class="pn-two-col">
          ${pnTable("Separate lipid infusion", [
            ["Lipid 20%", `${pnFmt(result.fluid.lipidVolumeMl, 2)} mL/day`],
            ["Lipid rate", `${pnFmt(result.fluid.lipidRateMlHour, 2)} mL/hour`],
            ["Lipid calories", `${pnFmt(result.calories.lipidKcal, 1)} kcal/day`]
          ])}
          ${pnTable("Electrolytes", [
            ["Target Na", `${pnFmt(result.electrolytes.targetNaMEqDay, 2)} mEq/day`],
            ["Actual Na", `${pnFmt(result.electrolytes.actualNaMEqDay, 2)} mEq/day`],
            ["Na from NaCl 0.9%", `${pnFmt(result.electrolytes.baseNaFromNaCl09MEq, 2)} mEq/day`],
            ["Na from NaCl 10%", `${pnFmt(result.electrolytes.NaFromNaCl10MEq, 2)} mEq/day`],
            ["Target K", `${pnFmt(result.electrolytes.targetKMEqDay, 2)} mEq/day`],
            ["Target Ca", `${pnFmt(result.electrolytes.targetCaMEqDay, 2)} mEq/day`],
            ["Total Cl", `${pnFmt(result.electrolytes.totalClMEqDay, 2)} mEq/day`],
            ["Total Cl", `${pnFmt(result.electrolytes.totalClMEqKgDay, 2)} mEq/kg/day`]
          ])}
        </div>

        ${pnTable("Calories", [
          ["Glucose", `${pnFmt(result.calories.dextroseKcal, 1)} kcal/day`],
          ["Protein", `${pnFmt(result.calories.proteinKcal, 1)} kcal/day`],
          ["Lipid", `${pnFmt(result.calories.lipidKcal, 1)} kcal/day`],
          ["Total calories", `${pnFmt(result.calories.totalKcalDay, 1)} kcal/day`],
          ["Total calories", `${pnFmt(result.calories.totalKcalKgDay, 1)} kcal/kg/day`],
          ["Non-protein kcal", `${pnFmt(result.calories.nonProteinKcal, 1)} kcal/day`]
        ])}

        ${result.warnings.length ? `
          <div class="side-panel pn-warning-panel">
            <h2>${t("Warnings to review")}</h2>
            <ul>${result.warnings.map((warning) => `<li>${escapeHtml(t(warning))}</li>`).join("")}</ul>
          </div>
        ` : ""}

        <div class="side-panel pn-disclaimer">
          <h2>Disclaimer</h2>
          <p>${t("This calculator supports calculations only. It does not replace medical orders, pharmacy compounding protocols, laboratory review, or clinical assessment.")}</p>
        </div>
      </div>
    `;
  }

  function pnMetric(label, value) {
    return `<div class="pn-mini-metric"><span>${t(label)}</span><strong>${value}</strong></div>`;
  }

  function pnTable(title, rows) {
    return `
      <div class="result-card pn-table-card">
        <h2>${t(title)}</h2>
        <div class="trend-table-wrap">
          <table class="trend-table pn-table">
            <tbody>
              ${rows.map(([label, value]) => `<tr><th>${t(label)}</th><td>${value}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function pnFmt(value, digits) {
    if (!Number.isFinite(value)) return "-";
    return value.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
  }

  function pnPercent(value) {
    if (!Number.isFinite(value)) return "-";
    return value.toLocaleString("en-US", { maximumFractionDigits: 1 });
  }

  function contentPage(config) {
    return shell(`
      <main>
        <section class="page-hero">
          <div class="growth-3d-scene" data-growth-3d aria-hidden="true"></div>
          <div class="container page-hero-row">
            <div>
              <span class="eyebrow">${config.eyebrow}</span>
              <h1>${config.title}</h1>
              <p class="page-copy">${config.copy}</p>
            </div>
            <div class="side-panel">
              <h2>${config.sideTitle}</h2>
              <ul>
                ${config.sideItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container content-layout">
            <article class="content-panel">
              ${config.sections.map((section) => `
                <div class="content-block">
                  <h2>${section.title}</h2>
                  <p>${section.text}</p>
                </div>
              `).join("")}
            </article>
            <aside class="side-panel">
              <h2>${config.actionTitle}</h2>
              <p>${config.actionText}</p>
              <div class="tool-links">
                ${config.links.map((link) => `<a href="${localizedHref(link.href)}">${link.label}</a>`).join("")}
              </div>
            </aside>
          </div>
        </section>
      </main>
    `);
  }

  function methodologyPage() {
    return contentPage({
      eyebrow: "Methodology",
      title: "Data source and growth methodology",
      copy: "A transparent explanation of how GrowthKid turns measurements into z-scores, percentiles, and chart points.",
      sideTitle: "What this covers",
      sideItems: ["WHO reference context", "Age and sex inputs", "Z-score interpretation", "Production data requirements"],
      actionTitle: "Use the calculator",
      actionText: "Start with a measurement, then review result cards and chart context together.",
      links: [
        { label: "Child Growth Calculator", href: "/child-growth-calculator/" },
        { label: "Growth Charts", href: "/growth-charts/" },
        { label: "Medical Disclaimer", href: "/medical-disclaimer/" }
      ],
      sections: [
        {
          title: "Reference context",
          text: "GrowthKid is designed around the WHO Child Growth Standards framework for young children. The interface explains weight-for-age, height-for-age, BMI-for-age, head circumference, z-scores, percentiles, and visual chart context."
        },
        {
          title: "Calculation approach",
          text: "The calculator uses LMS-style reference data for WHO Growth Reference 2007 from 5-19 years and keeps the under-5 experience aligned with WHO Child Growth Standards context."
        },
        {
          title: "Z-scores and percentiles",
          text: "A z-score estimates how far a measurement is from the reference median. Percentiles convert that result into a chart-friendly format that many parents recognize."
        },
        {
          title: "Clinical interpretation",
          text: "A single result should not be treated as a diagnosis. Trends, measurement quality, health history, and clinician review matter when interpreting growth."
        }
      ]
    });
  }

  function privacyPage() {
    return contentPage({
      eyebrow: "Privacy",
      title: "Privacy-first growth checks",
      copy: "GrowthKid is structured as a local-first calculator experience for parents who want quick answers without creating an account.",
      sideTitle: "Privacy principles",
      sideItems: ["No signup required", "Local browser storage", "No selling child data", "Clear disclosure before launch"],
      actionTitle: "Related pages",
      actionText: "Review the methodology and disclaimer before using any result for health decisions.",
      links: [
        { label: "Methodology", href: "/methodology/" },
        { label: "Medical Disclaimer", href: "/medical-disclaimer/" },
        { label: "Terms", href: "/terms/" }
      ],
      sections: [
        {
          title: "Local-first calculator",
          text: "This prototype stores the most recent result in the browser so the chart and report can be updated on the same device. It does not require an account."
        },
        {
          title: "Measurements",
          text: "Measurements entered into the calculator are sensitive. Before a production launch, any analytics, storage, or sharing behavior should be clearly disclosed and minimized."
        },
        {
          title: "Downloads",
          text: "Downloaded reports are generated on the device from the visible result. Users should store or share those files carefully."
        },
        {
          title: "Children's privacy",
          text: "A public product for children should avoid unnecessary personal data collection and should be reviewed against the privacy rules that apply in each launch market."
        }
      ]
    });
  }

  function medicalDisclaimerPage() {
    return contentPage({
      eyebrow: "Medical Disclaimer",
      title: "Educational tool, not medical advice",
      copy: "GrowthKid helps explain growth indicators, but it does not diagnose, treat, or replace a qualified healthcare professional.",
      sideTitle: "Use responsibly",
      sideItems: ["Check measurement accuracy", "Review trends over time", "Discuss concerns with a clinician", "Do not use for emergencies"],
      actionTitle: "Helpful context",
      actionText: "Read the methodology page to understand how the prototype calculates and displays growth indicators.",
      links: [
        { label: "Methodology", href: "/methodology/" },
        { label: "Growth Charts", href: "/growth-charts/" },
        { label: "Child Growth Calculator", href: "/child-growth-calculator/" }
      ],
      sections: [
        {
          title: "No diagnosis",
          text: "GrowthKid is for general education and product demonstration. It cannot diagnose malnutrition, obesity, growth delay, illness, or any medical condition."
        },
        {
          title: "Clinician review",
          text: "Parents should discuss concerning results, sudden changes, persistent high or low z-scores, or symptoms with a pediatrician or qualified healthcare professional."
        },
        {
          title: "Measurement quality",
          text: "Small errors in weight, height, age, or sex selection can change the displayed z-score and percentile. Recheck unexpected results before interpreting them."
        },
        {
          title: "Emergency care",
          text: "This website is not designed for emergencies. Seek local emergency care for urgent symptoms or immediate health concerns."
        }
      ]
    });
  }

  function termsPage() {
    return contentPage({
      eyebrow: "Terms",
      title: "Terms for using GrowthKid",
      copy: "These terms are written for a lightweight calculator prototype and should be reviewed by counsel before a public launch.",
      sideTitle: "Simple expectations",
      sideItems: ["Use for education", "Do not misuse results", "Respect disclaimers", "Review before launch"],
      actionTitle: "Related pages",
      actionText: "The privacy and medical disclaimer pages explain important limits for parents and healthcare users.",
      links: [
        { label: "Privacy", href: "/privacy/" },
        { label: "Medical Disclaimer", href: "/medical-disclaimer/" },
        { label: "Methodology", href: "/methodology/" }
      ],
      sections: [
        {
          title: "Educational use",
          text: "The site provides educational calculations and chart context. It should not be used as the sole basis for medical, nutritional, or treatment decisions."
        },
        {
          title: "Prototype status",
          text: "The current calculator includes WHO 2007 LMS reference data for 5-19 years where WHO provides the indicator. Production use still requires clinical review, privacy review, and legal review."
        },
        {
          title: "No warranty",
          text: "GrowthKid is provided as a prototype without warranties. Accuracy, availability, and fitness for a specific clinical purpose are not guaranteed."
        },
        {
          title: "Responsible use",
          text: "Users are responsible for entering accurate measurements and seeking professional medical advice when needed."
        }
      ]
    });
  }

  function seoQuestionPage(key) {
    const item = seoQuestionPages[key] || seoQuestionPages["baby-weight-percentile"];
    return shell(`
      <main>
        <section class="page-hero">
          <div class="growth-3d-scene" data-growth-3d aria-hidden="true"></div>
          <div class="container page-hero-row">
            <div>
              <span class="eyebrow">${item.eyebrow}</span>
              <h1>${item.title}</h1>
              <p class="page-copy">${item.copy}</p>
              <div class="hero-actions">
                <a class="btn btn-primary" href="${localizedHref("/child-growth-calculator/")}">Start calculator ${icon("arrow")}</a>
                <a class="btn btn-secondary" href="${localizedHref("/growth-charts/")}">View charts</a>
              </div>
            </div>
            ${snapshotCard()}
          </div>
        </section>
        <section class="section">
          <div class="container content-layout">
            <article class="content-panel">
              <div class="content-block">
                <h2>${item.title}</h2>
                <p>${item.intro}</p>
              </div>
              <div class="education-grid">
                ${item.points.map((point) => `<article class="education-card"><span class="check-dot">âœ“</span><p>${point}</p></article>`).join("")}
              </div>
            </article>
            <aside class="side-panel">
              <h2>Free calculator</h2>
              <p>Use the calculator, save a device-only trend, and download a privacy-friendly snapshot.</p>
              <a class="btn btn-primary" href="${localizedHref("/child-growth-calculator/")}">Calculate growth</a>
            </aside>
          </div>
        </section>
        <section class="section section-soft">
          <div class="container">
            <div class="section-header">
              <h2>Parent FAQ</h2>
              <p>Short answers for parents before they interpret a growth result.</p>
            </div>
            <div class="faq-grid">
              ${item.faq.map(([q, a]) => `<article class="faq-item"><h3>${q}</h3><p>${a}</p></article>`).join("")}
            </div>
          </div>
        </section>
        ${seoLinksSection()}
      </main>
    `);
  }

  function embedPage() {
    return `
      <main class="embed-shell">
        <section class="embed-head">
          <a class="brand" href="${localizedHref("/")}" target="_blank" rel="noreferrer">
            <span class="brand-mark">${icon("spark")}</span>
            <span>GrowthKid</span>
          </a>
          <a class="btn btn-quiet" href="${localizedHref("/child-growth-calculator/")}" target="_blank" rel="noreferrer">Open full calculator</a>
        </section>
        ${calculatorCard(true)}
        ${resultsBlock(false)}
      </main>
    `;
  }

  function trustBandSection() {
    const items = [
      { title: "WHO reference", text: "Designed around WHO Child Growth Standards and z-score interpretation." },
      { title: "No signup", text: "Parents can check growth without creating an account." },
      { title: "Local first", text: "Measurements stay in the browser unless the user chooses to download them." },
      { title: "Educational", text: "Clear medical disclaimers keep the tool supportive, not diagnostic." }
    ];

    return `
      <section class="trust-band">
        <div class="container trust-band-grid">
          ${items.map((item) => `
            <div class="trust-card">
              <span class="check-dot">✓</span>
              <div>
                <strong>${item.title}</strong>
                <p>${item.text}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  function methodologySection() {
    const steps = [
      { title: "Age in months", text: "The calculator converts date of birth and measurement date into age in months." },
      { title: "Sex-specific curves", text: "Growth references differ for boys and girls, so sex is part of the calculation." },
      { title: "Z-score estimate", text: "A z-score estimates how far a measurement is from the reference median." },
      { title: "Percentile view", text: "Percentiles make the result easier for parents to compare with chart lines." }
    ];

    return `
      <section class="section">
        <div class="container split-section">
          <div class="section-header">
            <span class="eyebrow">Methodology</span>
            <h2>How this calculator works</h2>
            <p>GrowthKid keeps the calculation flow transparent so parents understand what each input changes.</p>
            <div class="tool-links">
              <a href="${localizedHref("/methodology/")}">Data source and methodology</a>
              <a href="${localizedHref("/medical-disclaimer/")}">Medical disclaimer</a>
            </div>
          </div>
          <div class="method-grid">
            ${steps.map((step, index) => `
              <article class="method-card">
                <span class="method-index">${index + 1}</span>
                <h3>${step.title}</h3>
                <p>${step.text}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function measurementGuideSection() {
    const tips = [
      "Use a recent and accurate measurement date.",
      "Weigh the child without heavy clothing or shoes.",
      "Measure length or height on a flat surface with the child properly positioned.",
      "Repeat measurements if a result looks very different from the child's usual trend.",
      "Talk to a pediatrician for growth concerns, sudden changes, or extreme z-scores."
    ];

    return `
      <section class="section section-soft">
        <div class="container split-section">
          <div class="section-header">
            <span class="eyebrow">Measurement guide</span>
            <h2>Measure carefully before interpreting growth</h2>
            <p>Small measurement errors can move a child across percentile lines, especially for infants and toddlers.</p>
          </div>
          <div class="guide-panel">
            ${tips.map((tip) => `<div class="guide-row"><span class="check-dot">✓</span><p>${tip}</p></div>`).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function viralToolkitSection() {
    const embedCode = `<iframe src="${window.location.origin}/embed/child-growth-calculator/" width="100%" height="720" loading="lazy" title="GrowthKid Child Growth Calculator"></iframe>`;

    return `
      <section class="section">
        <div class="container viral-grid">
          <article class="viral-card">
            <span class="icon-box">${icon("share")}</span>
            <h2>Shareable growth snapshots</h2>
            <p>Turn a result into a clean privacy-friendly image that parents can save, share, or bring to a pediatric visit.</p>
            <a class="btn btn-primary" href="${localizedHref("/child-growth-calculator/")}">Create a snapshot ${icon("arrow")}</a>
          </article>
          <article class="viral-card">
            <span class="icon-box">${icon("chart")}</span>
            <h2>Trend tracker</h2>
            <p>Save repeated measurements on this device to compare a child's pattern over time instead of reacting to one point.</p>
            <a class="btn btn-secondary" href="${localizedHref("/growth-results/")}">View trend tracker</a>
          </article>
          <article class="viral-card">
            <span class="icon-box">${icon("copy")}</span>
            <h2>Embed the calculator</h2>
            <p>Clinics, newsletters, and parenting blogs can embed the calculator with a simple iframe.</p>
            <div class="embed-actions">
              <button class="btn btn-quiet" id="copyEmbedCode" data-embed-code="${escapeHtml(embedCode)}" type="button">${icon("copy")} Copy embed code</button>
              <a class="btn btn-secondary" href="${localizedHref("/embed/child-growth-calculator/")}" target="_blank" rel="noreferrer">Preview widget</a>
            </div>
          </article>
        </div>
      </section>
    `;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function assessmentSection() {
    const features = [
      { icon: "chart", title: "Weight-for-age", text: "Compare weight with age-based reference curves and percentile bands." },
      { icon: "ruler", title: "Height-for-age", text: "Track height in centimeters with a current point on the chart." },
      { icon: "spark", title: "BMI-for-age", text: "Convert weight and height into BMI-for-age z-score context." },
      { icon: "shield", title: "Growth Charts", text: "Visualize percentile lines, z-score bands, and child measurement trends." }
    ];

    return `
      <section class="section section-soft">
        <div class="container">
          <div class="section-header">
            <h2>WHO-based growth assessment</h2>
            <p>Built for a fast parent workflow while still matching the mental model healthcare professionals expect.</p>
          </div>
          <div class="feature-grid">
            ${features.map((feature) => `
              <article class="feature-card">
                <span class="icon-box">${icon(feature.icon)}</span>
                <h3>${feature.title}</h3>
                <p>${feature.text}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function seoLinksSection() {
    return `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2>Calculator tools</h2>
            <p>Each calculator has its own landing page, FAQ, WHO explanation, and internal links for organic search.</p>
          </div>
          <div class="seo-grid">
            ${tools.map((tool) => `
              <a class="seo-card" href="${localizedHref(tool.href)}">
                <h3>${tool.label}</h3>
                <p>Open a focused calculator page with result cards, chart context, and parent-friendly explanations.</p>
              </a>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function calculatorSeoContent(kind) {
    const content = {
      calculator: {
        title: "What parents can learn from a child growth calculator",
        intro: "A child growth calculator helps organize measurements by age and sex, then turns them into easier-to-read indicators.",
        points: ["Weight-for-age can flag broad growth patterns.", "Height-for-age helps monitor linear growth.", "BMI-for-age adds context when both weight and height are available."]
      },
      bmi: {
        title: "What BMI-for-age means",
        intro: "BMI-for-age compares body mass index with children of the same age and sex rather than using adult BMI ranges.",
        points: ["BMI is calculated from weight and height.", "Age and sex change the interpretation.", "A pediatrician should review persistent high or low results."]
      },
      weight: {
        title: "What weight-for-age means",
        intro: "Weight-for-age compares a child's weight with age-based reference values and is most useful when tracked over time.",
        points: ["One measurement is a snapshot.", "Trends are more useful than a single point.", "Recent illness or measurement error can affect the result."]
      },
      height: {
        title: "What height-for-age means",
        intro: "Height-for-age helps show whether linear growth is tracking near expected reference curves.",
        points: ["Use accurate height or length technique.", "Review trends across several visits.", "Discuss sudden changes or very low z-scores with a clinician."]
      },
      head: {
        title: "What head circumference-for-age means",
        intro: "Head circumference is commonly monitored in infancy and early childhood as one part of development tracking.",
        points: ["Use a non-stretch measuring tape.", "Measure the widest part of the head.", "Follow up with a clinician if the trend changes quickly."]
      }
    };
    const item = content[kind] || content.calculator;

    return `
      <section class="section">
        <div class="container seo-content">
          <div class="section-header">
            <span class="eyebrow">Growth education</span>
            <h2>${item.title}</h2>
            <p>${item.intro}</p>
          </div>
          <div class="education-grid">
            ${item.points.map((point) => `
              <article class="education-card">
                <span class="check-dot">✓</span>
                <p>${point}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function articlesSection(full) {
    return `
      <section class="section ${full ? "section-soft" : ""}">
        <div class="container">
          <div class="section-header">
            <h2>Recent Articles</h2>
            <p>Short, practical content designed for international search traffic.</p>
          </div>
          <div class="article-grid">
            ${articles.map((article) => `
              <article class="article-card">
                <span class="article-meta">${article.tag}</span>
                <h3>${article.title}</h3>
                <p>${article.text}</p>
                <a class="btn btn-quiet" href="${localizedHref(article.href || "/articles/")}">Read article ${icon("arrow")}</a>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function faqSection(kind) {
    const title = kind === "bmi" ? "BMI calculator FAQ" : kind === "weight" ? "Weight-for-age FAQ" : kind === "height" ? "Height-for-age FAQ" : "Child growth FAQ";
    const questions = [
      {
        q: "What are WHO Child Growth Standards?",
        a: "They are international growth references developed from the WHO Multicentre Growth Reference Study for assessing young children's physical growth."
      },
      {
        q: "What does a z-score mean?",
        a: "A z-score describes how far a measurement is from the reference median. Values near zero are close to the median."
      },
      {
        q: "When should parents talk to a clinician?",
        a: "A single result is only one signal. Discuss growth concerns, sudden trend changes, or extreme z-scores with a qualified healthcare professional."
      }
    ];

    return `
      <section class="section section-soft">
        <div class="container">
          <div class="section-header">
            <h2>${title}</h2>
            <p>Concise educational copy for SEO and for parents who want context before interpreting a result.</p>
          </div>
          <div class="faq-grid">
            ${questions.map((item) => `
              <article class="faq-item">
                <h3>${item.q}</h3>
                <p>${item.a}</p>
              </article>
            `).join("")}
          </div>
          <div class="tool-links">
            ${tools.map((tool) => `<a href="${localizedHref(tool.href)}">${tool.label}</a>`).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function resultsBlock(forceVisible) {
    const result = readSavedResult() || sampleResult();
    const hiddenClass = forceVisible || resultsVisible ? "" : " style=\"display:none\"";
    const chartIndicator = lastChartIndicator || "height";

    return `
      <section class="results-section" id="results"${hiddenClass}>
        <div class="container">
          <div class="results-header">
            <div>
              <h1>Growth Results</h1>
              <div class="results-meta" id="resultMeta">
                ${localizedResultMeta(result)}
              </div>
            </div>
            <div class="results-actions">
              <button class="btn btn-primary" id="downloadReport" type="button">${icon("download")} Download report</button>
              <button class="btn btn-secondary" id="downloadSnapshot" type="button">${icon("download")} Download PNG</button>
              <button class="btn btn-secondary" id="shareSnapshot" type="button">${icon("share")} Share snapshot</button>
              <button class="btn btn-quiet" id="saveTrendPoint" type="button">${icon("chart")} Save to trend</button>
              <a class="btn btn-secondary" href="${localizedHref("/growth-results/")}">View results page</a>
            </div>
          </div>
          <div class="results-layout">
            <aside class="side-panel">
              <h2>Overview</h2>
              <div class="legend">
                <span class="legend-item"><span class="legend-swatch p97"></span>97th percentile</span>
                <span class="legend-item"><span class="legend-swatch p85"></span>85th percentile</span>
                <span class="legend-item"><span class="legend-swatch p50"></span>50th percentile</span>
                <span class="legend-item"><span class="legend-swatch p15"></span>15th percentile</span>
                <span class="legend-item"><span class="legend-swatch p3"></span>3rd percentile</span>
                <span class="legend-item"><span class="legend-swatch child"></span>Your child</span>
              </div>
              <div class="disclaimer">Educational use only. The calculator uses WHO Child Growth Standards for 0-5 years and WHO Growth Reference 2007 for 5-19 years where WHO provides the indicator.</div>
            </aside>
            <div>
              <div class="result-grid" id="resultCards">${resultCards(result)}</div>
              <section class="reference-comparison" id="referenceComparison">${referenceComparison(result)}</section>
              <div class="chart-and-panel">
                <section class="chart-card">
                  <div class="chart-card-header">
                    <h2 id="chartTitle">${chartTitle(chartIndicator)}</h2>
                    <div class="chart-tabs">
                      <button class="chart-tab ${chartIndicator === "weight" ? "is-active" : ""}" data-chart="weight" type="button">Weight</button>
                      <button class="chart-tab ${chartIndicator === "height" ? "is-active" : ""}" data-chart="height" type="button">Height</button>
                      <button class="chart-tab ${chartIndicator === "bmi" ? "is-active" : ""}" data-chart="bmi" type="button">BMI</button>
                    </div>
                  </div>
                  <div class="growth-chart" id="growthChart">${chartSvg(result, chartIndicator, false)}</div>
                </section>
                <aside class="side-panel" id="interpretation">${interpretation(result, chartIndicator)}</aside>
              </div>
              <div class="post-results-grid">
                <section class="share-preview" id="shareSnapshotPreview">${snapshotPreview(result)}</section>
                <section class="trend-card" id="trendTracker">${trendTrackerInner(result)}</section>
                <section class="question-card">${pediatricianChecklist()}</section>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function snapshotPreview(result) {
    const metric = highlightMetric(result);
    const status = statusLabel(metric.status);
    const statusText = compactStatusLabel(status);
    const percentileLabel = metric.percentile === null ? "--" : `${t("Percentile")} ${Math.round(metric.percentile)}`;
    return `
      <div class="share-preview-top">
        <div>
          <span class="eyebrow">${t("Social snapshot")}</span>
          <h2>${t("Growth check-in")}</h2>
        </div>
        ${statusPill(metric.status)}
      </div>
      <div class="snapshot-result">
        <strong>${metric.percentile === null ? "--" : Math.round(metric.percentile)}</strong>
        <div>
          <span>${percentileLabel}</span>
          <p>${t(titleFor(metric.key))} - ${t("Z-score")} ${metric.z === null ? "--" : signed(metric.z)}</p>
        </div>
      </div>
      <p class="source-note">${t("Designed as a clean, name-free card for stories, messages, and private family sharing.")}</p>
    `;
  }

  function highlightMetric(result) {
    return result.metrics.find((metric) => metric.key === "height" && metric.z !== null)
      || result.metrics.find((metric) => metric.z !== null)
      || result.metrics[0];
  }

  function trendTrackerInner(currentResult) {
    const points = readTrendPoints();
    const hasPoints = points.length > 0;
    return `
      <div class="trend-header">
        <div>
          <span class="eyebrow">Trend tracker</span>
          <h2>Saved measurements</h2>
          <p>Stored on this device only. Trends are more useful than one isolated point.</p>
        </div>
        <button class="btn btn-quiet" id="clearTrend" type="button" ${hasPoints ? "" : "disabled"}>Clear</button>
      </div>
      <div class="trend-chart">${hasPoints ? trendSvg(points) : emptyTrendState(currentResult)}</div>
      ${hasPoints ? trendTable(points) : ""}
    `;
  }

  function emptyTrendState(currentResult) {
    const metric = highlightMetric(currentResult);
    return `
      <div class="empty-note">
        ${t("Save the current result to start a device-only trend. Current")} ${t(titleFor(metric.key)).toLowerCase()}: ${metric.percentile === null ? "--" : ordinal(metric.percentile)}.
      </div>
    `;
  }

  function pediatricianChecklist() {
    const questions = [
      "Is my child's growth trend steady over time?",
      "Should we recheck weight or height before interpreting this result?",
      "Does recent illness, feeding, or prematurity affect the result?",
      "When should we measure again?",
      "Are there symptoms or history that make this result more important?"
    ];

    return `
      <span class="eyebrow">Pediatrician checklist</span>
      <h2>Questions to ask at the next visit</h2>
      <div class="question-list">
        ${questions.map((question) => `<label><input type="checkbox"> <span>${question}</span></label>`).join("")}
      </div>
      <button class="btn btn-secondary" id="copyQuestions" type="button">${icon("copy")} Copy questions</button>
    `;
  }

  function resultCards(result) {
    return result.metrics.map((metric) => `
      <article class="result-card">
        <div class="result-title">
          <span class="icon-box">${icon(metric.icon)}</span>
          <span>${t(titleFor(metric.key))}</span>
        </div>
        <div class="result-value">
          <span>${t("Z-score")}</span>
          <strong>${metric.z === null ? "--" : signed(metric.z)}</strong>
        </div>
        ${statusPill(metric.status)}
        <div>
          <span class="result-value"><span>${t("Percentile")}</span></span>
          <span class="percentile">${metric.percentile === null ? "--" : ordinal(metric.percentile)}</span>
        </div>
      </article>
    `).join("");
  }

  function referenceComparison(result) {
    const items = [
      referenceComparisonItem(result, "weight", result.weight, "kg"),
      referenceComparisonItem(result, "height", result.height, "cm")
    ];

    return `
      <div class="reference-comparison-header">
        <div>
          <h2>${t("WHO 50th percentile reference")}</h2>
          <p>${t("A quick comparison with the WHO median for this age and sex. This is a reference point, not a required target.")}</p>
        </div>
      </div>
      <div class="reference-comparison-grid">
        ${items.join("")}
      </div>
    `;
  }

  function referenceComparisonItem(result, key, currentValue, unit) {
    const reference = idealReferenceValue(result, key);
    const title = key === "weight" ? "Weight" : "Height";

    if (!Number.isFinite(reference)) {
      return `
        <article class="reference-card">
          <div class="reference-card-title">
            <span class="icon-box">${icon(key === "weight" ? "chart" : "ruler")}</span>
            <strong>${t(title)}</strong>
          </div>
          <p class="reference-unavailable">${t("WHO reference is not available for this age.")}</p>
        </article>
      `;
    }

    const difference = currentValue - reference;
    return `
      <article class="reference-card">
        <div class="reference-card-title">
          <span class="icon-box">${icon(key === "weight" ? "chart" : "ruler")}</span>
          <strong>${t(title)}</strong>
        </div>
        <div class="reference-values">
          <div><span>${t("Current")}</span><strong>${formatMeasurement(currentValue, unit)}</strong></div>
          <div><span>${t("Reference")}</span><strong>${formatMeasurement(reference, unit)}</strong></div>
          <div><span>${t("Difference")}</span><strong>${signedMeasurement(difference, unit)}</strong></div>
        </div>
        <p>${t("Compared with WHO median")}</p>
      </article>
    `;
  }

  function idealReferenceValue(result, key) {
    const value = referenceValue(result.sex || "boy", key, result.ageMonths || 0, 0);
    return Number.isFinite(value) ? value : null;
  }

  function formatMeasurement(value, unit) {
    const digits = unit === "kg" ? 1 : 1;
    return `${value.toFixed(digits)} ${unit}`;
  }

  function signedMeasurement(value, unit) {
    const sign = value > 0 ? "+" : "";
    return `${sign}${formatMeasurement(value, unit)}`;
  }

  function statusPill(status) {
    const label = statusLabel(status);
    const key = statusKey(status);
    return `<span class="status status-${key}"><span class="status-dot"></span>${t(label)}</span>`;
  }

  function statusKey(status) {
    const label = statusLabel(status);
    if (label === "Consult a healthcare professional") return "consult";
    if (label === "Monitor") return "monitor";
    if (label === "Not available" || label === "Not entered") return "neutral";
    return "normal";
  }

  function interpretation(result, indicator) {
    const metric = result.metrics.find((item) => item.key === indicator);
    if (!metric || metric.z === null) {
      return `
        <h2>${t("Interpretation")}</h2>
        <p>${t((metric && metric.reason) || "Add this measurement to calculate a z-score and percentile.")}</p>
      `;
    }

    const sentence = activeLanguage === defaultLanguage
      ? `Your child's ${titleFor(metric.key).toLowerCase()} is currently marked as <strong>${statusLabel(metric.status)}</strong>.`
      : template("interpretationMetric", {
        metric: t(titleFor(metric.key)),
        status: `<strong>${t(statusLabel(metric.status))}</strong>`
      });

    return `
      <h2>${t("Interpretation")}</h2>
      <p>${sentence}</p>
      <p>${t(statusDetail(metric.status))}</p>
      <div>
        <h3>${t("About z-score")}</h3>
        <ul>
          <li>${t("Normal: -2 to +2.")}</li>
          <li>${t("Monitor: below -2 or above +2.")}</li>
          <li>${t("Consult: below -3 or above +3.")}</li>
        </ul>
      </div>
      <a class="btn btn-quiet" href="https://www.who.int/tools/child-growth-standards" target="_blank" rel="noreferrer">${t("Learn about WHO standards")} ${icon("arrow")}</a>
    `;
  }

  function statusDetail(status) {
    const label = statusLabel(status);
    if (label === "Not available") {
      return "WHO does not provide this reference for the selected age range.";
    }
    if (label === "Not entered") {
      return "Add this measurement to calculate a z-score and percentile.";
    }
    if (label === "Consult a healthcare professional") {
      return "This result is far from the reference range. Consider discussing it with a healthcare professional.";
    }
    if (label === "Monitor") {
      return "This result is outside the typical range. Recheck the measurement and monitor the trend over time.";
    }
    return "This result is within the typical range for age and sex. Keep tracking growth over time.";
  }

  function calculateGrowth(form) {
    const data = form instanceof HTMLFormElement ? Object.fromEntries(new FormData(form).entries()) : form;
    return calculateGrowthData(data);
  }

  function calculateGrowthData(data) {
    const dob = parseInputDate(data.dob);
    const measureDate = parseInputDate(data.measureDate);
    const weight = Number(data.weight);
    const height = Number(data.height);
    const head = data.head ? Number(data.head) : null;
    const sex = data.sex === "girl" ? "girl" : "boy";
    const ageMonths = monthDiff(dob, measureDate);

    if (!Number.isFinite(ageMonths) || ageMonths < 0) {
      throw new Error("Measurement date must be after date of birth.");
    }

    if (ageMonths > who2007MaxMonths) {
      throw new Error("This calculator supports children from birth to 19 years (228 months).");
    }

    if (ageMonths > underFiveMaxMonths && !hasWho2007Reference()) {
      throw new Error("WHO 2007 reference data could not be loaded. Please refresh and try again.");
    }

    if (!weight || !height) {
      throw new Error("Please enter weight and height.");
    }

    const bmi = weight / Math.pow(height / 100, 2);
    const metrics = [
      metric("weight", "Weight-for-age", "chart", sex, ageMonths, weight),
      metric("height", "Height-for-age", "ruler", sex, ageMonths, height),
      metric("bmi", "BMI-for-age", "spark", sex, ageMonths, bmi),
      head ? metric("head", "Head circumference", "shield", sex, ageMonths, head) : unavailableMetric(
        "head",
        "Head circumference",
        "shield",
        null,
        "notEntered",
        "Add this measurement to calculate a z-score and percentile."
      )
    ];

    return {
      sex,
      ageMonths,
      ageLabel: ageLabel(ageMonths),
      measureDate: toIsoDate(measureDate),
      referenceLabel: referenceLabel(ageMonths),
      weight,
      height,
      bmi,
      head,
      metrics
    };
  }

  function parseInputDate(value) {
    const raw = String(value || "").trim();
    const dmy = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    const compact = raw.match(/^(\d{2})(\d{2})(\d{4})$/);
    const iso = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    const parts = dmy
      ? { day: Number(dmy[1]), month: Number(dmy[2]), year: Number(dmy[3]) }
      : compact
        ? { day: Number(compact[1]), month: Number(compact[2]), year: Number(compact[3]) }
      : iso
        ? { day: Number(iso[3]), month: Number(iso[2]), year: Number(iso[1]) }
        : null;
    if (!parts) return new Date(NaN);
    const date = new Date(parts.year, parts.month - 1, parts.day);
    if (date.getFullYear() !== parts.year || date.getMonth() !== parts.month - 1 || date.getDate() !== parts.day) {
      return new Date(NaN);
    }
    return date;
  }

  function formatDateInputValue(value) {
    const raw = String(value || "").trim();
    const date = parseInputDate(raw);
    if (Number.isFinite(date.getTime())) {
      return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
    }

    const digits = raw.replace(/\D/g, "");
    if (digits.length === 8) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
    }

    return raw;
  }

  function maskDateInputValue(value) {
    const digits = String(value || "").replace(/\D/g, "").slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  }

  function dateInputValidationMessage(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";

    const digits = raw.replace(/\D/g, "");
    const day = digits.length >= 2 ? Number(digits.slice(0, 2)) : null;
    const month = digits.length >= 4 ? Number(digits.slice(2, 4)) : null;
    const year = digits.length === 8 ? Number(digits.slice(4, 8)) : null;

    if (day !== null && (day < 1 || day > 31)) return "Enter a valid day from 01 to 31.";
    if (month !== null && (month < 1 || month > 12)) return "Enter a valid month from 01 to 12.";
    if (year !== null) {
      const parsed = parseInputDate(maskDateInputValue(digits));
      if (!Number.isFinite(parsed.getTime())) return "Enter a valid date.";
    }

    return "";
  }

  function localizedDateValidationMessage(message) {
    if (activeLanguage !== "vi") return t(message);
    const messages = {
      "Enter a valid day from 01 to 31.": "Ngay phai tu 01 den 31.",
      "Enter a valid month from 01 to 12.": "Thang phai tu 01 den 12.",
      "Enter a valid date.": "Vui long nhap ngay hop le."
    };
    return messages[message] || t(message);
  }

  function toIsoDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function metric(key, label, iconName, sex, ageMonths, value) {
    if (ageMonths > underFiveMaxMonths) {
      return who2007Metric(key, label, iconName, sex, ageMonths, value);
    }

    const median = refValue(sex, key, ageMonths);
    const sd = median * sdRatio[key];
    const z = clamp((value - median) / sd, -4, 4);
    return {
      key,
      label,
      icon: iconName,
      value,
      z,
      percentile: zToPercentile(z),
      status: statusForMetric(key, z, ageMonths)
    };
  }

  function who2007Metric(key, label, iconName, sex, ageMonths, value) {
    if (key === "head") {
      return unavailableMetric(
        key,
        label,
        iconName,
        value,
        "notAvailable",
        "WHO Growth Reference 2007 does not include head circumference-for-age for 5-19 years."
      );
    }

    if (key === "weight" && ageMonths > who2007WeightMaxMonths) {
      return unavailableMetric(
        key,
        label,
        iconName,
        value,
        "notAvailable",
        "WHO weight-for-age reference data are available from 5 to 10 years only."
      );
    }

    const lms = who2007LmsAt(sex, key, ageMonths);
    if (!lms) {
      return unavailableMetric(
        key,
        label,
        iconName,
        value,
        "notAvailable",
        "WHO does not provide this reference for the selected age range."
      );
    }

    const z = clamp(lmsZScore(value, lms), -4, 4);
    return {
      key,
      label,
      icon: iconName,
      value,
      z,
      percentile: zToPercentile(z),
      status: statusForMetric(key, z, ageMonths)
    };
  }

  function unavailableMetric(key, label, iconName, value, status, reason) {
    return {
      key,
      label,
      icon: iconName,
      value,
      z: null,
      percentile: null,
      status,
      reason
    };
  }

  function hasWho2007Reference() {
    return Boolean(who2007 && who2007.data && who2007.data.boy && who2007.data.girl);
  }

  function referenceLabel(ageMonths) {
    return ageMonths > underFiveMaxMonths ? "WHO Growth Reference 2007" : "WHO Child Growth Standards 2006";
  }

  function who2007LmsAt(sex, key, months) {
    const rows = who2007 && who2007.data && who2007.data[sex] && who2007.data[sex][key];
    if (!rows || !rows.length) return null;
    if (months < rows[0][0]) return months >= underFiveMaxMonths ? lmsObject(rows[0]) : null;
    if (months > rows[rows.length - 1][0]) return null;
    if (months === rows[0][0]) return lmsObject(rows[0]);

    for (let i = 0; i < rows.length - 1; i += 1) {
      const current = rows[i];
      const next = rows[i + 1];
      if (months >= current[0] && months <= next[0]) {
        const ratio = (months - current[0]) / (next[0] - current[0]);
        return {
          l: current[1] + (next[1] - current[1]) * ratio,
          m: current[2] + (next[2] - current[2]) * ratio,
          s: current[3] + (next[3] - current[3]) * ratio
        };
      }
    }

    return lmsObject(rows[rows.length - 1]);
  }

  function lmsObject(row) {
    return { l: row[1], m: row[2], s: row[3] };
  }

  function lmsZScore(value, lms) {
    if (!lms || !lms.m || !lms.s) return 0;
    if (Math.abs(lms.l) < 0.000001) return Math.log(value / lms.m) / lms.s;
    return (Math.pow(value / lms.m, lms.l) - 1) / (lms.l * lms.s);
  }

  function lmsValueAtZ(lms, z) {
    if (!lms || !lms.m || !lms.s) return null;
    if (Math.abs(lms.l) < 0.000001) return lms.m * Math.exp(lms.s * z);
    const base = 1 + lms.l * lms.s * z;
    return base > 0 ? lms.m * Math.pow(base, 1 / lms.l) : null;
  }

  function referenceValue(sex, key, months, z) {
    if (months > underFiveMaxMonths && key !== "head") {
      const lms = who2007LmsAt(sex, key, months);
      return lmsValueAtZ(lms, z);
    }

    const median = refValue(sex, key, clamp(months, 0, underFiveMaxMonths));
    return median + median * sdRatio[key] * z;
  }

  function refValue(sex, key, months) {
    const points = refs[sex][key];
    if (months <= points[0][0]) return points[0][1];
    if (months >= points[points.length - 1][0]) return points[points.length - 1][1];

    for (let i = 0; i < points.length - 1; i += 1) {
      const current = points[i];
      const next = points[i + 1];
      if (months >= current[0] && months <= next[0]) {
        const t = (months - current[0]) / (next[0] - current[0]);
        const previous = points[Math.max(0, i - 1)][1];
        const currentValue = current[1];
        const nextValue = next[1];
        const following = points[Math.min(points.length - 1, i + 2)][1];
        const value = cubicInterpolate(previous, currentValue, nextValue, following, t);
        return clamp(value, Math.min(currentValue, nextValue), Math.max(currentValue, nextValue));
      }
    }

    return points[points.length - 1][1];
  }

  function cubicInterpolate(previous, current, next, following, t) {
    const t2 = t * t;
    const t3 = t2 * t;
    return 0.5 * (
      (2 * current) +
      (-previous + next) * t +
      (2 * previous - 5 * current + 4 * next - following) * t2 +
      (-previous + 3 * current - 3 * next + following) * t3
    );
  }

  function chartScale(sex, indicator, domain, ageMonths) {
    const values = [];
    for (let m = domain.start; m <= domain.end; m += domain.pathStep) {
      [-3, -2, -1, 0, 1, 2, 3].forEach((z) => {
        const value = chartReferenceValue(sex, indicator, m, z, ageMonths);
        if (Number.isFinite(value)) values.push(value);
      });
    }
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max - min || 1;
    return { min: min - span * 0.04, max: max + span * 0.04 };
  }

  function chartValueToY(value, scale, top, bottom) {
    return bottom - ((value - scale.min) / (scale.max - scale.min || 1)) * (bottom - top);
  }

  function chartSvg(result, indicator, compact) {
    const sex = result.sex || "boy";
    const width = compact ? 560 : 760;
    const height = compact ? 310 : 520;
    const padding = compact ? { left: 42, right: 24, top: 24, bottom: 38 } : { left: 56, right: 96, top: 32, bottom: 62 };
    const metric = result.metrics && result.metrics.find((item) => item.key === indicator);

    if (metric && metric.status === "notAvailable") {
      return unavailableChartSvg(indicator, compact, metric.reason);
    }

    const zLines = [
      { z: 1.88, label: "97th", cls: "p97", color: "#ef4444" },
      { z: 1, label: "85th", cls: "p85", color: "#f59e0b" },
      { z: 0, label: "50th", cls: "p50", color: "#16a34a" },
      { z: -1, label: "15th", cls: "p15", color: "#f59e0b" },
      { z: -1.88, label: "3rd", cls: "p3", color: "#ef4444" }
    ];
    const domain = chartDomain(result, indicator);
    const ticks = chartTicks(domain);
    const childValue = indicator === "bmi" ? result.bmi : result[indicator];
    const hasChartPoint = metric && metric.status !== "notAvailable";
    if (!hasChartPoint) {
      return unavailableChartSvg(indicator, compact, "WHO reference is not available for the selected age range.");
    }

    const x = (months) => padding.left + ((months - domain.start) / (domain.end - domain.start)) * (width - padding.left - padding.right);
    const scale = chartScale(sex, indicator, domain, result.ageMonths || 24);
    const yForValue = (value) => chartValueToY(value, scale, padding.top, height - padding.bottom);
    const yForZ = (month, zValue) => {
      const value = chartReferenceValue(sex, indicator, month, zValue, result.ageMonths || 24);
      return yForValue(value);
    };
    const pathFor = (z) => {
      const points = [];
      for (let m = domain.start; m <= domain.end; m += domain.pathStep) {
        const value = chartReferenceValue(sex, indicator, m, z, result.ageMonths || 24);
        if (Number.isFinite(value)) points.push(`${x(m).toFixed(1)},${yForValue(value).toFixed(1)}`);
      }
      return points.map((point, index) => `${index === 0 ? "M" : "L"}${point}`).join(" ");
    };

    const gridY = Array.from({ length: 5 }, (_, index) => scale.min + ((scale.max - scale.min) * index) / 4);
    const childMonth = clamp(result.ageMonths || 24, domain.start, domain.end);
    const childX = x(childMonth);
    const childReferenceValue = metric && Number.isFinite(metric.z)
      ? chartReferenceValue(sex, indicator, childMonth, metric.z, result.ageMonths || 24)
      : childValue;
    const childY = yForValue(childReferenceValue || chartReferenceValue(sex, indicator, childMonth, 0, result.ageMonths || 24));
    const unit = indicator === "weight" ? "kg" : indicator === "height" ? "cm" : "BMI";

    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${indicator} growth chart">
        <rect x="0" y="0" width="${width}" height="${height}" fill="#ffffff"></rect>
        ${gridY.map((value) => `
          <line x1="${padding.left}" y1="${yForValue(value).toFixed(1)}" x2="${width - padding.right}" y2="${yForValue(value).toFixed(1)}" stroke="#e2e8f0" stroke-width="1"></line>
          <text x="${padding.left - 10}" y="${yForValue(value).toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#64748b" font-size="12">${Math.round(value)}</text>
        `).join("")}
        ${ticks.map((month) => `
          <line x1="${x(month).toFixed(1)}" y1="${padding.top}" x2="${x(month).toFixed(1)}" y2="${height - padding.bottom}" stroke="#eef2f7" stroke-width="1"></line>
          <text x="${x(month).toFixed(1)}" y="${height - 18}" text-anchor="middle" fill="#64748b" font-size="12">${month}</text>
        `).join("")}
        <line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="#94a3b8" stroke-width="1.2"></line>
        <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="#94a3b8" stroke-width="1.2"></line>
        ${zLines.map((line) => `
          <path d="${pathFor(line.z)}" fill="none" stroke="${line.color}" stroke-width="${line.z === 0 ? 2.4 : 1.6}" opacity="${line.z === 0 ? 0.95 : 0.72}"></path>
          ${compact ? "" : `<text x="${width - padding.right + 16}" y="${yForZ(domain.end, line.z).toFixed(1)}" fill="#334155" font-size="12" dominant-baseline="middle">${line.label}</text>`}
        `).join("")}
        ${metric && metric.z !== null ? `<circle cx="${childX.toFixed(1)}" cy="${childY.toFixed(1)}" r="${compact ? 5 : 6}" fill="#2563eb" stroke="#ffffff" stroke-width="3"></circle>` : ""}
        <text x="${padding.left}" y="${compact ? 20 : 22}" fill="#0f172a" font-size="${compact ? 14 : 16}" font-weight="800">${t(titleFor(indicator))} (${unit})</text>
        <text x="${(width - padding.right + padding.left) / 2}" y="${height - 4}" text-anchor="middle" fill="#64748b" font-size="12">${t("Age (months)")}</text>
      </svg>
    `;
  }

  function unavailableChartSvg(indicator, compact, reason) {
    const width = compact ? 560 : 760;
    const height = compact ? 310 : 520;
    const message = t(reason || "WHO reference is not available for the selected age range.");
    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${indicator} growth chart unavailable">
        <rect x="0" y="0" width="${width}" height="${height}" fill="#ffffff"></rect>
        <rect x="${compact ? 42 : 56}" y="${compact ? 64 : 128}" width="${width - (compact ? 84 : 112)}" height="${compact ? 160 : 220}" rx="8" fill="#f8fafc" stroke="#dbe4f0"></rect>
        <text x="${width / 2}" y="${compact ? 130 : 220}" text-anchor="middle" fill="#0f172a" font-size="${compact ? 17 : 22}" font-weight="800">${t(titleFor(indicator))}</text>
        <text x="${width / 2}" y="${compact ? 162 : 260}" text-anchor="middle" fill="#475569" font-size="${compact ? 12 : 15}">${escapeHtml(message)}</text>
      </svg>
    `;
  }

  function chartDomain(result, indicator) {
    if ((result.ageMonths || 24) <= underFiveMaxMonths) {
      if (indicator === "bmi" && (result.ageMonths || 24) >= 6) {
        return { start: 3, end: underFiveMaxMonths, step: 3, pathStep: 1 };
      }
      return { start: 0, end: underFiveMaxMonths, step: 3, pathStep: 2 };
    }

    if (indicator === "weight") {
      return { start: underFiveMaxMonths, end: who2007WeightMaxMonths, step: 3, pathStep: 2 };
    }

    return { start: underFiveMaxMonths, end: who2007MaxMonths, step: 6, pathStep: 4 };
  }

  function chartTicks(domain) {
    if (domain.start === 3 && domain.end === underFiveMaxMonths) return [3, 12, 24, 36, 48, 60];
    if (domain.end === underFiveMaxMonths) return [0, 12, 24, 36, 48, 60];
    if (domain.end === who2007WeightMaxMonths) return [60, 72, 84, 96, 108, 120];
    return [60, 96, 132, 168, 204, 228];
  }

  function chartReferenceValue(sex, indicator, month, z, ageMonths) {
    if (ageMonths > underFiveMaxMonths && indicator !== "head") {
      const max = indicator === "weight" ? who2007WeightMaxMonths : who2007MaxMonths;
      const lms = who2007LmsAt(sex, indicator, clamp(month, 61, max));
      return lmsValueAtZ(lms, z);
    }

    return referenceValue(sex, indicator, month, z);
  }

  function sampleResult() {
    return calculateGrowthData({
      dob: "2022-05-15",
      measureDate: "2024-05-15",
      sex: "boy",
      weight: "12.5",
      height: "87",
      head: ""
    });
  }

  function currentDateInputValues() {
    const today = new Date();
    const iso = toIsoDate(today);
    return { iso, display: formatDateInputValue(iso) };
  }

  function titleFor(indicator) {
    const titles = {
      weight: "Weight-for-age",
      height: "Height-for-age",
      bmi: "BMI-for-age",
      head: "Head circumference"
    };
    return titles[indicator] || "Growth";
  }

  function titleForPage() {
    const titles = {
      home: "Child Growth Calculator | GrowthKid",
      calculator: "Child Growth Calculator | GrowthKid",
      results: "Growth Results | GrowthKid",
      charts: "WHO Growth Charts | GrowthKid",
      articles: "Growth Articles | GrowthKid",
      nutrition: "Nutrition Product Guide | GrowthKid",
      about: "About GrowthKid | GrowthKid",
      methodology: "Methodology | GrowthKid",
      privacy: "Privacy | GrowthKid",
      "medical-disclaimer": "Medical Disclaimer | GrowthKid",
      terms: "Terms | GrowthKid",
      "baby-weight-percentile": "Baby Weight Percentile Calculator | GrowthKid",
      "is-baby-weight-normal": "Is My Baby's Weight Normal? | GrowthKid",
      "who-vs-cdc": "WHO vs CDC Growth Charts | GrowthKid",
      "read-growth-chart": "How to Read a Growth Chart | GrowthKid",
      embed: "Child Growth Calculator Widget | GrowthKid",
      bmi: "BMI Calculator for Kids | GrowthKid",
      weight: "Weight-for-age Calculator | GrowthKid",
      height: "Height-for-age Calculator | GrowthKid",
      head: "Head Circumference Calculator | GrowthKid",
      pn: "Pediatric Parenteral Nutrition Calculator | GrowthKid",
      bilirubin: "Neonatal Bilirubin Assessment | GrowthKid"
    };
    return titles[page] || titles.home;
  }

  function chartTitle(indicator) {
    const indicatorText = t(titleFor(indicator));
    const patterns = {
      vi: `Biểu đồ ${indicatorText}`,
      es: `Gráfica de ${indicatorText.toLowerCase()}`,
      hi: `${indicatorText} चार्ट`,
      id: `Grafik ${indicatorText}`,
      fr: `Courbe ${indicatorText.toLowerCase()}`,
      pt: `Gráfico de ${indicatorText.toLowerCase()}`,
      ar: `مخطط ${indicatorText}`,
      zh: `${indicatorText}图表`,
      ja: `${indicatorText}チャート`
    };
    return patterns[activeLanguage] || `${indicatorText} ${t("Chart")}`;
  }

  function sexLabel(sex) {
    return t(sex === "girl" ? "Girl" : "Boy");
  }

  function statusLabel(status) {
    if (status === "Consult a healthcare professional" || status === "consult") return "Consult a healthcare professional";
    if (status === "Monitor" || status === "monitor") return "Monitor";
    if (status === "notAvailable" || status === "Not available") return "Not available";
    if (status === "notEntered" || status === "Not entered") return "Not entered";
    return "Normal";
  }

  function localizedResultMeta(result) {
    return `<span>${t("Measurement on")} ${formatDate(result.measureDate)}</span><span>${sexLabel(result.sex)} - ${ageLabel(result.ageMonths)}</span><span>${t(result.referenceLabel || referenceLabel(result.ageMonths || 24))}</span>`;
  }

  function monthDiff(start, end) {
    const msPerMonth = 365.2425 / 12 * 24 * 60 * 60 * 1000;
    return (end - start) / msPerMonth;
  }

  function ageLabel(months) {
    const rounded = Math.max(0, Math.round(months));
    const years = Math.floor(rounded / 12);
    const rem = rounded % 12;
    const yearWord = years === 1 ? t("year") : t("years");
    const monthWord = rem === 1 ? t("month") : t("months");
    return `${years} ${yearWord}, ${rem} ${monthWord} (${rounded} ${t("months")})`;
  }

  function zToPercentile(z) {
    const p = normalCdf(z) * 100;
    return Math.max(1, Math.min(99, Math.round(p)));
  }

  function normalCdf(x) {
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp(-x * x / 2);
    const probability = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return x > 0 ? 1 - probability : probability;
  }

  function statusFor(z) {
    if (z <= -3 || z >= 3) return "Consult a healthcare professional";
    if (z <= -2 || z >= 2) return "Monitor";
    return "Normal";
  }

  function statusForMetric(key, z, ageMonths) {
    if (key === "bmi" && ageMonths > underFiveMaxMonths) {
      if (z <= -3 || z >= 2) return "Consult a healthcare professional";
      if (z < -2 || z > 1) return "Monitor";
      return "Normal";
    }

    return statusFor(z);
  }

  function signed(value) {
    return `${value > 0 ? "+" : ""}${value.toFixed(2)}`;
  }

  function ordinal(value) {
    if (activeLanguage === "vi") return `thứ ${value}`;
    if (activeLanguage === "id") return `ke-${value}`;
    if (activeLanguage === "es") return `${value}.º`;
    if (activeLanguage === "hi") return `${value}वां`;
    if (activeLanguage === "fr") return `${value}e`;
    if (activeLanguage === "pt") return `${value}º`;
    if (activeLanguage === "ar") return `${value}`;
    if (activeLanguage === "zh") return `第${value}`;
    if (activeLanguage === "ja") return `${value}位`;
    const suffix = value % 10 === 1 && value % 100 !== 11 ? "st" : value % 10 === 2 && value % 100 !== 12 ? "nd" : value % 10 === 3 && value % 100 !== 13 ? "rd" : "th";
    return `${value}${suffix}`;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function formatDate(value) {
    if (activeLanguage === "vi") {
      const date = parseInputDate(value);
      if (Number.isFinite(date.getTime())) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        return `${day}/${month}/${date.getFullYear()}`;
      }
    }
    return new Date(value).toLocaleDateString(languageMeta().locale, { month: "long", day: "numeric", year: "numeric" });
  }

  function readSavedResult() {
    try {
      const raw = localStorage.getItem("growthkid:lastResult");
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function saveResult(result) {
    localStorage.setItem("growthkid:lastResult", JSON.stringify(result));
  }

  function readTrendPoints() {
    try {
      const raw = localStorage.getItem("growthkid:trendPoints");
      const points = raw ? JSON.parse(raw) : [];
      return Array.isArray(points) ? points.sort((a, b) => new Date(a.measureDate) - new Date(b.measureDate)) : [];
    } catch (error) {
      return [];
    }
  }

  function writeTrendPoints(points) {
    localStorage.setItem("growthkid:trendPoints", JSON.stringify(points.slice(-12)));
  }

  function trendPointFromResult(result) {
    const heightMetric = result.metrics.find((metric) => metric.key === "height") || {};
    return {
      id: `${result.measureDate}-${result.sex}-${result.weight}-${result.height}-${result.head || ""}`,
      measureDate: result.measureDate,
      sex: result.sex,
      ageMonths: result.ageMonths,
      ageLabel: ageLabel(result.ageMonths),
      weight: result.weight,
      height: result.height,
      bmi: result.bmi,
      head: result.head,
      heightPercentile: heightMetric.percentile,
      heightZ: heightMetric.z,
      status: statusLabel(heightMetric.status)
    };
  }

  function saveTrendPointFromCurrent() {
    const result = readSavedResult() || sampleResult();
    const nextPoint = trendPointFromResult(result);
    const points = readTrendPoints().filter((point) => point.id !== nextPoint.id);
    points.push(nextPoint);
    writeTrendPoints(points);
    refreshTrendTracker(result);
    setActionFeedback("saveTrendPoint", "Saved");
  }

  function clearTrendPoints() {
    localStorage.removeItem("growthkid:trendPoints");
    refreshTrendTracker(readSavedResult() || sampleResult());
  }

  function refreshTrendTracker(result) {
    const tracker = document.getElementById("trendTracker");
    if (tracker) tracker.innerHTML = trendTrackerInner(result);
    bindTrendButtons();
  }

  function trendSvg(points) {
    const width = 720;
    const height = 260;
    const pad = { left: 44, right: 24, top: 28, bottom: 46 };
    const values = points.map((point) => Number(point.heightPercentile || 50));
    const min = Math.max(1, Math.floor(Math.min(...values, 3) / 10) * 10);
    const max = Math.min(99, Math.ceil(Math.max(...values, 97) / 10) * 10);
    const x = (index) => pad.left + (points.length === 1 ? 0.5 : index / (points.length - 1)) * (width - pad.left - pad.right);
    const y = (value) => height - pad.bottom - ((value - min) / (max - min || 1)) * (height - pad.top - pad.bottom);
    const path = points.map((point, index) => `${index === 0 ? "M" : "L"}${x(index).toFixed(1)},${y(point.heightPercentile || 50).toFixed(1)}`).join(" ");

    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Saved growth trend">
        <rect width="${width}" height="${height}" fill="#ffffff"></rect>
        ${[min, Math.round((min + max) / 2), max].map((value) => `
          <line x1="${pad.left}" y1="${y(value).toFixed(1)}" x2="${width - pad.right}" y2="${y(value).toFixed(1)}" stroke="#e2e8f0"></line>
          <text x="${pad.left - 10}" y="${y(value).toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#64748b" font-size="12">${value}</text>
        `).join("")}
        <path d="${path}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
        ${points.map((point, index) => `
          <circle cx="${x(index).toFixed(1)}" cy="${y(point.heightPercentile || 50).toFixed(1)}" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="3"></circle>
          <text x="${x(index).toFixed(1)}" y="${height - 18}" text-anchor="middle" fill="#64748b" font-size="11">${shortDate(point.measureDate)}</text>
        `).join("")}
        <text x="${pad.left}" y="18" fill="#0f172a" font-size="14" font-weight="800">${t("Height percentile trend")}</text>
      </svg>
    `;
  }

  function trendTable(points) {
    return `
      <div class="trend-table-wrap">
        <table class="trend-table">
          <thead>
            <tr><th>Date</th><th>Age</th><th>Weight</th><th>Height</th><th>Height percentile</th></tr>
          </thead>
          <tbody>
            ${points.map((point) => `
              <tr>
                <td>${formatDate(point.measureDate)}</td>
                <td>${point.ageLabel}</td>
                <td>${point.weight.toFixed(1)} kg</td>
                <td>${point.height.toFixed(1)} cm</td>
                <td>${ordinal(point.heightPercentile || 50)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function shortDate(value) {
    return new Date(value).toLocaleDateString(languageMeta().locale, { month: "short", day: "numeric" });
  }

  function setActionFeedback(id, label) {
    const button = document.getElementById(id);
    if (!button) return;
    const original = button.dataset.originalLabel || button.textContent.trim();
    button.dataset.originalLabel = original;
    button.textContent = t(label);
    window.setTimeout(() => {
      if (button.isConnected) button.textContent = original;
    }, 1600);
  }

  async function createSnapshotCanvas(result) {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1530;
    const ctx = canvas.getContext("2d");
    const primary = highlightMetric(result);
    const resultItems = ["height", "weight", "bmi"].map((key) => metricSnapshotItem(
      result,
      key,
      key === "weight" ? `${result.weight.toFixed(1)} kg` : key === "height" ? `${result.height.toFixed(1)} cm` : result.bmi.toFixed(1)
    ));

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#14b8a6";
    ctx.lineWidth = 2;
    roundRect(ctx, 18, 18, 1044, 1494, 18);
    ctx.stroke();

    ctx.fillStyle = "#eefcf8";
    ctx.beginPath();
    ctx.moveTo(18, 320);
    ctx.bezierCurveTo(240, 382, 430, 384, 620, 346);
    ctx.bezierCurveTo(830, 304, 950, 296, 1062, 250);
    ctx.lineTo(1062, 18);
    ctx.lineTo(18, 18);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#2563eb";
    roundRect(ctx, 54, 48, 54, 54, 14);
    ctx.fill();
    drawGrowthKidCanvasMark(ctx, 64, 57, 34);
    ctx.fillStyle = "#0f172a";
    ctx.font = "900 30px Inter, sans-serif";
    ctx.fillText("GrowthKid", 124, 74);
    ctx.fillStyle = "#64748b";
    ctx.font = "750 13px Inter, sans-serif";
    ctx.fillText(canvasText("WHO-based growth assessment"), 126, 96);

    ctx.fillStyle = "#0f172a";
    ctx.font = "900 60px Inter, sans-serif";
    ctx.fillText(canvasText("Growth Snapshot"), 54, 164);
    ctx.fillStyle = "#334155";
    ctx.font = "750 28px Inter, sans-serif";
    ctx.fillText(canvasText("WHO-based growth check"), 56, 210);

    const roundedAgeMonths = Math.round(result.ageMonths || 0);
    const compactAge = `${roundedAgeMonths} ${canvasText(roundedAgeMonths === 1 ? "month" : "months")}`;
    ctx.fillStyle = "#ecfdf5";
    roundRect(ctx, 54, 236, 286, 40, 20);
    ctx.fill();
    ctx.strokeStyle = "#99f6e4";
    ctx.stroke();
    ctx.fillStyle = "#0f766e";
    ctx.font = "850 15px Inter, sans-serif";
    centerText(ctx, `${canvasText("Measured on")} ${formatDate(result.measureDate)}`, 197, 262);
    ctx.fillStyle = "#ecfdf5";
    roundRect(ctx, 356, 236, 244, 40, 20);
    ctx.fill();
    ctx.strokeStyle = "#99f6e4";
    ctx.stroke();
    ctx.fillStyle = "#0f766e";
    ctx.font = "850 15px Inter, sans-serif";
    centerText(ctx, `${canvasText("Age at measurement")} ${compactAge}`, 478, 262);

    drawSnapshotHeaderDecoration(ctx, 710, 54);

    drawSnapshotPanel(ctx, 44, 304, 992, 204);
    drawMeasurementSummary(ctx, result, 72, 332);

    resultItems.forEach((item, index) => drawResultSnapshotTile(ctx, 44 + index * 338, 532, 328, 184, item, index));

    drawSnapshotPanel(ctx, 44, 742, 992, 366);
    ctx.fillStyle = "#0f172a";
    ctx.font = "900 22px Inter, sans-serif";
    ctx.fillText(canvasText("Growth Curves"), 72, 784);
    drawGrowthChartLegend(ctx, 72, 804);
    drawZScoreLegend(ctx, 620, 778);
    drawChartPreview(ctx, result, "height", 72, 840, 282, 214, "#14b8a6");
    drawChartPreview(ctx, result, "weight", 398, 840, 282, 214, "#2563eb");
    drawChartPreview(ctx, result, "bmi", 724, 840, 282, 214, "#7c3aed");
    ctx.fillStyle = "#64748b";
    ctx.font = "750 15px Inter, sans-serif";
    centerText(ctx, `${canvasText("WHO standards")} - ${canvasText("Your child")} - ${canvasText("Educational use only - not medical advice")}`, 540, 1082);

    drawSnapshotPanel(ctx, 44, 1170, 992, 198);
    drawSnapshotAdvice(ctx, primary, 84, 1208);

    ctx.fillStyle = "#475569";
    ctx.font = "750 16px Inter, sans-serif";
    drawWrappedText(ctx, canvasText("Name-free snapshot for family updates. Educational use only."), 72, 1430, 520, 22, 2);
    ctx.fillStyle = "#64748b";
    ctx.font = "750 15px Inter, sans-serif";
    ctx.fillText(canvasText("Source: World Health Organization (WHO)"), 72, 1480);
    ctx.fillStyle = "#2563eb";
    ctx.font = "900 24px Inter, sans-serif";
    ctx.fillText("GrowthKid", 760, 1438);
    ctx.fillStyle = "#64748b";
    ctx.font = "750 16px Inter, sans-serif";
    ctx.fillText("growthkid.xyz", 760, 1464);
    return canvas;
  }

  function metricSnapshotItem(result, key, value) {
    const metric = result.metrics.find((item) => item.key === key) || {};
    const label = metric.z === null || metric.z === undefined ? statusLabel(metric.status || "notEntered") : statusLabel(metric.status);
    return {
      title: canvasText(titleFor(key)),
      value,
      percentile: metric.percentile === null || metric.percentile === undefined ? "--" : ordinal(metric.percentile),
      percentileNumber: metric.percentile === null || metric.percentile === undefined ? "--" : String(Math.round(metric.percentile)),
      z: metric.z === null || metric.z === undefined ? "--" : signed(metric.z),
      status: label
    };
  }

  function centerText(ctx, text, x, y) {
    ctx.fillText(String(text), x - ctx.measureText(String(text)).width / 2, y);
  }

  function drawSnapshotPanel(ctx, x, y, width, height) {
    ctx.save();
    ctx.shadowColor = "rgba(15, 23, 42, 0.10)";
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 8;
    ctx.fillStyle = "#ffffff";
    roundRect(ctx, x, y, width, height, 18);
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1.5;
    roundRect(ctx, x, y, width, height, 18);
    ctx.stroke();
  }

  function drawSnapshotHeaderDecoration(ctx, x, y) {
    ctx.fillStyle = "rgba(37, 99, 235, 0.08)";
    ctx.beginPath();
    ctx.arc(x + 150, y + 90, 78, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 42, y + 82, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#93c5fd";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x + 260, y + 16);
    ctx.lineTo(x + 260, y + 224);
    ctx.stroke();
    ctx.strokeStyle = "#bfdbfe";
    ctx.lineWidth = 2;
    for (let i = 0; i < 12; i += 1) {
      const yy = y + 34 + i * 14;
      ctx.beginPath();
      ctx.moveTo(x + 260, yy);
      ctx.lineTo(x + 292 - (i % 2) * 12, yy);
      ctx.stroke();
    }
    ctx.strokeStyle = "#14b8a6";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x + 112, y + 220);
    ctx.bezierCurveTo(x + 118, y + 162, x + 138, y + 120, x + 174, y + 92);
    ctx.stroke();
    const leaves = [
      [x + 126, y + 166, -0.7],
      [x + 158, y + 134, 0.6],
      [x + 176, y + 102, -0.3],
      [x + 198, y + 150, 0.8],
      [x + 138, y + 204, 0.4]
    ];
    leaves.forEach(([lx, ly, rotation]) => {
      ctx.save();
      ctx.translate(lx, ly);
      ctx.rotate(rotation);
      ctx.fillStyle = "rgba(20, 184, 166, 0.56)";
      ctx.beginPath();
      ctx.ellipse(0, 0, 13, 28, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  function drawMeasurementSummary(ctx, result, x, y) {
    const columns = [
      { label: canvasText("Age"), value: decodeHtmlEntities(ageLabel(result.ageMonths)), color: "#0f766e" },
      { label: canvasText("Sex"), value: decodeHtmlEntities(sexLabel(result.sex)), color: "#2563eb" },
      { label: canvasText("Weight (kg)"), value: `${result.weight.toFixed(1)} kg`, color: "#0f766e" },
      { label: canvasText("Height (cm)"), value: `${result.height.toFixed(1)} cm`, color: "#2563eb" },
      { label: canvasText("BMI"), value: result.bmi.toFixed(1), color: "#7c3aed" }
    ];
    columns.forEach((item, index) => {
      const col = index % 3;
      const row = Math.floor(index / 3);
      const xx = x + col * 315;
      const yy = y + row * 82;
      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.arc(xx + 18, yy + 18, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "900 16px Inter, sans-serif";
      centerText(ctx, index + 1, xx + 18, yy + 24);
      ctx.fillStyle = "#64748b";
      ctx.font = "750 17px Inter, sans-serif";
      ctx.fillText(item.label, xx + 48, yy + 18);
      ctx.fillStyle = "#0f172a";
      ctx.font = "900 22px Inter, sans-serif";
      ctx.fillText(item.value, xx + 48, yy + 48);
    });
  }

  function drawResultSnapshotTile(ctx, x, y, width, height, item, index) {
    const palettes = [
      { bg: "#f0fdf8", fg: "#0f9f8f", border: "#99f6e4" },
      { bg: "#f7fbff", fg: "#2563eb", border: "#bfdbfe" },
      { bg: "#fdf8ff", fg: "#7c3aed", border: "#e9d5ff" }
    ];
    const palette = palettes[index] || palettes[0];
    const status = statusLabel(item.status);
    const statusColor = status === "Normal" ? "#14b8a6" : status === "Monitor" ? "#d97706" : status === "Consult a healthcare professional" ? "#dc2626" : "#64748b";
    const badgeText = status === "Normal" ? "Within range" : status === "Monitor" ? "Monitor" : status === "Consult a healthcare professional" ? "Consult" : status;
    ctx.save();
    ctx.shadowColor = "rgba(15, 23, 42, 0.06)";
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 6;
    ctx.fillStyle = palette.bg;
    roundRect(ctx, x, y, width, height, 10);
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = palette.border;
    ctx.lineWidth = 1.5;
    roundRect(ctx, x, y, width, height, 10);
    ctx.stroke();

    ctx.fillStyle = palette.fg;
    ctx.font = "900 16px Inter, sans-serif";
    centerText(ctx, item.title, x + width / 2, y + 26);

    ctx.strokeStyle = `${palette.fg}33`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x + 66, y + 78, 36, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = palette.fg;
    drawSnapshotMetricIcon(ctx, x + 66, y + 78, palette.fg, index);

    ctx.fillStyle = palette.fg;
    ctx.font = "900 38px Inter, sans-serif";
    centerText(ctx, item.z, x + width / 2 + 42, y + 84);

    ctx.fillStyle = statusColor;
    roundRect(ctx, x + width / 2 + 4, y + 100, 122, 26, 13);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "850 12px Inter, sans-serif";
    centerText(ctx, `✓ ${badgeText}`, x + width / 2 + 65, y + 118);

    ctx.strokeStyle = "#dbe4f0";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 24, y + 136);
    ctx.lineTo(x + width - 24, y + 136);
    ctx.stroke();

    ctx.fillStyle = "#334155";
    ctx.font = "750 14px Inter, sans-serif";
    centerText(ctx, canvasText("Percentile"), x + width / 2, y + 158);
    ctx.fillStyle = palette.fg;
    ctx.font = "900 24px Inter, sans-serif";
    centerText(ctx, item.percentileNumber, x + width / 2, y + 181);
  }

  function drawSnapshotMetricIcon(ctx, x, y, color, index) {
    ctx.save();
    ctx.fillStyle = color;
    if (index === 1) {
      roundRect(ctx, x - 13, y - 12, 26, 26, 6);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(x, y - 3, 4, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(x, y - 15, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(x - 6, y - 6, 12, 28);
      ctx.fillRect(x - 16, y - 2, 8, 22);
      ctx.fillRect(x + 8, y - 2, 8, 22);
      if (index === 0) {
        ctx.fillRect(x + 24, y - 28, 3, 54);
        for (let i = 0; i < 6; i += 1) {
          ctx.fillRect(x + 31, y - 24 + i * 9, 5, 2);
        }
      }
    }
    ctx.restore();
  }

  function drawChartPreview(ctx, result, indicator, x, y, width, height, color) {
    ctx.fillStyle = `${color}1f`;
    roundRect(ctx, x + 38, y - 32, width - 76, 28, 14);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.font = "900 15px Inter, sans-serif";
    centerText(ctx, canvasText(titleFor(indicator)), x + width / 2, y - 13);
    drawSocialSnapshotChart(ctx, result, indicator, x, y, width, height);
  }

  function drawGrowthChartLegend(ctx, x, y) {
    ctx.fillStyle = "#0f172a";
    ctx.font = "800 12px Inter, sans-serif";
    ctx.beginPath();
    ctx.arc(x + 6, y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText(canvasText("Your measurement"), x + 18, y + 4);
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 142, y);
    ctx.lineTo(x + 170, y);
    ctx.stroke();
    ctx.fillStyle = "#64748b";
    ctx.fillText(canvasText("Median (0)"), x + 178, y + 4);
  }

  function drawZScoreLegend(ctx, x, y) {
    const items = [
      ["+2", "#ef4444"],
      ["+1", "#f97316"],
      ["0", "#64748b"],
      ["-1", "#14b8a6"],
      ["-2", "#2563eb"]
    ];
    items.forEach((item, index) => {
      const xx = x + index * 72;
      ctx.strokeStyle = item[1];
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xx, y);
      ctx.lineTo(xx + 24, y);
      ctx.stroke();
      ctx.fillStyle = "#334155";
      ctx.font = "800 11px Inter, sans-serif";
      ctx.fillText(item[0], xx + 30, y + 4);
    });
  }

  function drawSnapshotAdvice(ctx, metric, x, y) {
    const status = statusLabel(metric.status);
    ctx.fillStyle = "#14b8a6";
    ctx.font = "900 26px Inter, sans-serif";
    ctx.fillText(canvasText("Interpretation"), x + 180, y + 8);
    ctx.fillStyle = "#0f766e";
    ctx.beginPath();
    ctx.arc(x + 70, y + 58, 52, 0, Math.PI * 2);
    ctx.strokeStyle = "#99f6e4";
    ctx.lineWidth = 14;
    ctx.stroke();
    ctx.fillStyle = "#14b8a6";
    ctx.font = "900 54px Inter, sans-serif";
    centerText(ctx, "✓", x + 70, y + 78);

    ctx.fillStyle = "#334155";
    ctx.font = "750 17px Inter, sans-serif";
    const interpretationText = status === "Normal"
      ? `${canvasText("Normal")}: ${canvasText("Your child's growth is within the normal range.")}`
      : status === "Monitor"
        ? `${canvasText("Monitor")}: ${canvasText("Review the trend and measure again consistently.")}`
        : `${canvasText("Consult a healthcare professional")}.`;
    drawWrappedText(ctx, interpretationText, x + 180, y + 44, 295, 26, 4);

    ctx.strokeStyle = "#dbe4f0";
    ctx.beginPath();
    ctx.moveTo(x + 512, y);
    ctx.lineTo(x + 512, y + 132);
    ctx.stroke();
    ctx.fillStyle = "#14b8a6";
    ctx.font = "900 26px Inter, sans-serif";
    ctx.fillText(canvasText("Tips"), x + 560, y + 8);
    const tips = [
      canvasText("Track trends over time."),
      canvasText("Use accurate weight and height measurements."),
      canvasText("Talk to a pediatrician if results change quickly.")
    ];
    ctx.fillStyle = "#334155";
    ctx.font = "750 17px Inter, sans-serif";
    tips.forEach((tip, index) => {
      const yy = y + 44 + index * 35;
      ctx.fillText("✓", x + 560, yy);
      drawWrappedText(ctx, tip, x + 588, yy, 330, 22, 1);
    });
  }

  function compactStatusLabel(status) {
    const label = statusLabel(status);
    return label === "Consult a healthcare professional" ? "Consult" : label;
  }

  function drawMetricSnapshotCard(ctx, x, y, width, height, item) {
    const status = statusLabel(item.status);
    const color = status === "Normal" ? "#16a34a" : status === "Monitor" ? "#d97706" : status === "Consult a healthcare professional" ? "#dc2626" : "#64748b";

    ctx.fillStyle = "#ffffff";
    roundRect(ctx, x, y, width, height, 24);
    ctx.fill();
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x + 32, y + 32, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#64748b";
    ctx.font = "800 17px Inter, sans-serif";
    drawWrappedText(ctx, item.title, x + 52, y + 38, width - 82, 20, 1);
    ctx.fillStyle = "#0f172a";
    ctx.font = "850 31px Inter, sans-serif";
    ctx.fillText(item.value, x + 28, y + 80);
    ctx.fillStyle = "#64748b";
    ctx.font = "700 17px Inter, sans-serif";
    ctx.fillText(`${item.percentile} - z ${item.z}`, x + 28, y + 106);
  }

  function drawSnapshotChart(ctx, result, indicator, left, top, width, height) {
    const sex = result.sex || "boy";
    const metric = result.metrics.find((item) => item.key === indicator);
    if (metric && metric.status === "notAvailable") return;
    const domain = chartDomain(result, indicator);
    const points = [];
    for (let m = domain.start; m <= domain.end; m += domain.end > underFiveMaxMonths ? 12 : 6) {
      const value = chartReferenceValue(sex, indicator, m, 0, result.ageMonths || 24);
      if (Number.isFinite(value)) points.push([m, value]);
    }
    const childValue = indicator === "bmi" ? result.bmi : result[indicator];
    const values = points.map((point) => point[1]).concat(childValue || []);
    const min = Math.min(...values) * 0.92;
    const max = Math.max(...values) * 1.08;
    const x = (month) => left + ((month - domain.start) / (domain.end - domain.start)) * width;
    const y = (value) => top + height - ((value - min) / (max - min || 1)) * height;

    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i += 1) {
      const yy = top + (height / 2) * i;
      ctx.beginPath();
      ctx.moveTo(left, yy);
      ctx.lineTo(left + width, yy);
      ctx.stroke();
    }

    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    points.forEach((point, index) => {
      const px = x(point[0]);
      const py = y(point[1]);
      if (index === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.stroke();

    const childMonth = clamp(result.ageMonths || 24, domain.start, domain.end);
    const childX = x(childMonth);
    const childY = y(childValue || chartReferenceValue(sex, indicator, childMonth, 0, result.ageMonths || 24));
    ctx.fillStyle = "#0f172a";
    ctx.beginPath();
    ctx.arc(childX, childY, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  function drawSocialSnapshotChart(ctx, result, indicator, left, top, width, height) {
    const sex = result.sex || "boy";
    const metric = result.metrics.find((item) => item.key === indicator);
    if (metric && metric.status === "notAvailable") return;
    const domain = chartDomain(result, indicator);
    const bands = [
      { z: 2, color: "#ef4444" },
      { z: 1, color: "#f97316" },
      { z: 0, color: "#16a34a" },
      { z: -1, color: "#2563eb" },
      { z: -2, color: "#ef4444" }
    ];
    const plotLeft = left + 28;
    const plotTop = top + 16;
    const plotWidth = width - 34;
    const plotHeight = height - 54;
    const x = (month) => plotLeft + ((month - domain.start) / (domain.end - domain.start)) * plotWidth;
    const scale = chartScale(sex, indicator, domain, result.ageMonths || 24);
    const yForValue = (value) => chartValueToY(value, scale, plotTop, plotTop + plotHeight);

    ctx.fillStyle = "#334155";
    ctx.font = "800 10px Inter, sans-serif";
    ctx.fillText(indicator === "weight" ? "kg" : indicator === "height" ? "cm" : "BMI", left, top + 2);

    ctx.strokeStyle = "#dbe4f0";
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    for (let i = 0; i <= 4; i += 1) {
      const value = scale.min + ((scale.max - scale.min) * (4 - i)) / 4;
      const yy = yForValue(value);
      ctx.fillStyle = "#475569";
      ctx.font = "800 10px Inter, sans-serif";
      ctx.fillText(String(Math.round(value)), left + 4, yy + 3);
      ctx.strokeStyle = "#e2e8f0";
      ctx.beginPath();
      ctx.moveTo(plotLeft, yy);
      ctx.lineTo(plotLeft + plotWidth, yy);
      ctx.stroke();
    }
    for (let i = 0; i <= 5; i += 1) {
      const xx = plotLeft + (plotWidth / 5) * i;
      ctx.strokeStyle = "#eef2f7";
      ctx.beginPath();
      ctx.moveTo(xx, plotTop);
      ctx.lineTo(xx, plotTop + plotHeight);
      ctx.stroke();
    }

    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(plotLeft, plotTop);
    ctx.lineTo(plotLeft, plotTop + plotHeight);
    ctx.lineTo(plotLeft + plotWidth, plotTop + plotHeight);
    ctx.stroke();

    bands.forEach((band) => {
      ctx.strokeStyle = band.color;
      ctx.lineWidth = band.z === 0 ? 2.2 : 1.4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      let started = false;
      const steps = 48;
      for (let step = 0; step <= steps; step += 1) {
        const m = domain.start + ((domain.end - domain.start) * step) / steps;
        const value = chartReferenceValue(sex, indicator, m, band.z, result.ageMonths || 24);
        if (!Number.isFinite(value)) continue;
        const px = x(m);
        const py = yForValue(value);
        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
    });

    const childMonth = clamp(result.ageMonths || 24, domain.start, domain.end);
    const childX = x(childMonth);
    const childValue = indicator === "bmi" ? result.bmi : result[indicator];
    const childReferenceValue = metric && Number.isFinite(metric.z)
      ? chartReferenceValue(sex, indicator, childMonth, metric.z, result.ageMonths || 24)
      : childValue;
    const childY = yForValue(childReferenceValue || chartReferenceValue(sex, indicator, childMonth, 0, result.ageMonths || 24));
    ctx.strokeStyle = "#94a3b8";
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(childX, plotTop);
    ctx.lineTo(childX, plotTop + plotHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(plotLeft, childY);
    ctx.lineTo(childX, childY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#0f172a";
    ctx.beginPath();
    ctx.arc(childX, childY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#334155";
    ctx.font = "800 10px Inter, sans-serif";
    const ageTicks = chartTicks(domain);
    ageTicks.forEach((month) => {
      const xx = x(clamp(month, domain.start, domain.end));
      centerText(ctx, String(month), xx, plotTop + plotHeight + 16);
    });
    centerText(ctx, t("Age (months)"), plotLeft + plotWidth / 2, plotTop + plotHeight + 34);
  }

  function drawGrowthKidCanvasMark(ctx, x, y, size) {
    const scale = size / 64;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(34, 16, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(18, 28);
    ctx.bezierCurveTo(18, 24, 21.2, 20.8, 25.2, 20.8);
    ctx.lineTo(42.8, 20.8);
    ctx.bezierCurveTo(46.8, 20.8, 50, 24, 50, 28);
    ctx.lineTo(50, 29.2);
    ctx.bezierCurveTo(50, 31.6, 48, 33.6, 45.6, 33.6);
    ctx.lineTo(38, 33.6);
    ctx.lineTo(38, 38.8);
    ctx.lineTo(46.8, 47.6);
    ctx.bezierCurveTo(48.6, 49.4, 48.6, 52.2, 46.8, 54);
    ctx.bezierCurveTo(45, 55.8, 42.2, 55.8, 40.4, 54);
    ctx.lineTo(32, 45.6);
    ctx.lineTo(23.6, 54);
    ctx.bezierCurveTo(21.8, 55.8, 19, 55.8, 17.2, 54);
    ctx.bezierCurveTo(15.4, 52.2, 15.4, 49.4, 17.2, 47.6);
    ctx.lineTo(26, 38.8);
    ctx.lineTo(26, 33.6);
    ctx.lineTo(22.4, 33.6);
    ctx.bezierCurveTo(20, 33.6, 18, 31.6, 18, 29.2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#bfdbfe";
    ctx.beginPath();
    ctx.moveTo(55, 12);
    ctx.lineTo(58, 19);
    ctx.lineTo(65, 22);
    ctx.lineTo(58, 25);
    ctx.lineTo(55, 32);
    ctx.lineTo(52, 25);
    ctx.lineTo(45, 22);
    ctx.lineTo(52, 19);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = String(text).split(/\s+/);
    let line = "";
    let lines = 0;

    words.forEach((word, index) => {
      const testLine = line ? `${line} ${word}` : word;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        if (lines < maxLines) ctx.fillText(line, x, y + lines * lineHeight);
        line = word;
        lines += 1;
      } else {
        line = testLine;
      }

      if (index === words.length - 1 && lines < maxLines) {
        ctx.fillText(line, x, y + lines * lineHeight);
        lines += 1;
      }
    });
  }

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  function downloadCanvas(canvas, filename) {
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    }, "image/png");
  }

  async function downloadSnapshot() {
    const result = readSavedResult() || sampleResult();
    const canvas = await createSnapshotCanvas(result);
    downloadCanvas(canvas, `growthkid-snapshot-${result.measureDate || "result"}.png`);
  }

  async function shareSnapshot() {
    const result = readSavedResult() || sampleResult();
    const text = resultSummaryText(result);
    try {
      const canvas = await createSnapshotCanvas(result);
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      const file = blob ? new File([blob], `growthkid-snapshot-${result.measureDate || "result"}.png`, { type: "image/png" }) : null;
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ title: "GrowthKid growth snapshot", text, files: [file] });
        return;
      }
      if (navigator.share) {
        await navigator.share({ title: "GrowthKid growth snapshot", text, url: window.location.href });
        return;
      }
      await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
      setActionFeedback("shareSnapshot", "Link copied");
    } catch (error) {
      downloadSnapshot();
    }
  }

  function resultSummaryText(result) {
    const metric = highlightMetric(result);
    return `GrowthKid: ${sexLabel(result.sex)}, ${ageLabel(result.ageMonths)}, ${t(titleFor(metric.key))} ${metric.percentile === null ? "--" : ordinal(metric.percentile)}, ${t(statusLabel(metric.status))}.`;
  }

  function downloadReport() {
    const result = readSavedResult() || sampleResult();
    const metricLines = result.metrics.map((metric) => {
      const z = metric.z === null ? "--" : signed(metric.z);
      const percentile = metric.percentile === null ? "--" : ordinal(metric.percentile);
      return `${t(titleFor(metric.key))}: ${t("Z-score")} ${z}, ${t("Percentile")} ${percentile}, ${t("Status")} ${t(statusLabel(metric.status))}`;
    });
    const lines = [
      t("GrowthKid Growth Report"),
      `${t("Measurement on")}: ${formatDate(result.measureDate)}`,
      `${t("Sex")}: ${sexLabel(result.sex)}`,
      `${t("Age")}: ${ageLabel(result.ageMonths)}`,
      "",
      t("Measurements"),
      `${t("Weight (kg)")}: ${result.weight.toFixed(1)}`,
      `${t("Height (cm)")}: ${result.height.toFixed(1)}`,
      `${t("Head Circumference (cm)")}: ${result.head ? result.head.toFixed(1) : t("Not entered")}`,
      `BMI: ${result.bmi.toFixed(1)}`,
      "",
      t("Growth Results"),
      ...metricLines,
      "",
      t("Educational use only. This report is not medical advice and does not replace a healthcare professional.")
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `growthkid-report-${result.measureDate || "result"}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function renderResults(result) {
    const section = document.getElementById("results");
    const cards = document.getElementById("resultCards");
    const referenceBox = document.getElementById("referenceComparison");
    const meta = document.getElementById("resultMeta");
    const chart = document.getElementById("growthChart");
    const interpretationBox = document.getElementById("interpretation");
    const title = document.getElementById("chartTitle");
    const sharePreview = document.getElementById("shareSnapshotPreview");

    if (!section || !cards || !chart) return;

    section.style.display = "";
    resultsVisible = true;
    lastChartIndicator = "height";
    cards.innerHTML = resultCards(result);
    if (referenceBox) referenceBox.innerHTML = referenceComparison(result);
    meta.innerHTML = localizedResultMeta(result);
    chart.innerHTML = chartSvg(result, "height", false);
    if (interpretationBox) interpretationBox.innerHTML = interpretation(result, "height");
    if (title) title.textContent = chartTitle("height");
    if (sharePreview) sharePreview.innerHTML = snapshotPreview(result);
    refreshTrendTracker(result);
    document.querySelectorAll(".chart-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.chart === "height"));
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function bindTrendButtons() {
    const clearButton = document.getElementById("clearTrend");
    if (clearButton) {
      clearButton.addEventListener("click", clearTrendPoints);
    }
  }

  function attachEvents() {
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {
      if (navigationEventsController) navigationEventsController.abort();
      navigationEventsController = new AbortController();
      const { signal } = navigationEventsController;
      const closeMenu = () => {
        mobileMenu.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      };

      menuButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
      }, { signal });

      document.addEventListener("click", (event) => {
        if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
      }, { signal });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeMenu();
          menuButton.focus();
        }
      }, { signal });

      window.addEventListener("resize", () => {
        if (window.innerWidth >= 1600) closeMenu();
      }, { signal });
    }

    document.querySelectorAll(".language-select").forEach((select) => {
      select.addEventListener("change", (event) => {
        changeLanguage(event.target.value);
      });
    });

    const form = document.getElementById("growthForm");
    if (form) {
      bindDateInputs(form);
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const errorBox = document.getElementById("formError");
        try {
          const result = calculateGrowth(form);
          saveResult(result);
          if (errorBox) errorBox.classList.remove("is-visible");
          renderResults(result);
        } catch (error) {
          if (errorBox) {
            errorBox.textContent = t(error.message);
            errorBox.classList.add("is-visible");
          }
        }
      });
    }

    const pnForm = document.getElementById("pnForm");
    if (pnForm) {
      const renderPn = () => {
        const errorBox = document.getElementById("pnFormError");
        const results = document.getElementById("pnResults");
        try {
          const result = calculatePn(Object.fromEntries(new FormData(pnForm).entries()));
          if (errorBox) errorBox.classList.remove("is-visible");
          if (results) results.innerHTML = renderPnResults(result);
        } catch (error) {
          if (errorBox) {
            errorBox.textContent = error.message;
            errorBox.classList.add("is-visible");
          }
          if (results) results.innerHTML = "";
        }
      };

      pnForm.addEventListener("submit", (event) => {
        event.preventDefault();
        renderPn();
      });
      renderPn();
    }

    const bilirubinForm = document.getElementById("bilirubinForm");
    if (bilirubinForm) {
      const renderBilirubin = () => {
        const errorBox = document.getElementById("bilirubinFormError");
        const results = document.getElementById("bilirubinResults");
        try {
          const result = calculateBilirubin(Object.fromEntries(new FormData(bilirubinForm).entries()));
          if (errorBox) errorBox.classList.remove("is-visible");
          if (results) results.innerHTML = renderBilirubinResults(result);
        } catch (error) {
          if (errorBox) {
            errorBox.textContent = error.message;
            errorBox.classList.add("is-visible");
          }
          if (results) results.innerHTML = "";
        }
      };

      bilirubinForm.addEventListener("submit", (event) => {
        event.preventDefault();
        renderBilirubin();
      });
      const bilirubinResults = document.getElementById("bilirubinResults");
      if (bilirubinResults) {
        bilirubinResults.addEventListener("click", (event) => {
          const button = event.target.closest("[data-bilirubin-chart]");
          if (!button || !bilirubinResults.contains(button)) return;
          activateBilirubinChart(bilirubinResults, button.dataset.bilirubinChart);
        });
      }
      renderBilirubin();
    }

    document.querySelectorAll(".chart-tab").forEach((button) => {
      button.addEventListener("click", () => {
        const indicator = button.dataset.chart;
        lastChartIndicator = indicator;
        const result = readSavedResult() || sampleResult();
        const chart = document.getElementById("growthChart");
        const title = document.getElementById("chartTitle");
        const interpretationBox = document.getElementById("interpretation");
        document.querySelectorAll(".chart-tab").forEach((tab) => tab.classList.toggle("is-active", tab === button));
        if (chart) chart.innerHTML = chartSvg(result, indicator, false);
        if (title) title.textContent = chartTitle(indicator);
        if (interpretationBox) interpretationBox.innerHTML = interpretation(result, indicator);
      });
    });

    const downloadButton = document.getElementById("downloadReport");
    if (downloadButton) {
      downloadButton.addEventListener("click", downloadReport);
    }

    const downloadSnapshotButton = document.getElementById("downloadSnapshot");
    if (downloadSnapshotButton) {
      downloadSnapshotButton.addEventListener("click", downloadSnapshot);
    }

    const shareSnapshotButton = document.getElementById("shareSnapshot");
    if (shareSnapshotButton) {
      shareSnapshotButton.addEventListener("click", shareSnapshot);
    }

    const saveTrendButton = document.getElementById("saveTrendPoint");
    if (saveTrendButton) {
      saveTrendButton.addEventListener("click", saveTrendPointFromCurrent);
    }

    bindTrendButtons();

    const copyQuestionsButton = document.getElementById("copyQuestions");
    if (copyQuestionsButton) {
      copyQuestionsButton.addEventListener("click", async () => {
        const questions = Array.from(document.querySelectorAll(".question-list span")).map((item) => `- ${item.textContent.trim()}`).join("\n");
        await navigator.clipboard.writeText(questions);
        setActionFeedback("copyQuestions", "Copied");
      });
    }

    const copyEmbedButton = document.getElementById("copyEmbedCode");
    if (copyEmbedButton) {
      copyEmbedButton.addEventListener("click", async () => {
        await navigator.clipboard.writeText(copyEmbedButton.dataset.embedCode || "");
        setActionFeedback("copyEmbedCode", "Copied");
      });
    }
  }

  function bindDateInputs(scope) {
    scope.querySelectorAll("[data-date-text]").forEach((input) => {
      const picker = scope.querySelector(`[data-date-picker][data-target="${input.id}"]`);
      const validateInput = () => {
        const message = dateInputValidationMessage(input.value);
        input.setCustomValidity(message ? localizedDateValidationMessage(message) : "");
        input.classList.toggle("is-invalid", Boolean(message));
      };
      const syncPicker = () => {
        if (!picker) return;
        const parsed = parseInputDate(input.value);
        picker.value = Number.isFinite(parsed.getTime()) ? toIsoDate(parsed) : "";
      };

      input.addEventListener("input", () => {
        const masked = maskDateInputValue(input.value);
        input.value = masked.length === 2 || masked.length === 5 ? `${masked}/` : masked;
        validateInput();
        syncPicker();
      });

      input.addEventListener("blur", () => {
        input.value = formatDateInputValue(input.value);
        validateInput();
        syncPicker();
      });

      validateInput();
      syncPicker();
    });

    scope.querySelectorAll("[data-date-picker]").forEach((picker) => {
      picker.addEventListener("change", () => {
        const target = scope.querySelector(`#${picker.dataset.target}`);
        if (!target || !picker.value) return;
        target.value = formatDateInputValue(picker.value);
        target.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });
  }

  function render() {
    if (!app) return;

    if (page === "home") app.innerHTML = homePage();
    else if (["calculator", "bmi", "weight", "height", "head"].includes(page)) app.innerHTML = calculatorLanding(page);
    else if (page === "results") app.innerHTML = resultsPage();
    else if (page === "charts") app.innerHTML = chartsPage();
    else if (page === "articles") app.innerHTML = articlesPage();
    else if (page === "nutrition") app.innerHTML = nutritionPage();
    else if (page === "about") app.innerHTML = aboutPage();
    else if (page === "pn") app.innerHTML = pnCalculatorPage();
    else if (page === "bilirubin") app.innerHTML = bilirubinPlaceholderPage();
    else if (page === "methodology") app.innerHTML = methodologyPage();
    else if (page === "privacy") app.innerHTML = privacyPage();
    else if (page === "medical-disclaimer") app.innerHTML = medicalDisclaimerPage();
    else if (page === "terms") app.innerHTML = termsPage();
    else if (["baby-weight-percentile", "is-baby-weight-normal", "who-vs-cdc", "read-growth-chart"].includes(page)) app.innerHTML = seoQuestionPage(page);
    else if (page === "embed") app.innerHTML = embedPage();
    else app.innerHTML = homePage();

    restoreFormDraft();
    attachEvents();
    applyTranslations();
    mountVisualEffects();
    mountAmbientPointerEffects();
  }

  render();
})();
