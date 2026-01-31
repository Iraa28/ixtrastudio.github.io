const questions = [
		
	//281
	{
		question: "EL REGLAMENTO (UE) 2016/679 SE APLICA:",
		answers: [
			{text: "a) Al tratamiento totalmente automatizado de datos personales.", correct: false},
			{text: "b) Al tratamiento parcialmente automatizado de datos personales.", correct: false},
			{text: "c) Al tratamiento no automatizado de datos personales contenidos en un fichero.", correct: false},
			{text: "d) Todas las respuestas anteriores son correctas.", correct: true},
		]
	},
	
	//282
	{
		question: "EL REGLAMENTO (UE) 2016/679 NO SE APLICA:",
		answers: [
			{text: "a) Al tratamiento de datos personales efectuado por una persona física en el ejercicio de actividades exclusivamente personales o domésticas.", correct: true},
			{text: "b) Al tratamiento de datos personales efectuado en el ejercicio de una actividad comprendida en el ámbito de aplicación del Derecho de la Unión.", correct: false},
			{text: "c) Al tratamiento no automatizado de datos personales destinados a ser incluidos en un fichero.", correct: false},
			{text: "d) Al tratamiento de datos personales efectuado por una persona física en el ejercicio de actividades profesionales.", correct: false},
		]
	},

	//283
	{
		question: "SEGÚN EL REGLAMENTO (UE) 2016/679 LOS DATOS PERSONALES SERÁN:",
		answers: [
			{text: "a) Adecuados, pertinentes e ilimitados en relación con los fines para los que son tratados.", correct: false},
			{text: "b) Tratados de manera lícita, leal y transparente en relación con el interesado.", correct: true},
			{text: "c) Exactos y, si fuera necesario por exigirlo una resolución judicial, actualizados.", correct: false},
			{text: "d) Todas las respuestas anteriores son incorrectas.", correct: false},
		]
	},

	//284
	{
		question: "SEGÚN EL REGLAMENTO (UE) 2016/679 EL TRATAMIENTO SERÁ LÍCITO SI:",
		answers: [
			{text: "a) El interesado dio su consentimiento para el tratamiento de sus datos personales para uno o varios fines específicos.", correct: false},
			{text: "b) El tratamiento es necesario para el cumplimiento de una obligación legal aplicable al responsable del tratamiento.", correct: false},
			{text: "c) El interesado dio su consentimiento para el tratamiento de sus datos personales para uno o varios fines inespecíficos.", correct: false},
			{text: "d) Las respuestas a) y b) son correctas.", correct: true},
		]
	},

	//285
	{
		question: "DE ACUERDO CON EL REGLAMENTO (UE) 2016/679:",
		answers: [
			{text: "a) El interesado tendrá derecho a retirar su consentimiento en cualquier momento a partir del día siguiente al que lo prestó.", correct: false},
			{text: "b) La retirada del consentimiento no afectará a la licitud del tratamiento basada en el consentimiento previo a su retirada, a no ser que dicho consentimiento versará sobre datos relativos a la salud o ideología.", correct: false},
			{text: "c) Cuando el tratamiento se base en el consentimiento del interesado, el responsable deberá ser capaz de demostrar que aquel consintió el tratamiento de sus datos personales.", correct: true},
			{text: "d) Será tan fácil retirar el consentimiento como darlo, salvo si el responsable del fichero está domiciliado en un Estado Miembro distinto al del interesado.", correct: false},
		]
	},

	//286
	{
		question: "DE ACUERDO CON EL REGLAMENTO (UE) 2016/679, CUANDO SE OBTENGAN DE UN INTERESADO DATOS PERSONALES RELATIVOS A ÉL, EL RESPONSABLE DEL TRATAMIENTO, EN EL MOMENTO EN QUE ESTOS SE OBTENGAN, LE FACILITARÁ LA INFORMACIÓN INDICADA A CONTINUACIÓN:",
		answers: [
			{text: "a) La identidad y los datos de contacto del responsable y, en su caso, de su representante.", correct: false},
			{text: "b) Los fines del tratamiento a que se destinan los datos personales y la base jurídica del tratamiento.", correct: false},
			{text: "c) Las respuestas a) y b) son correctas.", correct: true},
			{text: "d) Todas las respuestas anteriores son incorrectas.", correct: false},
		]
	},

	//287
	{
		question: "SEGÚN EL REGLAMENTO (UE) 2016/679, LA EXISTENCIA DEL DERECHO A SOLICITAR AL RESPONSABLE DEL TRATAMIENTO EL ACCESO A LOS DATOS PERSONALES RELATIVOS AL INTERESADO, Y SU RECTIFICACIÓN O SUPRESIÓN, O LA LIMITACIÓN DE SU TRATAMIENTO, O A OPONERSE AL TRATAMIENTO, ASÍ COMO EL DERECHO A LA PORTABILIDAD DE LOS DATOS, ES ALGO QUE DEBE COMUNICARSE AL INTERESADO…",
		answers: [
			{text: "a) …por parte del responsable del tratamiento en el momento en que se obtengan los datos personales.", correct: true},
			{text: "b) …por parte del encargado del tratamiento en los 5 días siguientes a la obtención de los datos.", correct: false},
			{text: "c) …por parte de la Autoridad de Control competente en materia de protección de datos cuando se notifique una sanción al encargado del tratamiento por infracciones cometidas en el ejercicio de sus funciones comerciales.", correct: false},
			{text: "d) …por parte del responsable del tratamiento, sólo si así se lo exija el interesado.", correct: false},
		]
	},

	//288
	{
		question: "SEGÚN EL REGLAMENTO (UE) 2016/679, CUANDO LOS DATOS PERSONALES NO SE HAYAN OBTENIDOS DEL INTERESADO, EL RESPONSABLE DEL TRATAMIENTO LE FACILITARÁ LA SIGUIENTE INFORMACIÓN:",
		answers: [
			{text: "a) La identidad y los datos de contacto del responsable, pero no los de su representante si lo hubiera.", correct: false},
			{text: "b) Los datos de contacto del delegado de protección de datos, en su caso.", correct: true},
			{text: "c) Las categorías de datos personales de que se trate, si es que estos son relativos a salud o datos biométricos exclusivamente.", correct: false},
			{text: "d) Los fines del tratamiento a que se destinan los datos personales, así como la base jurídica del tratamiento siempre que esta sea el ejercicio de un poder público.", correct: false},
		]
	},

	//289
	{
		question: "DE ACUERDO CON EL REGLAMENTO (UE) 2016/679, EN EL MARCO DEL DERECHO DE ACCESO DEL INTERESADO…",
		answers: [
			{text: "a) …la información se facilitará al interesado en un formato electrónico de uso común, en todo caso.", correct: false},
			{text: "b) …la información se facilitará al interesado en un formato electrónico de uso común, a menos que éste solicite que se facilite de otro modo.", correct: false},
			{text: "c) …cuando éste presente la solicitud por medios electrónicos, y a menos que dicho interesado solicite que se facilite de otro modo, la información se facilitará en un formato electrónico de uso común.", correct: true},
			{text: "d) Todas las respuestas anteriores son incorrectas.", correct: false},
		]
	},

	//290
	{
		question: "DE ACUERDO CON EL REGLAMENTO (UE) 2016/679, EL INTERESADO TENDRÁ DERECHO A OBTENER DEL RESPONSABLE DEL TRATAMIENTO CONFIRMACIÓN DE SI SE ESTÁN TRATANDO O NO DATOS PERSONALES QUE LE CONCIERNEN Y, EN TAL CASO, DERECHO DE ACCESO A LOS DATOS PERSONALES Y A LA SIGUIENTE INFORMACIÓN:",
		answers: [
			{text: "a) Los fines del tratamiento.", correct: false},
			{text: "b) Las categorías de datos personales de que se trate.", correct: false},
			{text: "c) Los destinatarios o las categorías de destinatarios a los que se comunicaron o serán comunicados los datos personales, en particular destinatarios en terceros u organizaciones internacionales.", correct: false},
			{text: "d) Todas las respuestas anteriores son correctas.", correct: true},
		]
	},

	//291
	{
		question: "DE CONFORMIDAD CON EL REGLAMENTO (UE) 2016/679, EN EL MARCO DEL DERECHO DE RECTIFICACIÓN,",
		answers: [
			{text: "a) El interesado tiene derecho a solicitar que se rectifiquen y se completen sus datos.", correct: true},
			{text: "b) El interesado tiene derecho a que se supriman sus datos y se rectifiquen", correct: false},
			{text: "c) El interesado tiene derecho a que se rectifiquen sus datos, exclusivamente.", correct: false},
			{text: "d) El Reglamento (UE) 2016/679 no contiene tal derecho.", correct: false},
		]
	},

	//292
	{
		question: "DE CONFORMIDAD CON EL REGLAMENTO (UE) 2016/679, EL INTERESADO TENDRÁ DERECHO A OBTENER SIN DILACIÓN INDEBIDA DEL RESPONSABLE DEL TRATAMIENTO LA SUPRESIÓN DE LOS DATOS PERSONALES QUE LE CONCIERNAN, EL CUAL NO ESTARÁ OBLIGADO A SUPRIMIR SIN DILACIÓN INDEBIDA LOS DATOS PERSONALES CUANDO CONCURRA ALGUNA DE LAS CIRCUNSTANCIAS SIGUIENTES:",
		answers: [
			{text: "a) Los datos personales ya no sean necesarios en relación con los fines para los que fueron recogidos o tratados de otro modo.", correct: false},
			{text: "b) El interesado retire el consentimiento en que se basa el tratamiento, pero éste se base en otro fundamento jurídico.", correct: true},
			{text: "c) Los datos personales hayan sido tratados ilícitamente.", correct: false},
			{text: "d) Los datos personales deban suprimirse para el cumplimiento de una obligación legal establecida en el Derecho de la Unión o de los Estados miembros que se aplique al responsable del tratamiento.", correct: false},
		]
	},

	//293
	{
		question: "SEGÚN EL REGLAMENTO (UE) 2016/679, CUANDO EL TRATAMIENTO DE DATOS PERSONALES SE HAYA LIMITADO EN VIRTUD DE UNA IMPUGNACIÓN DE LA VERACIDAD DE LOS MISMOS, DICHOS DATOS SOLO PODRÁN SER OBJETO DE TRATAMIENTO CON EL CONSENTIMIENTO DEL INTERESADO, SALVO QUE EL TRATAMIENTO CONSISTA EN…",
		answers: [
			{text: "a) …su cesión.", correct: false},
			{text: "b) …su conservación.", correct: true},
			{text: "c) …su portabilidad.", correct: false},
			{text: "d) …su publicación.", correct: false},
		]
	},

	//294
	{
		question: "SEGÚN EL REGLAMENTO (UE) 2016/679, EL INTERESADO TENDRÁ DERECHO A RECIBIR LOS DATOS PERSONALES QUE LE INCUMBAN, QUE HAYA FACILITADO A UN RESPONSABLE DEL TRATAMIENTO, EN UN FORMATO ESTRUCTURADO, DE USO COMÚN Y LECTURA MECÁNICA, Y A TRANSMITIRLOS A OTRO RESPONSABLE DEL TRATAMIENTO SIN QUE LO IMPIDA EL RESPONSABLE AL QUE SE LOS HUBIERA FACILITADO, CUANDO:",
		answers: [
			{text: "a) El tratamiento esté basado en el consentimiento o en un contrato y el tratamiento se efectúe por medios automatizados.", correct: false},
			{text: "b) El tratamiento esté basado únicamente en el consentimiento y el tratamiento se efectúe por medios automatizados.", correct: false},
			{text: "c) El tratamiento esté basado en el consentimiento o en un contrato o en una obligación legal y el tratamiento se efectúe por medios automatizados.", correct: true},
			{text: "d) El tratamiento esté basado en el consentimiento o en un contrato y el tratamiento se efectúe por medios automatizados y no automatizados.", correct: false},
		]
	},

	//295
	{
		question: "DE ACUERDO CON EL REGLAMENTO (UE) 2016/679, CUANDO EL TRATAMIENTO DE DATOS PERSONALES TENGA POR OBJETO LA MERCADOTECNIA DIRECTA, EL INTERESADO TENDRÁ DERECHO A OPONERSE…",
		answers: [
			{text: "a) …en todo momento al tratamiento de los datos personales que le conciernan, excluida la elaboración de perfiles en la medida en que esté relacionada con la citada mercadotecnia.", correct: false},
			{text: "b) …en los dos primeros años desde la cesión de los datos al tratamiento de los datos personales que le conciernan, incluida la elaboración de perfiles en la medida en que esté relacionada con la citada mercadotecnia.", correct: false},
			{text: "c) …en todo momento al tratamiento de los datos personales que le conciernan, incluida la elaboración de perfiles en la medida en que esté relacionada con la citada mercadotecnia.", correct: true},
			{text: "d) Ninguna de las respuestas anteriores es correcta.", correct: false},
		]
	},

	//296
	{
		question: "DE ACUERDO CON EL REGLAMENTO (UE) 2016/679, ¿CUÁL DE LAS SIGUIENTES AFIRMACIONES ES VERDADERA?",
		answers: [
			{text: "a) Todo interesado persona jurídica tendrá derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles, que produzca efectos jurídicos en él o le afecte significativamente de modo similar.", correct: false},
			{text: "b) Todo interesado tendrá derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, excluida la elaboración de perfiles, que produzca efectos jurídicos en él o le afecte significativamente de modo similar.", correct: false},
			{text: "c) Todo interesado tendrá derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles, que produzca efectos jurídicos en él o le afecte significativamente de modo similar.", correct: true},
			{text: "d) Todas las respuestas anteriores son falsas.", correct: false},
		]
	},

	//297
	{
		question: "DE ACUERDO CON EL REGLAMENTO (UE) 2016/679, EL DERECHO DE LA UNIÓN O DE LOS ESTADOS MIEMBROS QUE SE APLIQUE AL RESPONSABLE O EL ENCARGADO DEL TRATAMIENTO PODRÁ LIMITAR, A TRAVÉS DE MEDIDAS LEGISLATIVAS, EL ALCANCE DE LAS OBLIGACIONES Y DE LOS DERECHOS ESTABLECIDOS EN LOS ARTÍCULOS 12 A 22 Y EL ARTÍCULO 34, ASÍ COMO EN EL ARTÍCULO 5 EN LA MEDIDA EN QUE SUS DISPOSICIONES SE CORRESPONDAN CON LOS DERECHOS Y OBLIGACIONES CONTEMPLADOS EN LOS ARTÍCULOS 12 A 22, CUANDO TAL LIMITACIÓN RESPETE EN LO ESENCIAL LOS DERECHOS Y LIBERTADES FUNDAMENTALES Y SEA UNA MEDIDA NECESARIA Y PROPORCIONADA EN UNA SOCIEDAD DEMOCRÁTICA PARA SALVAGUARDAR:",
		answers: [
			{text: "a) La seguridad del Estado.", correct: false},
			{text: "b) La defensa.", correct: false},
			{text: "c) La seguridad pública", correct: false},
			{text: "d) Todas las respuestas anteriores son correctas.", correct: true},
		]
	},

	//298
	{
		question: "LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, NO SE APLICA:",
		answers: [
			{text: "a) A los tratamientos del ámbito ya regulados en el Reglamento general de protección de datos (UE) 2016/679.", correct: false},
			{text: "b) A los tratamientos sometidos a la normativa sobre protección de materias clasificadas.", correct: true},
			{text: "c) A los tratamientos de datos de personas fallecidas, en todo caso.", correct: false},
			{text: "d) La LO 3/2018 se aplica en todos los casos anteriores.", correct: false},
		]
	},

	//299
	{
		question: "SEGÚN LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, EL TRATAMIENTO DE LOS DATOS PERSONALES DE UN MENOR DE EDAD ÚNICAMENTE PODRÁ FUNDARSE EN SU CONSENTIMIENTO CUANDO SEA MAYOR DE:",
		answers: [
			{text: "a) 13 años.", correct: false},
			{text: "b) 16 años.", correct: false},
			{text: "c) 14 años.", correct: true},
			{text: "d) 18 años.", correct: false},
		]
	},	

	//300
	{
		question: "SEGÚN LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, CUANDO LOS DATOS PERSONALES SEAN OBTENIDOS DEL AFECTADO, EL RESPONSABLE DEL TRATAMIENTO PODRÁ DAR CUMPLIMIENTO AL DEBER DE INFORMACIÓN FACILITANDO AL AFECTADO LA SIGUIENTE INFORMACIÓN BÁSICA:",
		answers: [
			{text: "a) La identidad del responsable del tratamiento, la finalidad del tratamiento y la posibilidad de ejercer los derechos establecidos en los artículos 15 a 22 del Reglamento (UE) 2016/679.", correct: true},
			{text: "b) La identidad del responsable del tratamiento y de su representante, la finalidad del tratamiento y las categorías de datos objeto de tratamiento.", correct: false},
			{text: "c) La identidad del responsable del tratamiento, la finalidad del tratamiento, las categorías de datos objeto de tratamiento y la posibilidad de ejercer los derechos establecidos en los artículos 15 a 22 del Reglamento (UE) 2016/679.", correct: false},
			{text: "d) La identidad del responsable del tratamiento y la posibilidad de ejercer los derechos establecidos en los artículos 15 a 22 del Reglamento (UE) 2016/679.", correct: false},
		]
	},

	//301
	{
		question: "SEGÚN LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, CUANDO SE EJERCITA EL DERECHO DE SUPRESIÓN EN RELACIÓN CON MERCADOTECNIA DIRECTA:",
		answers: [
			{text: "a) El responsable deberá eliminar todo registro del afectado.", correct: false},
			{text: "b) El responsable podrá conservar los datos identificativos del afectado necesarios con el único fin de elaborar estadísticas internas.", correct: false},
			{text: "c) El responsable podrá conservar los datos identificativos del afectado necesarios con el fin de impedir tratamientos futuros.", correct: true},
			{text: "d) El responsable podrá conservar los datos del afectado, pero no hacer uso de ellos hasta que el interesado lo vuelva a autorizar expresamente.", correct: false},
		]
	},

	//302
	{
		question: "LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES PERMITE LLEVAR A CABO EL TRATAMIENTO DE IMÁGENES A TRAVÉS DE SISTEMAS DE CÁMARAS O VIDEOCÁMARAS CON LA FINALIDAD DE PRESERVAR LA SEGURIDAD DE LAS PERSONAS Y BIENES, ASÍ COMO DE SUS INSTALACIONES:",
		answers: [
			{text: "a) Únicamente a personas físicas debidamente identificadas en el registro correspondiente.", correct: false},
			{text: "b) Únicamente a personas jurídicas, tanto públicas como privadas.", correct: false},
			{text: "c) A personas físicas o jurídicas, tanto públicas como privadas, si bien captar imágenes de la vía pública está limitado exclusivamente a Entes Públicos.", correct: false},
			{text: "d) A personas físicas o jurídicas, tanto públicas como privadas.", correct: true},
		]
	},

	//303
	{
		question: "SEGÚN LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, RESPECTO AL TRATAMIENTO DE DATOS RELATIVOS A INFRACCIONES Y SANCIONES ADMINISTRATIVAS SELECCIONE LA RESPUESTA ERRÓNEA.",
		answers: [
			{text: "a) Tiene permitido el tratamiento de los datos el órgano competente para la instrucción del procedimiento sancionador.", correct: false},
			{text: "b) Tienen permitido el tratamiento de los datos abogados y procuradores para el ejercicio de sus funciones.", correct: false},
			{text: "c) Tiene permitido el tratamiento de los datos el órgano competente para la imposición de las sanciones.", correct: false},
			{text: "d) Tiene permitido el tratamiento de los datos el órgano competente para denunciar de las infracciones.", correct: true},
		]
	},

	//304
	{
		question: "SEGÚN LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, ¿CUÁL DE LAS SIGUIENTES ENTIDADES NO NECESITA OBLIGATORIAMENTE TENER UN DELEGADO DE PROTECCIÓN DE DATOS?",
		answers: [
			{text: "a) Los colegios profesionales.", correct: false},
			{text: "b) Las empresas de seguridad privada.", correct: false},
			{text: "c) Los profesionales de la salud que ejerzan su actividad a título individual.", correct: true},
			{text: "d) Las Universidades públicas.", correct: false},
		]
	},

	//305
	{
		question: "SEGÚN LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, LA AGENCIA ESPAÑOLA DE PROTECCIÓN DE DATOS:",
		answers: [
			{text: "a) Es una autoridad administrativa dependiente directamente del Comité Europeo de Protección de Datos.", correct: false},
			{text: "b) Es una autoridad administrativa dependiente del Ministerio de Justicia.", correct: false},
			{text: "c) Es una autoridad administrativa independiente de ámbito estatal.", correct: true},
			{text: "d) Es una concesión administrativa que se renueva por concurso público cada 4 años.", correct: false},
		]
	},

	//306
	{
		question: "SEGÚN LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, LA PRESIDENCIA DE LA AGENCIA ESPAÑOLA DE PROTECCIÓN DE DATOS:",
		answers: [
			{text: "a) Será nombrada por las Cortes Generales mediante Decreto Legislativo.", correct: false},
			{text: "b) Será nombrada por el Consejo de ministros mediante Real Decreto.", correct: true},
			{text: "c) Tiene una duración de cuatro años y puede ser renovado para otro período de igual duración.", correct: false},
			{text: "d) Tiene una duración de cuatro años no prorrogable.", correct: false},
		]
	},

	//307
	{
		question: "EL PROCEDIMIENTO QUE TENGA POR OBJETO LA DETERMINACIÓN DE LA POSIBLE EXISTENCIA DE UNA INFRACCIÓN DE LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES:",
		answers: [
			{text: "a) Caduca a los 3 meses.", correct: false},
			{text: "b) Caduca a los 6 meses.", correct: true},
			{text: "c) Caduca a los 9 meses.", correct: false},
			{text: "d) Caduca a los 12 meses.", correct: false},
		]
	},

	//308
	{
		question: "¿QUIÉNES NO ESTÁN SUJETOS AL RÉGIMEN SANCIONADOR DE LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES?",
		answers: [
			{text: "a) Los responsables de los tratamientos.", correct: false},
			{text: "b) Los delegados de protección de datos.", correct: true},
			{text: "c) Las entidades de certificación.", correct: false},
			{text: "d) Los encargados de los tratamientos.", correct: false},
		]
	},

	//309
	{
		question: "EL PLAZO DE PRESCRIPCIÓN DE LAS INFRACCIONES MUY GRAVES A LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, ES DE:",
		answers: [
			{text: "a) 2 años.", correct: false},
			{text: "b) 3 años.", correct: true},
			{text: "c) 4 años.", correct: false},
			{text: "d) 5 años.", correct: false},
		]
	},

	//310
	{
		question: "DE ACUERDO CON LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, SE CONSIDERA INFRACCIÓN LEVE:",
		answers: [
			{text: "a) El incumplimiento del principio de transparencia de la información o el derecho de información del afectado por no facilitar toda la información exigida.", correct: true},
			{text: "b) El tratamiento de datos personales de un menor de edad sin recabar su consentimiento, cuando tenga capacidad para ello.", correct: false},
			{text: "c) No poner a disposición de la autoridad de protección de datos que lo haya solicitado, el registro de actividades de tratamiento.", correct: false},
			{text: "d) El incumplimiento de la obligación de designar un delegado de protección de datos cuando sea exigible su nombramiento.", correct: false},
		]
	},

	//311
	{
		question: "LAS SANCIONES IMPUESTAS EN APLICACIÓN DE CON LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, PRESCRIBEN:",
		answers: [
			{text: "a) Las sanciones por importe igual o inferior a 40.000 euros, prescriben en el plazo de seis meses.", correct: false},
			{text: "b) Las sanciones por importe comprendido entre 40.001 y 300.000 euros prescriben en el plazo de un año.", correct: false},
			{text: "c) Las sanciones por un importe superior a 300.000 euros prescriben a los dos años.", correct: false},
			{text: "d) Las sanciones por un importe superior a 300.000 euros prescriben a los tres años.", correct: true},
		]
	},

	//312
	{
		question: "SEGÚN LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, LOS DERECHOS Y LIBERTADES CONSAGRADOS EN LA CONSTITUCIÓN Y EN LOS TRATADOS Y CONVENIOS INTERNACIONALES EN QUE ESPAÑA SEA PARTE:",
		answers: [
			{text: "a) Son plenamente aplicables en Internet.", correct: true},
			{text: "b) Serán aplicables a Internet cuando una norma de rango legal los desarrolle.", correct: false},
			{text: "c) Serán aplicables a Internet solo para las páginas web alojadas en servidores dentro del territorio español.", correct: false},
			{text: "d) No son aplicables a Internet.", correct: false},
		]
	},

	//313
	{
		question: "DE ACUERDO CON LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, EL DERECHO A LA SEGURIDAD DIGITAL:",
		answers: [
			{text: "a) No existe en Internet.", correct: false},
			{text: "b) Los usuarios tienen derecho a la seguridad de las comunicaciones que transmitan y reciban a través de Internet.", correct: true},
			{text: "c) Los usuarios tienen derecho a la seguridad de las comunicaciones que transmitan a través de Internet, pero no de las que reciban.", correct: false},
			{text: "d) Los usuarios tienen derecho a la seguridad de las comunicaciones que reciban a través de Internet, pero no de las que transmitan.", correct: false},
		]
	},

	//314
	{
		question: "DE ACUERDO CON LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, ¿QUIÉNES TIENEN DERECHO A QUE SEAN SUPRIMIDOS LOS DATOS QUE LES CONCIERNAN, A SU SIMPLE SOLICITUD?",
		answers: [
			{text: "a) Toda persona respecto de los datos que ella misma hubiese facilitado para su publicación por servicios de redes sociales.", correct: true},
			{text: "b) Toda persona respecto de los datos personales que le conciernan y que hubiesen sido facilitados por terceros para su publicación por los servicios de redes sociales.", correct: false},
			{text: "c) Únicamente aquellas personas afectadas que hubiesen facilitado los datos al servicio de redes sociales durante su minoría de edad.", correct: false},
			{text: "d) Las respuestas a) y b) son correctas.", correct: false},
		]
	},

	//315
	{
		question: "DE ACUERDO CON LA LEY ORGÁNICA 3/2018, DE 5 DE DICIEMBRE, DE PROTECCIÓN DE DATOS PERSONALES Y GARANTÍA DE LOS DERECHOS DIGITALES, CUANDO LOS PLAZOS SE SEÑALEN POR DÍAS:",
		answers: [
			{text: "a) Se entiende que estos son naturales.", correct: false},
			{text: "b) Se entiende que estos son hábiles, excluyéndose del cómputo los domingos y los declarados festivos.", correct: false},
			{text: "c) Se entiende que estos son hábiles, excluyéndose del cómputo los sábados, los domingos y los festivos nacionales.", correct: false},
			{text: "d) Se entiende que estos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.", correct: true},
		]
	},
	
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Siguiente Pregunta";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;

    // Si ya se ha respondido, no hacer nada
    if (nextButton.style.display === "block") return;

    const isCorrect = selectedBtn.dataset.correct === "true";

    // Crear mensaje de respuesta
    const message = document.createElement("p");
    message.classList.add("answer-message");

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        message.innerText = "¡Correcto!";
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        message.innerText = "¡Incorrecto!";
    }

    // Mostrar el mensaje debajo de las opciones
    answerButtons.appendChild(message);

    // Deshabilitar todos los botones después de la respuesta
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true; // Deshabilitar todos los botones
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Resaltar la respuesta correcta
        }
    });

    nextButton.style.display = "block"; // Mostrar el botón de siguiente
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Tu nota ${score} / ${questions.length}!`;
    nextButton.innerHTML = "Reiniciar";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        StartQuiz();
    }
});

StartQuiz();