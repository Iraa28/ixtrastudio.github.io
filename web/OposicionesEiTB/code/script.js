const questions = [
	//1.1
	{
		question: "¿Por medio de qué ley se creó el ente público Radio Televisión Vasca?",
		answers: [
			{text: "Ley 5/1983", correct: false},
			{text: "Ley 5/1984", correct: false},
			{text: "Ley 5/1983", correct: false},
			{text: "Ley 5/1982", correct: true},
		]
	},
	//1.2
	{
		question: "Según la ley de creación del ente público de la Radio Televisión Vasca, ¿quién elige a los miembros de su Consejo de Administración?",
		answers: [
			{text: "El Director/a General de EITB", correct: false},
			{text: "El Parlamento Vasco", correct: true},
			{text: "El Gobierno Vasco", correct: false},
			{text: "El Consejo de Redacción de EITB", correct: false},
		]
	},
	//1.3
	{
		question: "Según la ley de creación del ente público de la Radio Televisión Vasca, ¿cuál de las siguientes funciones es competencia del Consejo de Administración del ente Radio Televisión Vasca?",
		answers: [
			{text: "Aprobar las plantillas del ente público y sus modificaciones", correct: true},
			{text: "Redactar las actas de cada reunión del Consejo de Administración y custodiar el Libro de Actas", correct: false},
			{text: "Designar los Consejos Asesores y nombrar los Directores/as de las Sociedades Públicas", correct: false},
			{text: "Designar a miembros para cubrir las vacantes del Consejo de Administración", correct: false},
		]
	},
	//1.4
	{
		question: "¿Con cuál de las siguientes actividades es incompatible el cargo de consejero/a del ente público de la Radio Televisión Vasca?",
		answers: [
			{text: "Cualquier relación de servicios o relación laboral en activo con el Ente Público o sus Sociedades", correct: true},
			{text: "Trabajo en el sector privado", correct: false},
			{text: "Ocupar un cargo público", correct: false},
			{text: "Ser parado/a o jubilado/a", correct: false},
		]
	},
	//1.5
	{
		question: "¿Cuántas reuniones ordinarias debe celebrar el Consejo de Administración según el art. 12 de la ley de creación del ente público de la Radio Televisión Vasca?",
		answers: [
			{text: "Al menos, una reunión ordinaria al semestre", correct: false},
			{text: "Al menos, una reunión ordinaria al mes", correct: true},
			{text: "Al menos, una reunión ordinaria al año", correct: false},
			{text: "Al menos, una reunión ordinaria al trimestre", correct: false},
		]
	},
	//1.6
	{
		question: "Según la ley de creación del ente público Radio Televisión Vasca, ¿quién debe aprobar finalmente el presupuesto del ente Radio Televisión Vasca?",
		answers: [
			{text: "El Consejo de Redacción", correct: false},
			{text: "El Gobierno Vasco", correct: false},
			{text: "El Director/a General", correct: false},
			{text: "El Parlamento Vasco, adjunto a los presupuestos generales", correct: true},
		]
	},
	//1.7
	{
		question: "Según recoge la propia ley de creación del ente público Radio Televisión Vasca, ¿qué artículo del Estatuto de Autonomía permitió su desarrollo y aprobación?",
		answers: [
			{text: "Articulo 19", correct: true},
			{text: "Articulo 20", correct: false},
			{text: "Articulo 21", correct: false},
			{text: "Articulo 22", correct: false},
		]
	},
	
	//2.1
	{
		question: "¿Cuántos miembros componen el Consejo de Administración del ente público Radio Televisión Vasca según la Ley 8/1998 de 27 de marzo (art. 6), de modificación de la Ley de Creación del Ente Público Radio Televisión Vasca?",
		answers: [
			{text: "10", correct: false},
			{text: "16", correct: false},
			{text: "19", correct: true},
			{text: "20", correct: false},
		]
	},
	//2.2
	{
		question: "¿Según la Ley 8/1998 de 27 de marzo (art. 5), de modificación de la ley de creación del ente público Radio Televisión Vasca, ¿cuáles son sus órganos principales?",
		answers: [
			{text: "El Consejo de Administración y el Director/a General", correct: true},
			{text: "El Consejo de Administración y los Consejos Asesores", correct: false},
			{text: "El Director/a General y los Consejos Asesores", correct: false},
			{text: "Los Consejos Asesores y los Directores/as de cada medio", correct: false},
		]
	},
	//2.3
	{
		question: "¿Según la Ley 8/1998 de 27 de marzo (art. 7), cómo debe ser la Presidencia del Consejo de Administración del ente público Radio Televisión Vasca?",
		answers: [
			{text: "Rotativa y semestral", correct: false},
			{text: "Rotativa y trimestral", correct: true},
			{text: "Elegible mediante votación por mayoría de dos tercios y anual", correct: false},
			{text: "Elegible mediante votación por mayoría de dos tercios y semestral", correct: false},
		]
	},
	//2.4
	{
		question: "Según la Ley 8/1998 de 27 de marzo (art. 10), ¿quién debe ejercer las funciones correspondientes a la figura Defensor/a del Espectador?",
		answers: [
			{text: "El Director/a General", correct: false},
			{text: "El Parlamento Vasco", correct: false},
			{text: "El Consejo de Administración", correct: false},
			{text: "El Presidente/a del Consejo de Administración", correct: true},
		]
	},
	//2.5
	{
		question: "Según la Ley 8/1998 de 27 de marzo (art. 7), ¿quién se encarga de proponer al total de los miembros del Consejo de Administración para su designación?",
		answers: [
			{text: "El Director/a General del Ente", correct: false},
			{text: "El Gobierno Vasco", correct: false},
			{text: "Los grupos parlamentarios y diversas entidades del País Vasco", correct: true},
			{text: "Los grupos parlamentarios", correct: false},
		]
	},
	//2.6
	{
		question: "Según la Ley 8/1998 de 27 de marzo (art. 4), ¿cuál es el plazo para la constitución del Consejo de Administración desde la designación de sus miembros?",
		answers: [
			{text: "Quince días", correct: false},
			{text: "Un mes", correct: true},
			{text: "Dos meses", correct: false},
			{text: "Tres meses", correct: false},
		]
	},

	//3.1
	{
		question: "Según el artículo 2.1. del Reglamento de Funcionamiento del Consejo de Administración de EITB, son miembros de pleno derecho con voz y voto de dicho órgano:",
		answers: [
			{text: "La Directora o Director General de EITB", correct: false},
			{text: "La persona encargada del asesoramiento jurídico del Consejo", correct: false},
			{text: "La persona designada para la función de Secretaría de Actas del Consejo", correct: false},
			{text: "Las personas designadas como miembros del Consejo de Administración y el Director/a General de EITB", correct: true},
		]
	},
	//3.2
	{
		question: "Según el artículo 3. del Reglamento de Funcionamiento del Consejo de Administración de EITB, ¿qué criterio ha de regir la rotación de la Presidencia del Consejo de Administración?",
		answers: [
			{text: "El criterio legal de la edad, de mayor a menor, junto al de formación académica", correct: false},
			{text: "El criterio legal de la edad, de menor a mayor, junto al de formación académica", correct: false},
			{text: "El criterio legal de la edad, de mayor a menor", correct: true},
			{text: "El criterio legal de la edad, de menor a mayor", correct: false},
		]
	},
	//3.3
	{
		question: "¿Quién se encarga de convocar las reuniones del Consejo de Administración y fijar su orden del día?",
		answers: [
			{text: "La persona designada para las funciones de Secretaría de Actas del Consejo de Administración", correct: false},
			{text: "La persona designada para las funciones de asesoramiento jurídico del Consejo de Administración", correct: false},
			{text: "La persona designada para las funciones de Presidencia del Consejo de Administración", correct: true},
			{text: "La persona designada para las funciones de Dirección General del EITB", correct: false},
		]
	},
	//3.4
	{
		question: "¿Qué carácter pueden tener las Comisiones del Consejo de Administración?",
		answers: [
			{text: "Únicamente permanente", correct: false},
			{text: "Únicamente especial", correct: false},
			{text: "Permanente y especial, ambos tipos", correct: true},
			{text: "Mixtas", correct: false},
		]
	},
	//3.5
	{
		question: "Según el artículo 23. del Reglamento de Funcionamiento del Consejo de Administración de EITB, ¿qué criterio ha de regir la elección de la Presidencia de las Comisiones del Consejo de Administración?",
		answers: [
			{text: "El criterio legal de la edad, de mayor a menor, junto al de formación académica", correct: false},
			{text: "El criterio legal de la edad, de menor a mayor, junto al de formación académica", correct: false},
			{text: "El criterio legal de la edad, de mayor a menor, salvo que por asentimiento se determine otra cosa en la reunión constitutiva", correct: true},
			{text: "El criterio legal de la edad, de menor a mayor", correct: false},
		]
	},
	//3.6
	{
		question: "Según el artículo 27. del Reglamento de Funcionamiento del Consejo de Administración de EITB, ¿a quién darán cuenta de los resultados de sus trabajos las Comisiones?",
		answers: [
			{text: "Al Consejo de Administración", correct: true},
			{text: "A la Dirección General de EITB", correct: false},
			{text: "A la persona designada para las funciones de Secretaría de Actas del Consejo de Administración", correct: false},
			{text: "A la persona designada para las funciones de asesoramiento jurídico del Consejo de Administración", correct: false},
		]
	},
	//3.7
	{
		question: "Según el artículo 32. del Reglamento de Funcionamiento del Consejo de Administración de EITB, ¿cómo pueden ser las reuniones de este órgano?",
		answers: [
			{text: "Solo ordinarias", correct: false},
			{text: "Solo extraordinarias", correct: false},
			{text: "Solo extraordinarias de carácter urgente", correct: false},
			{text: "Ordinarias, extraordinarias y extraordinarias de carácter urgente", correct: true},
		]
	},
	//3.8
	{
		question: "Según el artículo 48. del Reglamento de Funcionamiento del Consejo de Administración de EITB, ¿cómo pueden ser las votaciones de este órgano?",
		answers: [
			{text: "Ordinarias, nominales o secretas", correct: true},
			{text: "Ordinarias únicamente", correct: false},
			{text: "Nominales únicamente", correct: false},
			{text: "Extraordinarias", correct: false},
		]
	},
	//3.9
	{
		question: "Según el artículo 67. del Reglamento de Funcionamiento del Consejo de Administración de EITB, ¿cuántos miembros deben solicitar la reforma de dicha norma para poder iniciar el trámite?",
		answers: [
			{text: "Todos los miembros del Consejo", correct: false},
			{text: "Al menos, tres miembros del Consejo", correct: false},
			{text: "Al menos, cinco miembros de la Comisión", correct: true},
			{text: "Al menos, dos miembros de la Comisión", correct: false},
		]
	},

	//4.1
	{
		question: "Según el decreto 92/2020, ¿dónde radica el domicilio social de la sociedad mercantil EITB Media, S.A.U?",
		answers: [
			{text: "Donostia – San Sebastián", correct: false},
			{text: "Bilbao", correct: true},
			{text: "Vitoria-Gasteiz", correct: false},
			{text: "Iurreta", correct: false},
		]
	},
	//4.2
	{
		question: "Según el decreto 92/2020, ¿cuál es el órgano supremo de la sociedad mercantil EITB Media, S.A.U?",
		answers: [
			{text: "La Junta General", correct: true},
			{text: "El Administrador/a Único/a", correct: false},
			{text: "El Director/a General", correct: false},
			{text: "El Consejo de Administración", correct: false},
		]
	},
	//4.3
	{
		question: "¿Cómo se denominaba la sociedad pública de EITB dedicada a los contenidos en internet con anterioridad a la fusión para la integración y creación de EITB Media?",
		answers: [
			{text: "Digibat, S.A", correct: false},
			{text: "DigiEITB, S.A.", correct: false},
			{text: "EITBnet, S.A", correct: true},
			{text: "EITB Online, S.A.", correct: false},
		]
	},

	//5.1
	{
		question: "¿Qué Ley regula la comunicación audiovisual de ámbito estatal y establece normas para la prestación del servicio de comunicación audiovisual autonómico y local, y de intercambio de vídeos a través de plataforma?",
		answers: [
			{text: "La Ley General de Comunicación Audiovisual, Ley 13/2022 de 7 de julio", correct: true},
			{text: "La Ley General de la Comunicación Audiovisual, Ley 7/2015 de 31 de marzo", correct: false},
			{text: "La Ley de los Entes Públicos Audiovisuales, Ley 7/2020 de 31 de marzo", correct: false},
			{text: "La Directiva 2007/65/CE de Servicios de Comunicación Audiovisual", correct: false},
		]
	},
	//5.2
	{
		question: "Según la Ley General de Comunicación Audiovisual, ¿cómo se denomina al servicio que se presta para el visionado simultáneo de programas y contenidos audiovisuales sobre la base de un horario de programación?",
		answers: [
			{text: "Servicio de comunicación audiovisual televisivo lineal", correct: true},
			{text: "Servicio de comunicación audiovisual televisivo a petición o televisivo no lineal", correct: false},
			{text: "Servicio de comunicación sonoro a petición", correct: false},
			{text: "Servicio de comunicación audiovisual radiofónico", correct: false},
		]
	},
	//5.3
	{
		question: "Según la Ley General de Comunicación Audiovisual, ¿cómo se denomina a la señal compuesta para transmitir en una frecuencia radioeléctrica determinada y que, al utilizar la tecnología digital, permite la incorporación de las señales de varios servicios?",
		answers: [
			{text: "Multibox", correct: false},
			{text: "Múltiplex", correct: true},
			{text: "Multimedia", correct: false},
			{text: "Hertziana", correct: false},
		]
	},
	//5.4
	{
		question: "¿Cuál es el principio general de la Ley General de Comunicación Audiovisual que establece que los prestadores de servicio deben desarrollar, entre otras, medidas que permitan a los ciudadanos de todas las edades utilizar con eficacia y seguridad los medios, acceder y analizar críticamente la información, discernir entre hechos y opiniones, o reconocer las noticias falsas?",
		answers: [
			{text: "Pluralismo", correct: false},
			{text: "Dignidad humana", correct: false},
			{text: "Autorregulación", correct: false},
			{text: "Alfabetización mediática", correct: true},
		]
	},
	//5.5
	{
		question: "Según la Ley General de Comunicación Audiovisual, el otorgamiento licencias de ámbito estatal para la prestación del servicio de comunicación audiovisual televisivo mediante ondas hertzianas terrestres corresponde a…",
		answers: [
			{text: "La Presidencia del Gobierno", correct: false},
			{text: "El Consejo de Ministros", correct: true},
			{text: "El Parlamento", correct: false},
			{text: "El Consejo Audiovisual", correct: false},
		]
	},
	//5.6
	{
		question: "Según la Ley General de Comunicación Audiovisual, las licencias concedidas para los servicios de comunicación audiovisual televisivos en régimen de licencia tienen una duración de…",
		answers: [
			{text: "15 años", correct: true},
			{text: "20 años", correct: false},
			{text: "25 años", correct: false},
			{text: "No tienen una duración preestablecida", correct: false},
		]
	},
	//5.7
	{
		question: "Según la Ley General de Comunicación Audiovisual, los negocios jurídicos sobre las licencias…",
		answers: [
			{text: "No requieren autorización previa", correct: false},
			{text: "Pueden realizarse en cualquier momento a partir de la concesión", correct: false},
			{text: "Deben garantizar el cumplimiento de la oferta mediante la que se obtuvo la licencia", correct: true},
			{text: "Pueden subarrendarse", correct: false},
		]
	},
	//5.8
	{
		question: "Según la Ley General de Comunicación Audiovisual, de acuerdo con el principio de pluralismo, en el mercado de comunicación audiovisual televisivo lineales mediante ondas hertzianas terrestres, ningún prestador de servicio podrá adquirir una participación significativa en más de un prestador si la audiencia media en el conjunto de sus servicios es superior al…",
		answers: [
			{text: "27%", correct: true},
			{text: "31%", correct: false},
			{text: "51%", correct: false},
			{text: "No hay límite de audiencia", correct: false},
		]
	},
	//5.9
	{
		question: "Según la Ley General de Comunicación Audiovisual, el control sobre la actuación de los prestadores del servicio público de comunicación audiovisual de ámbito autonómico y local corresponde a…",
		answers: [
			{text: "El Gobierno", correct: false},
			{text: "Las Cortes Generales", correct: false},
			{text: "El Ministerio de Asuntos Económicos y Transformación Digital", correct: false},
			{text: "Las Asambleas Legislativas de las Comunidades Autónomas", correct: true},
		]
	},
	//5.10
	{
		question: "Según la Ley General de Comunicación Audiovisual, la prestación del servicio público de comunicación audiovisual mediante ondas hertzianas terrestres de una Comunidad Autónoma en otra limítrofe y con afinidades lingüísticas y culturales…",
		answers: [
			{text: "Debe estar autorizada por el Gobierno", correct: false},
			{text: "No puede realizarse, en ningún caso", correct: false},
			{text: "Exige la firma de un convenio entre las Comunidades Autónomas interesadas", correct: true},
			{text: "Solo puede realizarse en caso de que una de las Comunidades Autónomas no disponga de un prestador de servicio público", correct: false},
		]
	},
	//5.11
	{
		question: "Según la Ley General de Comunicación Audiovisual, el otorgamiento licencias de ámbito local de comunicación audiovisual radiofónica mediante ondas hertzianas terrestres corresponde a…",
		answers: [
			{text: "Las Comunidades Autónomas", correct: true},
			{text: "La Presidencia del Gobierno", correct: false},
			{text: "El Consejo de Ministros", correct: false},
			{text: "Los Ayuntamientos", correct: false},
		]
	},
	//5.12
	{
		question: "Según la Ley General de Comunicación Audiovisual, ¿cuál es el porcentaje mínimo de los contenidos que deben subtitular los prestadores no públicos del servicio de comunicación audiovisual televisivo lineal en abierto?",
		answers: [
			{text: "51%", correct: false},
			{text: "75%", correct: false},
			{text: "80%", correct: true},
			{text: "100%", correct: false},
		]
	},
	//5.13
	{
		question: "Según la Ley General de Comunicación Audiovisual, ¿qué porcentaje del tiempo de emisión anual de su programación deben reservar los prestadores del servicio de comunicación audiovisual televisivo lineal a las obras audiovisuales europeas?",
		answers: [
			{text: "30%", correct: false},
			{text: "51%", correct: true},
			{text: "80%", correct: false},
			{text: "100%", correct: false},
		]
	},

	//6.1
	{
		question: "¿Cómo se denomina la entidad societaria actual de EITB?",
		answers: [
			{text: "EITB Radio y Televisión", correct: false},
			{text: "EITB Media", correct: true},
			{text: "EITB Digital", correct: false},
			{text: "EITB Radiotelevisión Digital", correct: false},
		]
	},
	//6.2
	{
		question: "¿Cuántos canales de televisión integran actualmente el Grupo EITB?",
		answers: [
			{text: "ETB1 y ETB 2", correct: false},
			{text: "ETB1, ETB2, ETB3, ETB4", correct: false},
			{text: "ETB1, ETB2, ETB3, ETB4 y EITB Basque", correct: true},
			{text: "ETB1, ETB2, ETB3 y EITB Basque", correct: false},
		]
	},
	//6.3
	{
		question: "¿Cuántas emisoras de radio integran actualmente el Grupo EITB?",
		answers: [
			{text: "Euskadi Irratia y Radio Euskadi", correct: false},
			{text: "Gaztea y EITB Musika", correct: false},
			{text: "Euskadi Irratia, Radio Euskadi, Gaztea, Radio Vitoria, EITB Musika y EITB Euskal Kantak", correct: true},
			{text: "EITB Musika y Euskal Kantak", correct: false},
		]
	},
	//6.4
	{
		question: "¿Cuáles son las principales unidades de negocio del Grupo reconocidas por el documento EITB 2030 Estrategia?",
		answers: [
			{text: "Radio y televisión", correct: false},
			{text: "Televisión e Internet", correct: false},
			{text: "Radio, televisión e Internet", correct: true},
			{text: "Internet", correct: false},
		]
	},
	//6.5
	{
		question: "Tal y como recoge el documento EITB 2030 Estrategia, ¿cuál fue el primer centro de producción en emitir para Euskal Telebista?",
		answers: [
			{text: "Bilbao", correct: false},
			{text: "Iurreta", correct: true},
			{text: "Miramón", correct: false},
			{text: "Gasteiz", correct: false},
		]
	},
	//6.6
	{
		question: "¿Qué canal temático de ETB se dedica a contenidos íntegramente en euskera, dirigido al público infantil y juvenil?",
		answers: [
			{text: "ETB 1", correct: false},
			{text: "ETB 4", correct: false},
			{text: "ETB 3", correct: true},
			{text: "EITB Basque", correct: false},
		]
	},
	//6.7
	{
		question: "¿Qué canal temático de ETB difunde programación bilingüe de producción propia centrada en el entretenimiento como series, políticas y deporte?",
		answers: [
			{text: "ETB 2", correct: false},
			{text: "ETB 1", correct: false},
			{text: "ETB 4", correct: true},
			{text: "Canal Vasco", correct: false},
		]
	},
	//6.8
	{
		question: "¿Qué emisora de radio fue la primera en emitir dentro del Grupo EITB?",
		answers: [
			{text: "Gaztea", correct: false},
			{text: "Radio Euskadi", correct: false},
			{text: "EITB Musika", correct: false},
			{text: "Euskadi Irratia", correct: true},
		]
	},
	//6.9
	{
		question: "¿A qué emisora de radio del Grupo dedicada a promocionar en la red la música en euskera se accede digitalmente desde el portal eitb.eus?",
		answers: [
			{text: "EITB Musika", correct: false},
			{text: "EITB Euskal Kantak", correct: true},
			{text: "Gaztea", correct: false},
			{text: "Euskadi Irratia", correct: false},
		]
	},
	//6.10
	{
		question: "¿Cómo se denomina la plataforma de televisión a la carta de eitb.eus?",
		answers: [
			{text: "EITB Web", correct: false},
			{text: "EITB Nahieran", correct: true},
			{text: "EITB Online", correct: false},
			{text: "EITB Digital", correct: false},
		]
	},
	//6.11
	{
		question: "¿En qué año se produjo la integración societaria de las unidades de negocio de EITB?",
		answers: [
			{text: "2000", correct: false},
			{text: "2010", correct: false},
			{text: "2015", correct: false},
			{text: "2020", correct: true},
		]
	},
	//6.12
	{
		question: "¿Qué modelo de financiación tiene EITB?",
		answers: [
			{text: "Aportación exclusivamente pública, mediante el contrato programa", correct: false},
			{text: "Aportación exclusivamente privada, mediante ingresos por publicidad", correct: false},
			{text: "Aportación pública y privada, es decir un modelo financiero de carácter mixto", correct: true},
			{text: "Aportación pública mediante canon o tasa específica", correct: false},
		]
	},
	//6.13
	{
		question: "Tal y como recoge el documento EITB 2030 Estrategia, ¿qué significan las siglas PSM en el sector de los medios de comunicación en Europa?",
		answers: [
			{text: "Public Service Media", correct: true},
			{text: "Public Service Multimedia", correct: false},
			{text: "Public System Media", correct: false},
			{text: "Public System Multimedia", correct: false},
		]
	},
	//6.14
	{
		question: "¿Qué son los proyectos cross-media para EITB?",
		answers: [
			{text: "Proyectos sustentados en la colaboración entre los medios de EITB", correct: true},
			{text: "Proyectos sustentados en la lucha contra la desinformación o las fake news", correct: false},
			{text: "Proyectos sustentados en la consolidación de ingresos por publicidad", correct: false},
			{text: "Proyectos sustentados en la ampliación de los canales de televisión del Grupo", correct: false},
		]
	},

	//7.1
	{
		question: "¿Dónde se encuentra la sede social de EITB?",
		answers: [
			{text: "Donostia-San Sebastián", correct: false},
			{text: "Vitoria-Gasteiz", correct: false},
			{text: "Bilbao", correct: true},
			{text: "Iurreta", correct: false},
		]
	},
	//7.2
	{
		question: "¿En qué localidad se ubican los servicios centrales de EITB?",
		answers: [
			{text: "Donostia-San Sebastián", correct: false},
			{text: "Vitoria-Gasteiz", correct: false},
			{text: "Bilbao", correct: true},
			{text: "Iurreta", correct: false},
		]
	},
	//7.3
	{
		question: "¿En qué localidad se ubican las unidades de negocio de radio, televisión e Internet de EITB?",
		answers: [
			{text: "Donostia-San Sebastián", correct: false},
			{text: "Vitoria-Gasteiz", correct: false},
			{text: "Bilbao", correct: true},
			{text: "Iurreta", correct: false},
		]
	},
	//7.4
	{
		question: "¿Dónde se ubica el centro de producción de programas de televisión de EITB?",
		answers: [
			{text: "Donostia-San Sebastián", correct: true},
			{text: "Vitoria-Gasteiz", correct: false},
			{text: "Bilbao", correct: false},
			{text: "Iurreta", correct: false},
		]
	},
	//7.5
	{
		question: "¿En qué ciudad se encuentra la sede de las radios en euskera de EITB?",
		answers: [
			{text: "Donostia-San Sebastián", correct: true},
			{text: "Vitoria-Gasteiz", correct: false},
			{text: "Bilbao", correct: false},
			{text: "Iurreta", correct: false},
		]
	},
	//7.6
	{
		question: "¿En qué ciudad se encuentra la sede de Radio Vitoria?",
		answers: [
			{text: "Laudio/Llodio", correct: false},
			{text: "Vitoria-Gasteiz", correct: true},
			{text: "Amurrio", correct: false},
			{text: "Agurain/Salvatierra", correct: false},
		]
	},
	//7.7
	{
		question: "¿Qué tipo de programación ofrece Gaztea?",
		answers: [
			{text: "Radio generalista", correct: false},
			{text: "Televisión generalista", correct: false},
			{text: "Radiofórmula para público joven", correct: true},
			{text: "Portal web de información y entretenimiento", correct: false},
		]
	},
	//7.8
	{
		question: "La distribución terrestre de radio y televisión en la CAV la realiza…",
		answers: [
			{text: "La sociedad pública Itelazpi", correct: true},
			{text: "Euskaltel", correct: false},
			{text: "Movistar", correct: false},
			{text: "Vodafone", correct: false},
		]
	},
	//7.9
	{
		question: "La difusión en Iparralde de los canales de radio y televisión de EITB se realiza a través de…",
		answers: [
			{text: "TDF", correct: true},
			{text: "Itelazpi", correct: false},
			{text: "Orange", correct: false},
			{text: "SFR", correct: false},
		]
	},
	//7.10
	{
		question: "¿A través de qué satélite realiza ETB la difusión internacional de televisión convencional para América?",
		answers: [
			{text: "Astra", correct: false},
			{text: "Eutelsat", correct: false},
			{text: "Intelsat", correct: false},
			{text: "Hispasat", correct: true},
		]
	},
	//7.11
	{
		question: "¿Cuál es la empresa de comercialización especializada en el mercado de la publicidad y en productos y servicios relacionados con empresas de comunicación en la que EITB tiene participación?",
		answers: [
			{text: "Vicomtech-IK4", correct: false},
			{text: "Expressive, S.L.", correct: true},
			{text: "Euskadi Kirola Fundazioa", correct: false},
			{text: "INI GrafhicsNet", correct: false},
		]
	},
	//7.12
	{
		question: "¿En cuántas entidades participa el grupo EITB como patrono, como apoyo institucional?",
		answers: [
			{text: "Ninguna", correct: false},
			{text: "5", correct: true},
			{text: "9", correct: false},
			{text: "13", correct: false},
		]
	},
	//7.13
	{
		question: "ETB3 es…",
		answers: [
			{text: "Una cadena generalista de televisión en euskera", correct: false},
			{text: "Una cadena generalista de televisión en castellano", correct: false},
			{text: "Una cadena temática infantil-juvenil en euskera", correct: true},
			{text: "Una cadena temática infantil-juvenil en castellano", correct: false},
		]
	},
	//7.14
	{
		question: "La dirección web del portal de contenidos de información y entretenimiento es…",
		answers: [
			{text: "eitb.eus", correct: true},
			{text: "eitb.info", correct: false},
			{text: "eitb24.com", correct: false},
			{text: "eitb.es", correct: false},
		]
	},

	//8.1
	{
		question: "En relación al Plan para la igualdad de mujeres y hombres en el grupo EITB, ¿cuál es la ley que promovió la elaboración de estos planes en Euskadi?",
		answers: [
			{text: "Ley 4/2005, de 18 de febrero para la Igualdad de Mujeres y Hombres", correct: true},
			{text: "Ley 6/1989, de 6 de julio, de la Función Pública Vasca", correct: false},
			{text: "Ley 12/2008, de 5 de diciembre, de Servicios Sociales", correct: false},
			{text: "Ley 2/1988, de 5 de febrero, sobre creación de Emakunde-Instituto Vasco de la Mujer", correct: false},
		]
	},
	//8.2
	{
		question: "¿Cuántos planes de igualdad ha tenido hasta el momento el Grupo EITB?",
		answers: [
			{text: "Uno", correct: false},
			{text: "Dos", correct: false},
			{text: "Tres", correct: true},
			{text: "Cuatro", correct: false},
		]
	},
	//8.3
	{
		question: "¿Qué cargo específico se ocupa de la implantación de políticas transversales de igualdad para todo el Grupo?",
		answers: [
			{text: "La persona Responsable de Igualdad de EITB", correct: true},
			{text: "La Jefatura de Prevención y Salud", correct: false},
			{text: "La Jefatura de Formación", correct: false},
			{text: "Dirección de Recursos Humanos", correct: false},
		]
	},
	//8.4
	{
		question: "En relación al eje de Política y Organización del Plan para la igualdad de mujeres y hombres en el grupo EITB ¿cuál de las siguientes NO es una de las líneas de actuación propuestas?",
		answers: [
			{text: "Sensibilizar a la plantilla sobre la necesidad de la igualdad de mujeres y hombres", correct: false},
			{text: "Utilizar una comunicación inclusiva que permita visibilizar a las mujeres", correct: false},
			{text: "Incorporar la variable sexo de forma sistematizada en todas las bases de datos y análisis estadísticos", correct: false},
			{text: "Crear nuevas estructuras institucionales para la defensa de la igualdad de mujeres y hombres", correct: true},
		]
	},
	//8.5
	{
		question: "En relación al eje de Gestión de personas del III Plan para la igualdad de mujeres y hombres en el grupo EITB ¿cuál de las siguientes NO es una de las líneas de actuación propuestas?",
		answers: [
			{text: "Poner en marcha actuaciones que garanticen el derecho a conciliar la vida laboral, personal y familiar", correct: false},
			{text: "Promover la creación de redes internas de igualdad", correct: true},
			{text: "Vigilar la igualdad salarial entre hombres y mujeres", correct: false},
			{text: "Garantizar un entorno laboral libre de acoso sexual y acoso por razón de sexo", correct: false},
		]
	},
	//8.6
	{
		question: "En relación al eje de Contenidos del III Plan para la igualdad de mujeres y hombres en el grupo EITB ¿cuál de las siguientes NO es una de las líneas de actuación propuestas?",
		answers: [
			{text: "Incrementar la presencia de mujeres en los informativos", correct: true},
			{text: "Equiparar la presencia de mujeres y hombres en tertulias", correct: false},
			{text: "Realizar un correcto tratamiento informativo sobre la violencia machista", correct: false},
			{text: "Fomentar la presencia del deporte practicado por mujeres", correct: false},
		]
	},
	//8.7
	{
		question: "¿A qué cargo u órgano corresponde la tarea de sensibilizar a la plantilla de EITB sobre la necesidad de la igualdad de mujeres y hombres, según el III Plan de Igualdad?",
		answers: [
			{text: "Comisión de Igualdad", correct: true},
			{text: "Jefatura de Formación", correct: false},
			{text: "Dirección de Recursos Humanos", correct: false},
			{text: "Dirección de Comunicación y Estrategia", correct: false},
		]
	},
	//8.8
	{
		question: "¿Qué cargo u órgano es el responsable cerrar y contrastar los documentos creados para la elaboración de los protocolos sobre lenguaje e imagen no sexistas y sobre tratamiento de la violencia de género, según el III Plan de Igualdad?",
		answers: [
			{text: "Comisión de Igualdad", correct: false},
			{text: "Comisión de Contenidos", correct: true},
			{text: "Responsable de Igualdad", correct: false},
			{text: "Dirección de Comunicación y Estrategia", correct: false},
		]
	},
	//8.9
	{
		question: "Según el III Plan para la igualdad de mujeres y hombres en el grupo EITB, la puesta en marcha de las actuaciones que garanticen el derecho a conciliar la vida laboral, personal y familiar y la vigilancia de la igualdad salarial entre hombres y mujeres corresponde a la…",
		answers: [
			{text: "Comisión de Igualdad", correct: false},
			{text: "Jefatura de Formación", correct: false},
			{text: "Dirección de Recursos Humanos", correct: true},
			{text: "Dirección de Comunicación y Estrategia", correct: false},
		]
	},
	//8.10
	{
		question: "Según el III Plan para la igualdad de mujeres y hombres en el grupo EITB, en el correcto tratamiento de la violencia machista los documentos de referencia son…",
		answers: [
			{text: "La Ley 4/2005, de 18 de febrero para la Igualdad de Mujeres y Hombres y El Libro de Estilo de EITB", correct: false},
			{text: "El Libro de Estilo de EITB y el Código Deontológico para la comunicación no sexista de Begira", correct: true},
			{text: "La Ley 4/2005, de 18 de febrero para la Igualdad de Mujeres y Hombres y el Código Deontológico para la comunicación no sexista de Begira", correct: false},
			{text: "Únicamente el Libro de Estilo de EITB", correct: false},
		]
	},
	//8.11
	{
		question: "En relación a la presencia y el correcto tratamiento del deporte practicado por mujeres en la agenda informativa ¿cuál de las siguientes NO es una de las acciones propuestas?",
		answers: [
			{text: "Crear una política conjunta para incorporar de manera sistemática el deporte practicado por mujeres", correct: false},
			{text: "Ampliar el número de mujeres periodistas en las redacciones de deportes", correct: false},
			{text: "Elaboración de una guía para el correcto tratamiento de la información del deporte practicado por mujeres", correct: false},
			{text: "Promover campañas contra el sexismo en el deporte", correct: true},
		]
	},
	//8.12
	{
		question: "¿Cuál es el periodo de vigencia del III Plan para la igualdad de mujeres y hombres en el grupo EITB?",
		answers: [
			{text: "2017-2022", correct: false},
			{text: "2019-2025", correct: false},
			{text: "2019-2022", correct: true},
			{text: "2020-2023", correct: false},
		]
	},

	//9.1
	{
		question: "El Protocolo de EITB contra el acoso sexual y el acoso por razón de sexo establece que las denuncias…",
		answers: [
			{text: "Deben resolverse en el plazo máximo de quince días", correct: false},
			{text: "Deben resolverse en el plazo máximo de un mes", correct: false},
			{text: "Deben tramitarse con urgencia y debe establecerse un plazo máximo de resolución", correct: true},
			{text: "Deben tramitarse como cualquier otro procedimiento interno", correct: false},
		]
	},
	//9.2
	{
		question: "En principio de confidencialidad y protección de datos del Protocolo de EITB contra el acoso sexual y el acoso por razón de sexo establece que…",
		answers: [
			{text: "Todos los trámites serán confidenciales", correct: true},
			{text: "Los datos relativos a la salud no tienen un tratamiento específico", correct: false},
			{text: "Podrá identificarse en todo momento a las personas", correct: false},
			{text: "Se excluyen los derechos digitales", correct: false},
		]
	},
	//9.3
	{
		question: "Todas las personas implicadas en un procedimiento del Protocolo de EITB contra el acoso sexual y el acoso por razón de sexo…",
		answers: [
			{text: "Tienen derecho únicamente a recibir información sobre el procedimiento de la empresa", correct: false},
			{text: "Tienen derecho únicamente a recibir información sobre sus derechos y deberes", correct: false},
			{text: "No tienen derecho a ser asesoradas o acompañadas", correct: false},
			{text: "Tienen derecho a la información sobre el procedimiento, los derechos y los deberes, las fases que se están desarrollando y sus resultados", correct: true},
		]
	},
	//9.4
	{
		question: "La presentación deliberada de una queja o denuncia falsa de acoso o por razón de sexo constituye un motivo de sanción...",
		answers: [
			{text: "Muy grave", correct: true},
			{text: "Grave", correct: false},
			{text: "Leve", correct: false},
			{text: "No constituye una infracción", correct: false},
		]
	},
	//9.5
	{
		question: "El principio de no re-victimización en los procedimientos del Protocolo de EITB contra el acoso sexual y el acoso por razón de sexo supone…",
		answers: [
			{text: "Hacer participar en el proceso a personas formadas en igualdad", correct: false},
			{text: "Evitar que la persona acosada deba exponer en reiteradas ocasiones las conductas de las que ha sido víctima", correct: true},
			{text: "Que las personas tengan derecho a ser resarcidas a través de los mecanismos legales establecidos", correct: false},
			{text: "Garantizar que no se produzcan represalias contra las personas que denuncien, atestigüen, ayuden o participen en investigaciones de acoso", correct: false},
		]
	},
	//9.6
	{
		question: "El Protocolo de EITB contra el acoso sexual y el acoso por razón de sexo se aplica…",
		answers: [
			{text: "Solo a las personas incluidas en el ámbito del convenio.", correct: false},
			{text: "A todas las personas que prestan servicio en el grupo EITB, salvo el personal autónomo", correct: false},
			{text: "A todas las personas que prestan servicio en el grupo EITB, salvo el personal autónomo y el personal de contratas", correct: false},
			{text: "A todas las personas que presten servicios en el grupo EITB", correct: true},
		]
	},
	//9.7
	{
		question: "¿Cómo se denomina la intranet del Grupo EITB?",
		answers: [
			{text: "EITBnet", correct: false},
			{text: "Tortolika", correct: true},
			{text: "eitb.eus", correct: false},
			{text: "IntraEITB", correct: false},
		]
	},
	//9.8
	{
		question: "¿Cuál de las siguientes es un ejemplo de acoso sexual (y no de acoso por razón de sexo) según Protocolo de EITB?",
		answers: [
			{text: "La utilización de expresiones sexistas", correct: false},
			{text: "Ignorar aportaciones, comentarios o acciones según el sexo de la persona que los realiza", correct: false},
			{text: "Hacer insinuaciones sexuales", correct: true},
			{text: "Negarse a acatar órdenes o seguir instrucciones procedentes de superiores jerárquicos que son mujeres", correct: false},
		]
	},
	//9.9
	{
		question: "¿Cuál de las siguientes es un ejemplo de acoso por razón de sexo (y no de acoso sexual) según Protocolo de EITB?",
		answers: [
			{text: "Ridiculizar a las personas que asumen tareas que tradicionalmente ha asumido el otro sexo.", correct: true},
			{text: "Contar chistes o decir piropos de contenido sexual de forma reiterada", correct: false},
			{text: "Difundir rumores con connotación sexual o sobre la vida sexual de una persona", correct: false},
			{text: "Arrinconar, buscar deliberadamente quedarse a solas con la persona de forma innecesaria", correct: false},
		]
	},
	//9.10
	{
		question: "Según el Protocolo de EITB contra el acoso sexual y el acoso por razón de sexo, las conductas de carácter sexista que no sean constitutivas de acoso sexual o acoso por razón de sexo…",
		answers: [
			{text: "Deben presentarse por escrito", correct: false},
			{text: "Pueden presentarse de forma verbal", correct: true},
			{text: "Debe demostrarse que se producen de forma reiterada en el tiempo", correct: false},
			{text: "Son siempre sancionables", correct: false},
		]
	},
	//9.11
	{
		question: "Según el Protocolo de EITB contra el acoso sexual y el acoso por razón de sexo, el procedimiento sobre las conductas de carácter sexista tiene un plazo de…",
		answers: [
			{text: "Tres días laborables", correct: false},
			{text: "Cinco días laborables", correct: false},
			{text: "Siete días laborables", correct: true},
			{text: "No tiene un plazo máximo", correct: false},
		]
	},
	//9.12
	{
		question: "Según el Protocolo de EITB contra el acoso sexual y el acoso por razón de sexo, las denuncias formales deben remitirse a la…",
		answers: [
			{text: "Asesoría Confidencial", correct: true},
			{text: "Comisión de Igualdad", correct: false},
			{text: "Jefatura de Formación", correct: false},
			{text: "Dirección de Recursos Humanos", correct: false},
		]
	},
	//9.13
	{
		question: "Según el Protocolo de EITB contra el acoso sexual y el acoso por razón de sexo, podrán presentar la denuncia…",
		answers: [
			{text: "Solo la víctima", correct: false},
			{text: "La víctima o cualquier persona que tenga conocimiento de algún acto de este tipo", correct: true},
			{text: "Solo los órganos de personal y los representantes de las y los trabajadores", correct: false},
			{text: "Solo la Asesoría Confidencial", correct: false},
		]
	},
	//9.14
	{
		question: "Según el Protocolo de EITB contra el acoso sexual y el acoso por razón de sexo, el procedimiento sobre las denuncias formales tiene un plazo de…",
		answers: [
			{text: "Cinco días laborables", correct: false},
			{text: "Siete días laborables", correct: false},
			{text: "Diez días laborables", correct: true},
			{text: "No tiene un plazo máximo", correct: false},
		]
	},
	//9.15
	{
		question: "De las siguientes, ¿cuál NO se considera una circunstancia agravante en los casos de acoso sexual y el acoso por razón de sexo según el Protocolo de EITB?",
		answers: [
			{text: "El abuso de la superioridad jerárquica", correct: false},
			{text: "La reiteración", correct: false},
			{text: "La alevosía", correct: false},
			{text: "Las conductas de carácter sexista", correct: true},
		]
	},

	//10.1
	{
		question: "El Código de Prevención de Delitos del grupo EITB…",
		answers: [
			{text: "Incluye todos los delitos del Código Penal", correct: false},
			{text: "Incluye los delitos de falsificación de medios de pago", correct: false},
			{text: "Incluye los delitos contra la propiedad intelectual", correct: true},
			{text: "Incluye todos los delitos imputables a personas jurídicas", correct: false},
		]
	},
	//10.2
	{
		question: "De los siguientes, ¿cuál NO es un tipo de delito entre los incluidos entre los analizados por el Código de Prevención de Delitos del grupo EITB?",
		answers: [
			{text: "Delito contra la intimidad y el allanamiento informático", correct: false},
			{text: "Delito de fraudes y estafas", correct: false},
			{text: "Delito de daños informáticos", correct: false},
			{text: "Delitos sobre la ordenación de territorio y urbanismo", correct: true},
		]
	},
	//10.3
	{
		question: "El mapa de riesgos en el Código de Prevención de Delitos del grupo EITB contempla que el riesgo final de los tipos de delito enumerados es…",
		answers: [
			{text: "Bajo o medio", correct: false},
			{text: "Irrelevante o bajo", correct: true},
			{text: "Irrelevante, bajo o medio", correct: false},
			{text: "Irrelevante en todos los casos", correct: false},
		]
	},
	//10.4
	{
		question: "¿Cuál de los siguientes NO es un delito contra los derechos de los trabajadores según el Código de Prevención de Delitos del grupo EITB?",
		answers: [
			{text: "Dar ocupación a trabajadores sin comunicar su alta en el régimen de la Seguridad Social", correct: false},
			{text: "Emplear a ciudadanos extranjeros que carezcan de permiso de trabajo", correct: false},
			{text: "Impedir el ejercicio de la libertad sindical", correct: false},
			{text: "Dotar de los medios necesarios para que los trabajadores desempeñen su actividad con medidas de seguridad e higiene adecuadas", correct: true},
		]
	},
	//10.5
	{
		question: "El cargo u órgano que gestiona la interpretación y el cumplimiento del Código Ético y de Conducta de EITB es…",
		answers: [
			{text: "Dirección de Recursos Humanos", correct: false},
			{text: "Órgano de Control Independiente", correct: true},
			{text: "Dirección de Estrategia y Comunicación", correct: false},
			{text: "Consejo de Administración", correct: false},
		]
	},
	//10.6
	{
		question: "El principio de trato respetuoso y prohibición de discriminación en las relaciones internas recogido en el Código Ético y de Conducta de EITB supone…",
		answers: [
			{text: "Tratar con dignidad, respeto y justicia a las personas que trabajan en el grupo EITB", correct: true},
			{text: "Desarrollar políticas de normalización del uso del euskera en las relaciones internas", correct: false},
			{text: "Diseñar y desarrollar contenidos de calidad", correct: false},
			{text: "Garantizar el respeto a la confidencialidad y privacidad de los datos de terceras partes", correct: false},
		]
	},
	//10.7
	{
		question: "De acuerdo con el principio de la probidad de la gestión, el Código Ético y de Conducta de EITB impide dar o recibir de terceras partes regalos por valor superior a…",
		answers: [
			{text: "50 euros", correct: false},
			{text: "100 euros", correct: true},
			{text: "200 euros", correct: false},
			{text: "500 euros", correct: false},
		]
	},
	//10.8
	{
		question: "Los compromisos que el Código Ético y de Conducta de EITB recoge en relación con la sociedad son…",
		answers: [
			{text: "La responsabilidad social corporativa", correct: false},
			{text: "La transparencia", correct: false},
			{text: "La responsabilidad social corporativa y la transparencia", correct: false},
			{text: "La responsabilidad social corporativa, la transparencia y el respeto al medio ambiente", correct: true},
		]
	},
	//10.9
	{
		question: "La Política de Regalos del grupo EITB…",
		answers: [
			{text: "Deja a criterio de las y los profesionales interpretar la adecuación de los regalos", correct: false},
			{text: "Permite dar y recibir regalos por valor de hasta 200 euros", correct: false},
			{text: "Permite entregar exclusivamente regalos promocionales", correct: true},
			{text: "Permite dar y recibir regalos a través de intermediarios", correct: false},
		]
	},
	//10.10
	{
		question: "En relación al Plan de Prevención de Delitos del grupo EITB…",
		answers: [
			{text: "Los planes de prevención son voluntarios, pero pueden evitar que se impute y condene a la persona jurídica", correct: true},
			{text: "Los planes de prevención son obligatorios para las personas jurídicas", correct: false},
			{text: "Los delitos no pueden ser imputados a las personas jurídicas", correct: false},
			{text: "Las penas máximas para las personas jurídicas son exclusivamente multas", correct: false},
		]
	},
	//10.11
	{
		question: "De los siguientes, cuál NO es una característica del principio de “debido control” para poder evitar la responsabilidad penal de las personas jurídicas…",
		answers: [
			{text: "Disponer de modelos de gestión de los recursos financieros", correct: false},
			{text: "Establecer un sistema disciplinario", correct: false},
			{text: "Informar de los posibles riesgos e incumplimientos", correct: false},
			{text: "Aplicar la norma a los proveedores de bienes y servicios", correct: true},
		]
	},
	//10.12
	{
		question: "¿Cuál de los siguientes documentos NO integra el Plan de Prevención de Delitos del grupo EITB?",
		answers: [
			{text: "Manual de Prevención de Delitos", correct: false},
			{text: "Código de Prevención de Delitos", correct: false},
			{text: "Plan para la Igualdad de Mujeres y Hombres", correct: true},
			{text: "Código Ético y de Conducta", correct: false},
		]
	},
	//10.13
	{
		question: "El ámbito de aplicación del Plan de Prevención de Delitos del grupo EITB es aplicable…",
		answers: [
			{text: "Únicamente al equipo directivo", correct: false},
			{text: "Al equipo directivo y el Consejo de Administración", correct: false},
			{text: "A todo el personal del ente público", correct: false},
			{text: "A todo el personal del ente público y sus sociedades", correct: true},
		]
	},
	//10.14
	{
		question: "El mapa de riesgos del Código de Prevención de Delitos del grupo EITB…",
		answers: [
			{text: "Incluye todos los tipos de delito", correct: false},
			{text: "Determina el riesgo en función de su probabilidad e impacto", correct: true},
			{text: "Solo considera los delitos cuya probabilidad sea importante o intolerable", correct: false},
			{text: "No incluye los delitos cuyo riesgo se considera irrelevante", correct: false},
		]
	},
	//10.15
	{
		question: "Si de acuerdo con el mapa de riesgos del Código de Prevención de Delitos del grupo EITB un delito tiene un nivel de probabilidad y riesgo moderado, importante o intolerable...",
		answers: [
			{text: "Debe comunicarse esta circunstancia al organismo de control", correct: false},
			{text: "Deben tomarse medidas hasta que el riego se reduzca a nivel bajo o irrelevante", correct: true},
			{text: "Supone la existencia de una brecha de riesgo", correct: false},
			{text: "Deben revisarse en la próxima revisión del Plan", correct: false},
		]
	},
	//10.16
	{
		question: "El Código de Prevención de Delitos del grupo EITB debe revisarse por parte del Órgano de Control Independiente…",
		answers: [
			{text: "Al menos una vez al año", correct: false},
			{text: "Al menos cada dos años", correct: true},
			{text: "Al menos cada tres años", correct: false},
			{text: "Cada vez que se identifique un riesgo moderado, importante o intolerable", correct: false},
		]
	},
	//10.17
	{
		question: "El órgano responsable del control del Código de Prevención de Delitos del grupo EITB es…",
		answers: [
			{text: "El Consejo de Administración", correct: false},
			{text: "La Dirección General", correct: false},
			{text: "La Dirección de Recursos Humanos", correct: false},
			{text: "Un Órgano de Control Independiente", correct: true},
		]
	},
	//10.18
	{
		question: "La formación relacionada con del Código de Prevención de Delitos del grupo EITB…",
		answers: [
			{text: "Será idéntica para todos los grupos de interés", correct: false},
			{text: "Se revisará anualmente", correct: false},
			{text: "Será obligatoria solo para el equipo directivo de EITB", correct: false},
			{text: "Será obligatoria para todo el personal del ente público EITB", correct: true},
		]
	},
	//10.19
	{
		question: "El reglamento del Plan de Prevención de Delitos del grupo EITB contempla la creación de un Órgano de Control Independiente. ¿Quién lo designa?",
		answers: [
			{text: "El Consejo de Administración de EITB", correct: false},
			{text: "El Consejo de Redacción", correct: false},
			{text: "El Equipo de Dirección del Ente (G5)", correct: true},
			{text: "El Departamento de Estrategia y Comunicación", correct: false},
		]
	},
	//10.20
	{
		question: "En el Grupo EITB, las denuncias internas sobre las actuaciones delictivas, las vulneraciones del Código de Prevención de Delitos y las vulneraciones del Código Ético y de Conducta deben remitirse a…",
		answers: [
			{text: "El Órgano de Control Independiente", correct: true},
			{text: "El Consejo de Administración de EITB", correct: false},
			{text: "El Consejo de Redacción", correct: false},
			{text: "El Departamento de Estrategia y Comunicación", correct: false},
		]
	},
	//10.21
	{
		question: "Según el Reglamento del Plan de Prevención de Delitos del grupo EITB, la valoración de las denuncias y la tramitación del procedimiento instructor en los casos de actuaciones delictivas corresponde a…",
		answers: [
			{text: "El Consejo de Redacción", correct: false},
			{text: "El Consejo de Administración de EITB", correct: false},
			{text: "El Consejo de Administración de EITB", correct: false},
			{text: "El Órgano de Control Independiente", correct: true},
		]
	},
	//10.22
	{
		question: "Según el Reglamento del Plan de Prevención de Delitos del grupo EITB, el Órgano de Control Independiente debe reunirse…",
		answers: [
			{text: "Cuantas veces sea convocado por su presidencia, y al menos una vez al año", correct: true},
			{text: "A iniciativa de su Secretaria", correct: false},
			{text: "A iniciativa del Equipo de dirección del ente (G5)", correct: false},
			{text: "A iniciativa de su presidencia, y al menos una vez por semestre", correct: false},
		]
	},
	//10.23
	{
		question: "Según el régimen disciplinario del Reglamento del Plan de Prevención de Delitos del grupo EITB, vulnerar los principios y compromisos adoptados en el Código Ético y de Conducta del grupo EITB se considera una falta…",
		answers: [
			{text: "Leve", correct: false},
			{text: "Grave", correct: false},
			{text: "Muy grave", correct: false},
			{text: "Grave, salvo que el Órgano de Control Independiente considere que no tienen suficiente entidad para considerarlas graves", correct: true},
		]
	},
	//10.24
	{
		question: "Según el régimen disciplinario del Reglamento del Plan de Prevención de Delitos del grupo EITB, las infracciones muy graves (comisión de un delito) pueden ser sancionadas con…",
		answers: [
			{text: "Multa", correct: false},
			{text: "Suspensión temporal de tres a treinta días", correct: false},
			{text: "Amonestación verbal", correct: false},
			{text: "Despido disciplinario", correct: true},
		]
	},
	//10.25
	{
		question: "Según el régimen disciplinario del Reglamento del Plan de Prevención de Delitos del grupo EITB, las infracciones graves pueden ser sancionadas con…",
		answers: [
			{text: "Multa", correct: false},
			{text: "Suspensión temporal de tres a treinta días", correct: true},
			{text: "Amonestación verbal", correct: false},
			{text: "Despido disciplinario", correct: false},
		]
	},
	//10.26
	{
		question: "Según el régimen disciplinario del Reglamento del Plan de Prevención de delitos del grupo EITB, cuál de las siguientes NO es una posible consecuencia de una infracción leve…",
		answers: [
			{text: "Multa", correct: true},
			{text: "Amonestación verbal", correct: false},
			{text: "Amonestación escrita", correct: false},
			{text: "Suspensión de empleo y sueldo de uno a dos días", correct: false},
		]
	},
	//10.27
	{
		question: "Según el régimen disciplinario del Reglamento del Plan de Prevención de Delitos del grupo EITB, ¿a quién se podrá sancionar?",
		answers: [
			{text: "A los trabajadores sometidos a los convenios colectivos", correct: false},
			{text: "A todos los trabajadores, estén o no sometidos a los convenios colectivos", correct: false},
			{text: "A todos los trabajadores, estén o no sometidos a los convenios colectivos, y a las entidades externas", correct: true},
			{text: "Solo a las entidades externas", correct: false},
		]
	},
	//10.28
	{
		question: "Según el Plan de Prevención de Delitos, la denuncia de comportamientos que puedan implicar infracciones se dirigirán a…",
		answers: [
			{text: "Tortolika", correct: false},
			{text: "salaketak@eitb.eus", correct: true},
			{text: "Portal de transparencia", correct: false},
			{text: "info@ehu.eus", correct: false},
		]
	},
	//10.29
	{
		question: "Según el Plan de Prevención de Delitos del grupo EITB, ¿quién puede realizar una denuncia?",
		answers: [
			{text: "El equipo directivo de EITB", correct: false},
			{text: "Todos/as los trabajadores/as del grupo EITB, a excepción de los directivos", correct: false},
			{text: "Todos/as los trabajadores/as del grupo EITB", correct: false},
			{text: "Todos/as los trabajadores/as del grupo EITB y todos los terceros no pertenecientes al grupo EITB que tengan la condición de miembros de los grupos de interés", correct: true},
		]
	},
	//10.30
	{
		question: "Según el Plan de Prevención de Delitos del grupo EITB, ¿a quién se podrá denunciar?",
		answers: [
			{text: "Al equipo directivo de EITB", correct: false},
			{text: "A todos/as los trabajadores/as del grupo EITB, a excepción de los directivos", correct: false},
			{text: "A todos/as los trabajadores/as del grupo EITB", correct: false},
			{text: "Todos/as los trabajadores/as del grupo EITB y todos los trabajadores de entidades ajenas que tengan la condición de grupos de interés", correct: true},
		]
	},
	//10.31
	{
		question: "Según el Plan de Prevención de Delitos del grupo EITB…",
		answers: [
			{text: "Las denuncias nunca pueden ser anónimas", correct: false},
			{text: "Las denuncias podrán ser anónimas si aportan indicios o pruebas veraces y de peso de la existencia de actos delictivos", correct: true},
			{text: "Todas las denuncias deben aportar pruebas veraces y de peso de la existencia de actos delictivos", correct: false},
			{text: "Las denuncias deben canalizarse a través de la intranet", correct: false},
		]
	},
	//10.32
	{
		question: "Según el Plan de Prevención de Delitos del grupo EITB, si se constata la comisión de un delito…",
		answers: [
			{text: "Se propondrá la sanción de despido disciplinario y se comunicarán los hechos al órgano jurisdiccional correspondiente", correct: true},
			{text: "Se remitirá el expediente al Departamento de Recursos Humanos, para que evalúe la gravedad del delito", correct: false},
			{text: "Se consultará a los órganos jurisdiccionales correspondientes sobre las medidas a tomar", correct: false},
			{text: "Se calificará la infracción como leve o grave", correct: false},
		]
	},
	//10.33
	{
		question: "Según el Plan de Prevención de Delitos del grupo EITB, si se constata la comisión de una infracción que no constituya un delito…",
		answers: [
			{text: "Se propondrá la sanción de despido disciplinario y se comunicarán los hechos al órgano jurisdiccional correspondiente", correct: false},
			{text: "Se consultará a los órganos jurisdiccionales correspondientes sobre las medidas a tomar", correct: false},
			{text: "El Órgano de Control Independiente propondrá la sanción que entienda pertinente, según califique la infracción como leve o grave", correct: true},
			{text: "El Departamento de Recursos Humanos comunicará los hechos al órgano jurisdiccional correspondiente", correct: false},
		]
	},
	//10.34
	{
		question: "Las consultas sobre el Plan de Prevención de Delitos del grupo EITB deben realizarse en…",
		answers: [
			{text: "Tortolika", correct: false},
			{text: "salaketak@eitb.eus", correct: false},
			{text: "Portal de transparencia", correct: false},
			{text: "complianceinfo@eitb.eus", correct: true},
		]
	},
	//10.35
	{
		question: "El Plan de Prevención de Delitos del grupo EITB debe revisarse por parte del Órgano de Control Independiente…",
		answers: [
			{text: "Al menos cada seis meses", correct: false},
			{text: "Al menos una vez al año", correct: false},
			{text: "Al menos cada dos años", correct: true},
			{text: "Al menos cada tres años", correct: false},
		]
	},

	//11.1
	{
		question: "¿Quién es el responsable del tratamiento de los datos personales en el grupo EITB?",
		answers: [
			{text: "Grupo EITB (Q0191001G)", correct: true},
			{text: "EITBnet, S.A.", correct: false},
			{text: "ETB, EITB Radio y EITBnet", correct: false},
			{text: "ETBsat", correct: false},
		]
	},
	//11.2
	{
		question: "En el grupo EITB, en lo relativo a la protección de datos en los procesos de selección de personal, los datos de las personas candidatas se comunicarán en la web mediante…",
		answers: [
			{text: "Nombre y apellidos", correct: false},
			{text: "DNI", correct: false},
			{text: "Código numérico", correct: true},
			{text: "Número de la Seguridad Social", correct: false},
		]
	},
	//11.3
	{
		question: "En el grupo EITB, en lo relativo a la protección de datos en los procesos de selección de personal, los datos de las personas candidatas se conservarán…",
		answers: [
			{text: "De forma permanente", correct: false},
			{text: "Durante la permanencia en la bolsa y durante un año posterior a partir de su desvinculación", correct: true},
			{text: "Durante la vigencia de la bolsa", correct: false},
			{text: "Durante tres años", correct: false},
		]
	},
	//11.4
	{
		question: "¿En qué dirección pueden ejercerse los derechos relativos a la gestión de los datos personales en el grupo EITB?",
		answers: [
			{text: "Tortolika", correct: false},
			{text: "salaketak@eitb.eus", correct: false},
			{text: "dbo-dpd@eitb.eus", correct: true},
			{text: "complianceinfo@eitb.eus", correct: false},
		]
	},
	//11.5
	{
		question: "En el grupo EITB, en lo relativo a la protección de datos para las becas y las prácticas, los datos económicos de carácter personal se conservarán…",
		answers: [
			{text: "Durante un año", correct: false},
			{text: "Durante dos años", correct: false},
			{text: "Durante cinco años", correct: false},
			{text: "Durante diez años", correct: true},
		]
	},
	//11.6
	{
		question: "En el grupo EITB, en lo referido a la protección de datos relativa a contactos, los datos se conservarán…",
		answers: [
			{text: "Hasta que la persona interesada muestre su oposición o baja", correct: true},
			{text: "Durante un año", correct: false},
			{text: "Durante dos años", correct: false},
			{text: "Durante cinco años", correct: false},
		]
	},
	//11.7
	{
		question: "En el grupo EITB, en lo referido a la protección de datos relativa a contratación y proveedores, los datos se conservarán…",
		answers: [
			{text: "Hasta que la persona interesada muestre su oposición o baja", correct: true},
			{text: "Durante el mantenimiento de la relación contractual y un período posterior de diez años", correct: false},
			{text: "Durante tres años", correct: false},
			{text: "Durante cinco años", correct: false},
		]
	},
	//11.8
	{
		question: "En el grupo EITB, en lo referido a la protección de datos, ¿puede solicitarse la limitación en el tratamiento de datos?",
		answers: [
			{text: "No, nunca", correct: false},
			{text: "Sí, a través de la Agencia Española de Protección de Datos", correct: false},
			{text: "Sí, con efectos inmediatos", correct: false},
			{text: "Sí, en determinadas circunstancias y por motivos relacionados con su situación particular", correct: true},
		]
	},
	//11.9
	{
		question: "En el grupo EITB, en lo relativo a la protección de datos y el acceso a los datos personales…",
		answers: [
			{text: "EITB no está obligada a comunicar si dispone o no de datos personales que se han facilitado", correct: false},
			{text: "Las personas no tienen derecho a acceder a los datos personales que han facilitado", correct: false},
			{text: "Las personas pueden solicitar la rectificación de los datos inexactos", correct: true},
			{text: "En ningún caso puede solicitarse la supresión de los datos existentes", correct: false},
		]
	},
	//11.10
	{
		question: "En el caso de la participación en actos, jornadas o eventos organizados por el grupo EITB, la normativa de protección de datos…",
		answers: [
			{text: "Los datos se conservarán hasta que la persona interesada muestre su oposición o baja", correct: true},
			{text: "Los datos se conservarán durante un año a partir de la finalización del evento", correct: false},
			{text: "Los datos se conservarán durante dos años a partir de la finalización del evento", correct: false},
			{text: "Los datos se eliminarán al finalizar el acto, jornada o evento", correct: false},
		]
	},
	//11.11
	{
		question: "En el grupo EITB, en el caso de los fondos documentales, la política de protección de datos establece que se conservarán…",
		answers: [
			{text: "Durante diez años a partir de la finalización del evento", correct: false},
			{text: "Indefinidamente, salvo ejercicio por la persona interesada del derecho al olvido", correct: true},
			{text: "Indefinidamente, en todos los casos", correct: false},
			{text: "Durante 25 años", correct: false},
		]
	},
	//11.12
	{
		question: "En el grupo EITB, en el caso de las newsletter, la protección de datos establece que los datos se conservarán…",
		answers: [
			{text: "Indefinidamente, en todos los casos", correct: false},
			{text: "Hasta que la persona manifieste su oposición a este tratamiento", correct: true},
			{text: "Hasta que la persona interesada lo solicite a la Agencia Española de Protección de Datos", correct: false},
			{text: "Durante un año", correct: false},
		]
	},
	//11.13
	{
		question: "En el grupo EITB, en el caso de los eventos que supongan una participación interactiva (canal web, concursos, encuestas, etc.), los datos necesarios para el envío de publicidad se mantendrán…",
		answers: [
			{text: "Indefinidamente, en todos los casos", correct: false},
			{text: "Hasta que la persona interesada solicite la baja", correct: true},
			{text: "Hasta que la persona interesada lo solicite a la Agencia Española de Protección de Datos", correct: false},
			{text: "Durante un año", correct: false},
		]
	},
	//11.14
	{
		question: "En el grupo EITB, en lo referido a la información sobre el control de accesos, los datos personales se conservarán…",
		answers: [
			{text: "Durante un mes", correct: true},
			{text: "Durante tres meses", correct: false},
			{text: "Durante seis meses", correct: false},
			{text: "Durante un año", correct: false},
		]
	},
	//11.15
	{
		question: "En el grupo EITB, en lo referido a la información sobre la seguridad mediante videovigilancia, los datos personales se conservarán…",
		answers: [
			{text: "Durante un mes", correct: true},
			{text: "Durante tres meses", correct: false},
			{text: "Durante seis meses", correct: false},
			{text: "Durante un año", correct: false},
		]
	},
	//11.16
	{
		question: "En lo referido a la protección de datos referida a EITB Maratoia, los datos personales se conservarán…",
		answers: [
			{text: "Hasta la conclusión de las gestiones", correct: false},
			{text: "Hasta la conclusión de las gestiones, más un periodo de un año", correct: false},
			{text: "Hasta la conclusión de las gestiones, más un periodo de tres años", correct: false},
			{text: "Hasta la conclusión de las gestiones, más un periodo de seis años", correct: true},
		]
	},
	//11.17
	{
		question: "En el grupo EITB, en lo referido a la protección de datos referida a la transparencia, los datos personales se conservarán…",
		answers: [
			{text: "Durante los períodos fijados en la legislación sectorial de cada ámbito", correct: true},
			{text: "Durante al menos un año", correct: false},
			{text: "Hasta que la persona interesada solicite la baja", correct: false},
			{text: "Hasta que la persona interesada lo solicite a la Agencia Española de Protección de Datos", correct: false},
		]
	},

	//12.1
	{
		question: "¿Cuántas ediciones ha tenido el Libro de estilo de EITB?",
		answers: [
			{text: "Una", correct: false},
			{text: "Dos", correct: false},
			{text: "Tres", correct: true},
			{text: "Cuatro", correct: false},
		]
	},
	//12.2
	{
		question: "¿Qué documento establece las pautas de consenso sobre aspectos periodísticos que requieren un determinado tratamiento informativo o una determinada práctica profesional en EITB?",
		answers: [
			{text: "EITB 2030 Estrategia", correct: false},
			{text: "Libro de estilo de EITB", correct: true},
			{text: "Plan de Igualdad EITB", correct: false},
			{text: "Reglamento Interno del Consejo de Administración", correct: false},
		]
	},
	//12.3
	{
		question: "¿Cuál de las siguientes NO es una de las misiones de servicio público recogidas en el Libro de estilo de EITB?",
		answers: [
			{text: "Garantizar una información de calidad", correct: false},
			{text: "Fomentar y difundir la cultura vasca", correct: false},
			{text: "Fomentar la industria publicitaria en el País Vasco", correct: true},
			{text: "Contribuir a la cohesión social", correct: false},
		]
	},
	//12.4
	{
		question: "El Libro de estilo de EITB define la oferta como “mayoritaria”, lo que significa…",
		answers: [
			{text: "Realizar una oferta para el conjunto de la población, con contenidos multimedia en euskara y castellano", correct: true},
			{text: "Realizar una oferta de contenidos principalmente en castellano", correct: false},
			{text: "Lograr la máxima financiación entre los medios de comunicación", correct: false},
			{text: "Centrarse en contenidos relacionados con el entretenimiento", correct: false},
		]
	},
	//12.5
	{
		question: "Según el Libro de estilo de EITB, entre los objetivos de la responsabilidad social corporativa se encuentran…",
		answers: [
			{text: "La normalización y el prestigio del euskera", correct: true},
			{text: "La normalización y el prestigio de los dos idiomas oficiales", correct: false},
			{text: "La divulgación de la imagen de EITB como grupo", correct: false},
			{text: "El liderazgo informativo", correct: false},
		]
	},
	//12.6
	{
		question: "El organismo de control independiente que controla la ejecución del mandato marco de servicio público de EITB es…",
		answers: [
			{text: "El Consejo de administración de EITB", correct: false},
			{text: "El Consejo audiovisual vasco", correct: false},
			{text: "La Comisión parlamentaria de control de EITB", correct: true},
			{text: "El Órgano de control independiente", correct: false},
		]
	},
	//12.7
	{
		question: "Tal y como se recoge el Libro de estilo, el acceso a la información es un derecho fundamental, y el titular de ese derecho…",
		answers: [
			{text: "Son los medios de comunicación", correct: false},
			{text: "Son los medios de comunicación públicos", correct: false},
			{text: "Son los gobiernos", correct: false},
			{text: "Es la ciudadanía", correct: true},
		]
	},
	//12.8
	{
		question: "Según se recoge en el Libro de estilo, en la defensa de los derechos de expresión e información…",
		answers: [
			{text: "Los asuntos de relevancia pública e interés general serán prioritarios", correct: true},
			{text: "Los asuntos que interesen a más personas serán prioritarios", correct: false},
			{text: "Puede exigirse la cobertura mediática de determinados hechos", correct: false},
			{text: "Los generadores de opinión establecen las pautas informativas", correct: false},
		]
	},
	//12.9
	{
		question: "En el trabajo con las fuentes, el libro de estilo recoge…",
		answers: [
			{text: "La obligación de responder a las preguntas realizadas", correct: false},
			{text: "El derecho a no responder", correct: true},
			{text: "El derecho a no responder, salvo en cuestiones de interés general", correct: false},
			{text: "La enunciación de todas las fuentes consultadas", correct: false},
		]
	},
	//12.10
	{
		question: "Entre los principios fundamentales recogidos en el Libro de estilo de EITB en la defensa de los valores cívicos de la convivencia se citan los reconocidos en…",
		answers: [
			{text: "La Declaración Universal de los Derechos Humanos", correct: true},
			{text: "La Constitución", correct: false},
			{text: "El Estatuto", correct: false},
			{text: "Todas las normativas legales y administrativas aplicables", correct: false},
		]
	},
	//12.11
	{
		question: "El principio de “no discriminación” recogido en Libro de estilo incluye….",
		answers: [
			{text: "Fundamentalmente la discriminación religiosa", correct: false},
			{text: "No incitar al odio o la discriminación por género, raza o cualquier otra circunstancia personal o social", correct: true},
			{text: "La no discriminación por las opiniones", correct: false},
			{text: "El respeto a la diversidad cultural", correct: false},
		]
	},
	//12.12
	{
		question: "Según el Libro de estilo de EITB, el tratamiento del hecho religioso se regirá por en principio de la…",
		answers: [
			{text: "La laicidad", correct: false},
			{text: "El agnosticismo", correct: false},
			{text: "La confesionalidad", correct: false},
			{text: "La aconfesionalidad", correct: true},
		]
	},
	//12.13
	{
		question: "Según el Libro de estilo de EITB, sus profesionales…",
		answers: [
			{text: "No pueden exhibir simbología religiosa, pero sí política o ideológica", correct: false},
			{text: "No pueden exhibir simbología política o ideológica, pero sí religiosa", correct: false},
			{text: "No pueden exhibir simbología religiosa, ni tampoco política o ideológica", correct: true},
			{text: "Tienen libertad para exhibir cualquier tipo de simbología", correct: false},
		]
	},
	//12.14
	{
		question: "Según el Libro de estilo de EITB el compromiso con la lengua…",
		answers: [
			{text: "Impulsará el uso correcto respetuoso de la lengua, en especial del euskera", correct: false},
			{text: "Impulsará el uso correcto respetuoso de la lengua, en especial del castellano", correct: false},
			{text: "Impulsará iniciativas y proyectos que fomenten el conocimiento y el uso del euskera", correct: true},
			{text: "Impulsará iniciativas y proyectos en ambas lenguas oficiales", correct: false},
		]
	},
	//12.15
	{
		question: "Entre los colectivos que merecen especial atención y protección, el Libro de estilo identifica…",
		answers: [
			{text: "La juventud y la infancia", correct: true},
			{text: "La tercera edad", correct: false},
			{text: "Las minorías religiosas", correct: false},
			{text: "Los deportes minoritarios", correct: false},
		]
	},
	//12.16
	{
		question: "Según su Libro de estilo, EITB debe actuar…",
		answers: [
			{text: "Como medio de comunicación local", correct: false},
			{text: "Como medio de comunicación con vocación internacional", correct: false},
			{text: "Como medio de comunicación especializado", correct: false},
			{text: "Como medio líder de su espacio de comunicación", correct: true},
		]
	},
	//12.17
	{
		question: "En el uso del lenguaje constructivo y común, el Libro de estilo menciona como documentos de referencia…",
		answers: [
			{text: "Las normas y denominaciones de Euskaltzaindia", correct: false},
			{text: "Los libros de texto supervisados por el Departamento de Educación del Gobierno Vasco", correct: false},
			{text: "Las normas y denominaciones de Euskaltzaindia y los libros de texto supervisados por el Departamento de Educación del Gobierno Vasco", correct: true},
			{text: "Todos los documentos oficiales generados por las administraciones públicas", correct: false},
		]
	},
	//12.18
	{
		question: "Según el Libro de estilo de EITB, con carácter general, el modelo a utilizar es el…",
		answers: [
			{text: "El euskera dialectal", correct: false},
			{text: "El euskera batua", correct: true},
			{text: "El euskera dialectal y el batua por igual", correct: false},
			{text: "Queda a elección de cada periodista", correct: false},
		]
	},
	//12.19
	{
		question: "¿De los siguientes espacios, en cuál NO se contempla el uso del euskera dialectal según el libro de estilo de EITB?",
		answers: [
			{text: "Cuando se quiere mostrar de forma expresiva o realista aspectos actuales o históricos", correct: false},
			{text: "En las colaboraciones de personas ajenas a ETB que prefieren expresarse en su variedad local", correct: false},
			{text: "En la representación de personajes guionizados", correct: false},
			{text: "En las retransmisiones deportivas", correct: true},
		]
	},
	//12.20
	{
		question: "Según el Libro de estilo de EITB, las pautas para el uso correcto y normalizado del euskera las establece…",
		answers: [
			{text: "Euskaltzaindia", correct: false},
			{text: "El servicio lingüístico de EITB", correct: false},
			{text: "Tanto Euskaltzaindia como el servicio lingüístico de EITB", correct: true},
			{text: "Queda a criterio de cada comunicador/a", correct: false},
		]
	},
	//12.21
	{
		question: "Sobre el uso del euskera en los canales en castellano, el Libro de estilo indica…",
		answers: [
			{text: "Que no puede utilizarse en ningún caso", correct: false},
			{text: "Que debe darse visibilidad al euskera, por ejemplo, con saludos o despedidas en euskera", correct: true},
			{text: "Que pueden incluirse largas intervenciones en euskera en los canales en castellano, aunque no puedan entenderse por parte de la audiencia", correct: false},
			{text: "Que queda a criterio de cada comunicador/a su uso", correct: false},
		]
	},
	//12.22
	{
		question: "En el uso de los términos administrativos y los topónimos…",
		answers: [
			{text: "Se priorizará el castellano", correct: false},
			{text: "Se priorizará el euskera", correct: false},
			{text: "Se mencionarán siempre en ambas lenguas", correct: false},
			{text: "Se regirán por las recomendaciones recogidas en el Libro de estilo y sus anexos", correct: true},
		]
	},
	//12.23
	{
		question: "Según el Libro de estilo de EITB…",
		answers: [
			{text: "Deben separarse claramente información y opinión", correct: true},
			{text: "La información puede incluir juicios de valor", correct: false},
			{text: "La crónica o la crítica deben ser exclusivamente informativas", correct: false},
			{text: "No puede haber espacios de opinión en EITB", correct: false},
		]
	},
	//12.24
	{
		question: "Según el Libro de estilo de EITB, la veracidad…",
		answers: [
			{text: "Se obtiene mediante la difusión de todos los puntos de vista", correct: false},
			{text: "Se obtiene mediante la neutralidad de las y los profesionales", correct: false},
			{text: "Exige la comprobación de los acontecimientos y el contraste de los hechos por distintas fuentes", correct: true},
			{text: "Permite la difusión de conjeturas o rumores", correct: false},
		]
	},
	//12.25
	{
		question: "Sobre la captación de imágenes y sonidos captados en espacios privados, el Libro de estilo la permite…",
		answers: [
			{text: "En todos los casos", correct: false},
			{text: "En determinadas circunstancias", correct: false},
			{text: "Solo con consentimiento previo", correct: true},
			{text: "Solo si no afecta a la reputación el buen nombre o la intimidad de las personas", correct: false},
		]
	},
	//12.26
	{
		question: "La limitación sobre la divulgación de hechos, datos, imágenes o documentos relativos o relacionados con la vida privada que puedan afectar a la reputación…",
		answers: [
			{text: "Debe respetarse en todos los casos", correct: false},
			{text: "Debe limitarse en los espacios privados", correct: false},
			{text: "No tendrá efectos en situaciones en las que predomine el interés público, histórico, científico o cultural relevante.", correct: true},
			{text: "Pueden limitarse si menoscaban su fama", correct: false},
		]
	},
	//12.27
	{
		question: "Según el Libro de estilo de EITB, las caricaturas…",
		answers: [
			{text: "No pueden utilizarse nunca", correct: false},
			{text: "Pueden ser de personajes públicos o profesionales de notoriedad o proyección", correct: true},
			{text: "Son una herramienta generalizada de interpretación", correct: false},
			{text: "Requieren la autorización previa de las personas representadas", correct: false},
		]
	},
	//12.28
	{
		question: "Según el Libro de estilo de EITB, en relación a la presunción de inocencia…",
		answers: [
			{text: "Antes de las sentencias judiciales firmes deben utilizarse términos como “presunto”, “inculpado”, “detenido” o “encausado”", correct: true},
			{text: "Debe ofrecerse la filiación y las imágenes de las personas que pudieran estar implicadas en una acción o delito", correct: false},
			{text: "Deben incluirse todos los nombres, incluidos los de los familiares y allegados", correct: false},
			{text: "Deben ofrecerse datos complementarios, como el país de origen o la etnia", correct: false},
		]
	},
	//12.29
	{
		question: "Sobre las colaboraciones externas de los profesionales de EITB…",
		answers: [
			{text: "No pueden participar en ningún tipo de actos o campañas publicitarias", correct: false},
			{text: "Pueden participar en actos o campañas publicitarias con consentimiento previo de la dirección", correct: true},
			{text: "Pueden participar en todo tipo de eventos promocionales y publicitarios", correct: false},
			{text: "Las limitaciones solo afectan a quienes prestan su imagen y/o voz", correct: false},
		]
	},
	//12.30
	{
		question: "Según el Libro de estilo de EITB, los trabajadores…",
		answers: [
			{text: "No pueden aceptar obsequios o regalos sin valor de mercado", correct: false},
			{text: "No pueden aceptar materiales necesarios para su trabajo periodístico (libros, películas…)", correct: false},
			{text: "No se pueden aceptar gratificaciones o regalos en pago o agradecimiento en asuntos inherentes a su actividad", correct: true},
			{text: "No pueden aceptar viajes informativos promocionales", correct: false},
		]
	},
	//12.31
	{
		question: "Según el Libro de estilo de EITB…",
		answers: [
			{text: "Los profesionales de EITB pueden participar en concursos y sorteos organizados por EITB", correct: false},
			{text: "Pueden competir a título individual en certámenes, concursos o festivales", correct: false},
			{text: "Deben compartir premios y reconocimientos, con o sin dotación económica", correct: true},
			{text: "Solo pueden optar a premios sin dotación económica", correct: false},
		]
	},
	//12.32
	{
		question: "Según el Libro de estilo de EITB, la cláusula de conciencia…",
		answers: [
			{text: "No es aplicable a los trabajadores de EITB", correct: false},
			{text: "Es un derecho aplicable a todos/as los/as trabajadores de EITB", correct: false},
			{text: "Puede ejercerse verbalmente", correct: false},
			{text: "En un derecho que protege a las y los profesionales de la información", correct: true},
		]
	},
	//12.33
	{
		question: "Según el libro de estilo de EITB, el secreto profesional…",
		answers: [
			{text: "No tiene ningún tipo de limitación", correct: false},
			{text: "Afecta solo a la identidad de las fuentes, no así a las notas, documentos y cuantos soportes pudieran contribuir a desvelar su identidad", correct: false},
			{text: "Puede decaer si la fuente ha falseado a sabiendas la información, o si es el único medio para evitar la comisión de un delito contra la vida, la integridad, la salud y la libertad de las personas", correct: true},
			{text: "No está permitido", correct: false},
		]
	},
	//12.34
	{
		question: "Según el Libro de estilo de EITB, las personas que manifiesten su opinión o accedan a hacer declaraciones para los distintos medios…",
		answers: [
			{text: "Ceden su uso por seis meses", correct: false},
			{text: "Ceden de forma ilimitada su uso", correct: false},
			{text: "Deben ser informadas del uso que se hará de las mismas", correct: true},
			{text: "Deben aportar un consentimiento escrito", correct: false},
		]
	},
	//12.35
	{
		question: "Según el Libro de estilo de EITB, el derecho a réplica…",
		answers: [
			{text: "No puede negarse", correct: false},
			{text: "Puede negarse, de forma motivada, según las causas contempladas en la ley", correct: true},
			{text: "La emisión de la réplica se hará en el plazo de 15 días desde la recepción", correct: false},
			{text: "Puede realizarse en cualquier tipo de espacio, independientemente de aquel en el que se difundió la información u opinión", correct: false},
		]
	},
	//12.36
	{
		question: "Según el Libro de estilo de EITB, el derecho de rectificación y corrección de errores…",
		answers: [
			{text: "Puede ejercerse en los quince días siguientes a la difusión de la información", correct: false},
			{text: "Debe aplicarse de forma automática", correct: false},
			{text: "No es aplicable en EITB", correct: false},
			{text: "Debe ser interpretado y valorado por el servicio jurídico de EITB", correct: true},
		]
	},
	//12.37
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre los derechos humanos, el reconocimiento de las víctimas y la paz, se considera adecuado…",
		answers: [
			{text: "Admitir intromisiones o imposiciones partidistas", correct: false},
			{text: "Difundir imágenes escabrosas o sonidos que hieran a las audiencias", correct: false},
			{text: "La espectacularización del dolor de las víctimas y sus allegados", correct: false},
			{text: "Preservar la identidad de las víctimas hasta obtener confirmación oficial y, especialmente, hasta que la familia y allegados hayan sido informados", correct: true},
		]
	},
	//12.38
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento de las guerras, los conflictos armados y el terrorismo, se considera adecuado…",
		answers: [
			{text: "La utilización de eufemismos y el asumir como propio el léxico y argumentos de los terroristas o de las partes en conflicto", correct: false},
			{text: "Que el tratamiento informativo del terrorismo y conflictos armados debe evidenciar que la responsabilidad de este tipo de acciones violentas es de sus autores, sin implicar a toda una comunidad étnica, política, cultural, geográfica", correct: true},
			{text: "La cobertura de forma exclusiva de conflictos bélicos mediante periodistas empotrados", correct: false},
			{text: "Poner en peligro la seguridad de los profesionales de EITB, si es necesario", correct: false},
		]
	},
	//12.39
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento de tragedias, catástrofes y accidentes, se considera adecuado…",
		answers: [
			{text: "La cercanía de la cámara a las víctimas en estado de shock o situación de extremo sufrimiento", correct: false},
			{text: "La difusión de especulaciones o rumores", correct: false},
			{text: "Perseguir a personas heridas o perjudicadas por una catástrofe o accidente para obtener entrevistas", correct: false},
			{text: "El respeto al padecimiento, dolor y sentimiento de las víctimas y sus allegados", correct: true},
		]
	},
	//12.40
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre los suicidios, se considera adecuado…",
		answers: [
			{text: "Visibilizar todas las consecuencias del suicidio en todos los ámbitos: legales, sanitarias, psicológicas, etc.", correct: true},
			{text: "Presentarse como una conducta gloriosa y atrevida, o como un método para afrontar problemas", correct: false},
			{text: "Mencionar la frecuencia de suicidios en determinados escenarios", correct: false},
			{text: "Habilitar los comentarios en las informaciones sobre suicidios", correct: false},
		]
	},
	//12.41
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre las cuestiones religiosas, se considera adecuado…",
		answers: [
			{text: "Mostrar vinculación o adscripción a alguna confesión religiosa", correct: false},
			{text: "Utilizar el ejercicio profesional para propagar opiniones a favor o en contra de asuntos religiosos", correct: false},
			{text: "El uso de clichés o alusiones que difundan estereotipos", correct: false},
			{text: "El tratamiento de las prácticas religiosas desde una perspectiva aconfesional", correct: true},
		]
	},
	//12.42
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre la igualdad de género, se considera adecuado…",
		answers: [
			{text: "Identificar la perspectiva de género únicamente con cuestiones que conciernen a las mujeres", correct: false},
			{text: "Dar un enfoque positivo a los temas tradicionalmente atribuidos a las mujeres", correct: true},
			{text: "Apelar a la apariencia, el estado civil, la relación sentimental o la maternidad para describir a las mujeres", correct: false},
			{text: "Asociar el éxito femenino a la belleza y la sensualidad", correct: false},
		]
	},
	//12.43
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre la violencia machista, se considera adecuado…",
		answers: [
			{text: "Ofrecer información de apoyo que contextualice el suceso", correct: true},
			{text: "El tratamiento que culpabiliza o hace responsable a la víctima de sufrir la violencia sexista", correct: false},
			{text: "Utilizar estereotipos de marginalidad, como la nacionalidad, las creencias, la cultura o las circunstancias socioeconómicas", correct: false},
			{text: "Recurrir a la espectacularización, el sensacionalismo y el morbo", correct: false},
		]
	},
	//12.44
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre menores y jóvenes, se considera adecuado…",
		answers: [
			{text: "Una perspectiva institucional y supuestamente adulta que dicte los patrones y conductas a seguir", correct: false},
			{text: "Presentar los comportamientos de riesgo o imprudencias como atractivos y propios de la juventud", correct: false},
			{text: "Extremar la cautela en los casos de menores especialmente desprotegidos, por ejemplo, sin tutela familiar, o en informaciones sobre acontecimientos de otros países", correct: true},
			{text: "La infantilización y de la adopción de un estilo informativo pretendidamente joven", correct: false},
		]
	},
	//12.45
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo inmigración, racismo y xenofobia, se considera adecuado…",
		answers: [
			{text: "La condena moral, explícita o implícita, de sus costumbres", correct: false},
			{text: "Transmitir la idea de que existe una relación entre inmigración y conceptos negativos como ilegalidad, delincuencia, criminalidad o terrorismo", correct: false},
			{text: "Usar expresiones como “ilegales”, “clandestinos” o “sin papeles”", correct: false},
			{text: "Hacer referencia al término “inmigrante” o al origen racial o procedencia solo cuando sea necesario para comprender la información", correct: true},
		]
	},
	//12.46
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre discapacidad, se considera adecuado…",
		answers: [
			{text: "Establecerse binomios que relacionen enfermedad o trastorno a un sexo o sector o colectivo determinado", correct: false},
			{text: "Utilizar vocablos como “impedido”, “disminuido”, “retrasado”, “paralítico”, “inválido”, “deficiente”, etc.", correct: false},
			{text: "Desvelar información médica solo si la persona afectada lo autoriza o cuando el interés público lo justifica", correct: true},
			{text: "Establecer vínculos entre violencia y salud mental", correct: false},
		]
	},
	//12.47
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre drogodependencias y otras adicciones, se considera adecuado…",
		answers: [
			{text: "Hacer una distinción entre drogas duras y drogas blandas", correct: false},
			{text: "Un uso de las fuentes que revele que se trata de un fenómeno complejo", correct: true},
			{text: "Utilizará la expresión “drogas de diseño”", correct: false},
			{text: "Relacionar el consumo con prácticas delictivas como robos, blanqueo de dinero, etc.", correct: false},
		]
	},
	//12.48
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre la violencia en el deporte, se considera adecuado…",
		answers: [
			{text: "Justificar conductas violentas o minimizar su importancia", correct: false},
			{text: "El empleo del lenguaje militar y belicista", correct: false},
			{text: "Informar de episodios violentos desde el humor o mostrando en tono desenfadado", correct: false},
			{text: "Que las/los profesionales respeten el imperativo de imparcialidad, es decir, que no muestren sus preferencias por uno u otro equipo, especialmente cuando estos mantienen el mismo grado de proximidad", correct: true},
		]
	},
	//12.49
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre la violencia contra los animales, se considera adecuado…",
		answers: [
			{text: "Recrearse en escenas de violencia en espectáculos con animales", correct: false},
			{text: "Que la información analice las causas del maltrato o la violencia con animales y recoja propuestas de mejora o actuación contra el maltrato", correct: true},
			{text: "Difundir rumores, informaciones no contrastadas o leyendas urbanas", correct: false},
			{text: "Emitir informaciones que incluyan violencia contra animales en franjas de protección reforzada para el público infantil", correct: false},
		]
	},
	//12.50
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre la delincuencia, información policial y judicial, se considera adecuado…",
		answers: [
			{text: "Proporcionar información que facilite o promueva la realización de actos delictivos", correct: false},
			{text: "Identificar o entrevistar a menores de edad implicados en un proceso judicial", correct: false},
			{text: "Ofrecerse detalles escabrosos, juicios de valor o informaciones triviales", correct: false},
			{text: "La precisión terminológica", correct: true},
		]
	},
	//12.51
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre la seguridad vial, se considera adecuado…",
		answers: [
			{text: "Tratar los accidentes causados por conductas irresponsables como una forma de violencia y/o delito", correct: true},
			{text: "El tono emotivo y moralizante", correct: false},
			{text: "En los deportes de motor, ensalzar la conducción imprudente y temeraria", correct: false},
			{text: "Minimizar la responsabilidad en los accidentes de tráfico causados por personajes con proyección pública", correct: false},
		]
	},
	//12.52
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre la prevención laboral, accidentes y enfermedades profesionales, se considera adecuado…",
		answers: [
			{text: "Tratar los accidentes o enfermedades laborales como hechos del ámbito privado", correct: false},
			{text: "Especular sobre las causas de un accidente laboral hasta tener información contrastada y veraz", correct: false},
			{text: "Completar la noticia con un informe sobre la situación en el sector productivo", correct: true},
			{text: "Ocultar información cuya veracidad se haya contrastado", correct: false},
		]
	},
	//12.53
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre el medio ambiente y la sostenibilidad, se considera adecuado…",
		answers: [
			{text: "El enfoque alarmista y apocalíptico de los riesgos medioambientales", correct: false},
			{text: "Mostrar como atractivas conductas contrarias a un modelo de desarrollo sostenible", correct: false},
			{text: "Plegarse a las presiones e intentos de injerencia de gobiernos, instituciones, grupos económicos, asociaciones, etc.", correct: false},
			{text: "Dar cobertura preferente a los informes sobre el estado del medioambiente, proveniente de todo tipo de fuentes confiables", correct: true},
		]
	},
	//12.54
	{
		question: "Según el Libro de estilo de EITB, en las pautas de tratamiento informativo sobre la propia EITB, se considera adecuado…",
		answers: [
			{text: "Que los profesionales de EITB sean objeto de noticia por actividades que desarrollen en otros ámbitos ajenos a su quehacer", correct: false},
			{text: "Las noticias de las iniciativas de grupos parlamentarios u otras instituciones que contribuyan al debate constructivo sobre el modelo de la radiotelevisión pública vasca", correct: true},
			{text: "Publicar informaciones sobre sus sociedades o sobre sus actuaciones cuando los contenidos respondan a intereses partidistas o a grupos de presión", correct: false},
			{text: "Minorar el espacio dedicado a la actualidad informativa para ofrecer informaciones relacionadas con las acciones de Responsabilidad Social Corporativa", correct: false},
		]
	},
	//12.55
	{
		question: "Según el Libro de estilo de EITB, en el uso de la marca EITB es adecuado…",
		answers: [
			{text: "Referirse a los canales de EITB como empresas o como medios", correct: false},
			{text: "Traducir o reformular las marcas", correct: false},
			{text: "Utilizar los nombres Euskal Telebista (ETB), EITBnet y Eusko Irratia", correct: false},
			{text: "Priorizar en el uso común la marca EITB", correct: true},
		]
	},
	//12.56
	{
		question: "¿Cuál es el nombre del canal internacional de EITB?",
		answers: [
			{text: "EITBSat", correct: false},
			{text: "EITBInt", correct: false},
			{text: "EITB Basque", correct: true},
			{text: "EITB+", correct: false},
		]
	},
	//12.57
	{
		question: "En el uso de fuentes de información, el Libro de estilo de EITB considera adecuado…",
		answers: [
			{text: "Difundir informaciones sin atribuir las fuentes", correct: false},
			{text: "La atribución indeterminada a fuentes colectivas o institucionales", correct: false},
			{text: "Mimetizar la terminología, el estilo comunicativo o la jerga empleados por las fuentes", correct: false},
			{text: "Buscar otra fuente que verifique la información y pueda nombrarse si la fuente no puede ser identificada por cuestiones de secreto profesional", correct: true},
		]
	},
	//12.58
	{
		question: "En el tratamiento lingüístico de las declaraciones, el Libro de estilo de EITB considera adecuado en los doblajes…",
		answers: [
			{text: "No superponer la voz de doblaje a la voz original en palabras clave", correct: true},
			{text: "Superponer completamente la voz de doblaje a la voz original", correct: false},
			{text: "Realizar un doblaje palabra por palabra", correct: false},
			{text: "No superponer las voces", correct: false},
		]
	},
	//12.59
	{
		question: "En el tratamiento lingüístico de las declaraciones, el Libro de estilo de EITB considera que en las entrevistas…",
		answers: [
			{text: "Hay que pedir a las personas entrevistadas que se expresen principalmente en euskera", correct: false},
			{text: "Hay que pedir a las personas entrevistadas que se expresen principalmente en castellano", correct: false},
			{text: "Hay que invitar a la persona entrevistada a que haga las declaraciones en ambas lenguas", correct: true},
			{text: "Queda a criterio del entrevistador/a la petición de en qué idioma se quieren obtener las declaraciones", correct: false},
		]
	},
	//12.60
	{
		question: "Según el Libro de estilo de EITB, el euskera tendrá prioridad en la obtención de los testimonios a pie de calle de…",
		answers: [
			{text: "Las personas mayores", correct: false},
			{text: "Temáticas deportivas", correct: false},
			{text: "Los niños, los adolescentes y los jóvenes", correct: true},
			{text: "Las testimonios recabados en las grandes localidades", correct: false},
		]
	},
	//12.61
	{
		question: "Según el Libro de estilo de EITB, en las ruedas de prensa, comparecencias, etc.",
		answers: [
			{text: "Se recopilarán únicamente los materiales en una lengua", correct: false},
			{text: "Se recabarán declaraciones adicionales para los informativos en euskera/castellano al finalizar el acto informativo, si en el acto no ha habido oportunidad", correct: true},
			{text: "Se traducirán en la redacción todos los materiales recopilados", correct: false},
			{text: "Se recogerán únicamente las declaraciones producidas durante el acto informativo", correct: false},
		]
	},
	//12.62
	{
		question: "En el primer contacto con protagonistas, expertos o testigos…",
		answers: [
			{text: "Se utilizarán ambas lenguas", correct: false},
			{text: "Se utilizará el castellano", correct: false},
			{text: "Se priorizará el euskera, en especial con representantes institucionales vascos", correct: true},
			{text: "Se deja a criterio del periodista", correct: false},
		]
	},
	//12.63
	{
		question: "En el caso de las declaraciones en castellano o en una tercera lengua de menos de 3-4’’, en los canales en euskera (ETB1, eitb.eus/eu) la técnica empleada será…",
		answers: [
			{text: "Explicar la declaración", correct: false},
			{text: "Subtitular la declaración", correct: false},
			{text: "Doblar la declaración", correct: false},
			{text: "Emitir la declaración tal cual", correct: true},
		]
	},
	//12.64
	{
		question: "En el caso de las declaraciones en castellano o en una tercera lengua de más de 3-4’’, en los canales en euskera (ETB1, eitb.eus/eu) la técnica empleada será…",
		answers: [
			{text: "Explicar la declaración o, en su defecto, subtitularla", correct: true},
			{text: "Subtitular la declaración, o, en su defecto, doblarla", correct: false},
			{text: "Doblar la declaración, o, en su defecto, subtitularla", correct: false},
			{text: "Emitir la declaración tal cual", correct: false},
		]
	},
	//12.65
	{
		question: "En el caso de las declaraciones en euskera o en una tercera lengua de protagonistas grabados en los canales en castellano (ETB2, eitb.eus) la técnica empleada será…",
		answers: [
			{text: "Explicar la declaración o, en su defecto, subtitularla", correct: true},
			{text: "Subtitular la declaración, o, en su defecto, doblarla", correct: false},
			{text: "Doblar la declaración, o, en su defecto, subtitularla", correct: false},
			{text: "Emitir la declaración tal cual", correct: false},
		]
	},
	//12.66
	{
		question: "En el caso de las declaraciones en castellano o en una tercera lengua de protagonistas en directo en Euskadi Irratia la técnica empleada será…",
		answers: [
			{text: "Explicar la declaración o, en su defecto, subtitularla", correct: false},
			{text: "Subtitular la declaración, o, en su defecto, doblarla", correct: false},
			{text: "Explicar la declaración, o, en su defecto, interpretarla", correct: true},
			{text: "Emitir la declaración tal cual", correct: false},
		]
	},
	//12.67
	{
		question: "En el caso de las declaraciones de menos de 10 segundos en Radio Euskadi o Radio Vitoria la técnica empleada será…",
		answers: [
			{text: "Explicar la declaración o, en su defecto, subtitularla", correct: false},
			{text: "Subtitular la declaración, o, en su defecto, doblarla", correct: false},
			{text: "Explicar la declaración, o, en su defecto, interpretarla", correct: false},
			{text: "Contextualizar la declaración", correct: true},
		]
	},
	//12.68
	{
		question: "De acuerdo con el libro de estilo de EITB, en las retransmisiones en directo es adecuado…",
		answers: [
			{text: "Utilizar el directo para abordar a un sujeto y conseguir un consentimiento que no tiene oportunidad de eludir", correct: false},
			{text: "Hacer un análisis previo de la puesta en escena para anticiparse a posibles imprevistos", correct: true},
			{text: "Convertir a la/el periodista en el objeto de la noticia", correct: false},
			{text: "El uso recurrente del “falso directo”", correct: false},
		]
	},
	//12.69
	{
		question: "De acuerdo con el libro de estilo de EITB, en la información política es adecuado…",
		answers: [
			{text: "El “apagón informativo” sobre algunos temas", correct: false},
			{text: "Aceptar pactos sobre el cuestionario de una entrevista", correct: false},
			{text: "Si en una rueda de prensa no se ha permitido hacer preguntas, informar a la audiencia sobre este extremo", correct: true},
			{text: "Favorecer el marketing político mediante la participación de los políticos en otro tipo de programas", correct: false},
		]
	},
	//12.70
	{
		question: "De acuerdo con el Libro de estilo de EITB, en la información electoral es adecuado…",
		answers: [
			{text: "Promover la participación ciudadana y el debate con los candidatos y candidatas a través de las redes sociales y fomentará los formatos que favorezcan la interacción con la audiencia", correct: true},
			{text: "Emitir publicidad de los partidos, etc. que concurran a los comicios, además de la gratuita que les corresponde por ley", correct: false},
			{text: "Que los periodistas en activo de EITB manifiesten su apoyo a las candidaturas", correct: false},
			{text: "Hacer valoraciones positivas o negativas sobre el nivel de participación", correct: false},
		]
	},
	//12.71
	{
		question: "De acuerdo con el Libro de estilo de EITB, en la información sobre sondeos y encuestas es adecuado…",
		answers: [
			{text: "Considerar las encuestas a pie de calle como verdaderos instrumentos para sondear la opinión de la ciudadanía", correct: false},
			{text: "Considerar que los “sondeos de paja” tiene validez metodológica", correct: false},
			{text: "Denominar sondeo o encuesta a las votaciones realizadas en los programas de entretenimiento", correct: false},
			{text: "Remitir a una versión más completa de los resultados en la web de EITB", correct: true},
		]
	},
	//12.72
	{
		question: "De acuerdo con el Libro de estilo de EITB, los titulares…",
		answers: [
			{text: "Pueden contener coloquialismos, jergas, argot o juegos de palabras", correct: false},
			{text: "Deben ser breves, concisos, precisos, concretos y comprensibles para todo tipo de público", correct: true},
			{text: "Pueden generar expectativas informativas que no se cumplan en el relato", correct: false},
			{text: "Pueden contener términos que expresan duda (“al parecer”, etc.)", correct: false},
		]
	},
	//12.73
	{
		question: "De acuerdo con el Libro de estilo de EITB, en los titulares radiofónicos…",
		answers: [
			{text: "Pueden utilizarse perífrasis, subordinadas o circunloquios", correct: false},
			{text: "Pueden hacerse referencia a personas, lugares o siglas poco conocidas", correct: false},
			{text: "No hay que tomar cautelas especiales al enlazar los titulares entre sí", correct: false},
			{text: "Los sumarios o portadas pueden estar constituidos por un conjunto de micronoticias", correct: true},
		]
	},
	//12.74
	{
		question: "De acuerdo con el Libro de estilo de EITB, en la página web eitb.eus los titulares…",
		answers: [
			{text: "Deben facilitar también su aparición en buscadores", correct: true},
			{text: "Deben incorporar signos de puntuación", correct: false},
			{text: "Pueden depender de otros elementos informativos para su comprensión", correct: false},
			{text: "No deben actualizarse", correct: false},
		]
	},
	//12.75
	{
		question: "De acuerdo con el Libro de estilo de EITB, en televisión los titulares…",
		answers: [
			{text: "Pueden recurrir al sensacionalismo, la ambigüedad o el morbo para llamar la atención", correct: false},
			{text: "Pueden enlazarse entre sí sin tomar cautelas", correct: false},
			{text: "Pueden reclamar la atención con una correcta redacción y edición de imágenes, los recursos de realización y la música", correct: true},
			{text: "Llevan firma", correct: false},
		]
	},
	//12.76
	{
		question: "De acuerdo con el Libro de estilo de EITB, el cintillo…",
		answers: [
			{text: "Desarrolla el hecho noticioso del título", correct: false},
			{text: "Ejerce la función de breve entradilla", correct: false},
			{text: "Es un elemento del titular que agrupa informaciones relacionadas", correct: true},
			{text: "Es un enlace", correct: false},
		]
	},
	//12.77
	{
		question: "De acuerdo con el Libro de estilo de EITB, en las noticias de eitb.eus…",
		answers: [
			{text: "La entradilla debe depender para su comprensión del titular o del cuerpo de la información", correct: false},
			{text: "Se recomienda expresar una idea por párrafo, utilizar frases cortas y la estructura de la pirámide invertida", correct: true},
			{text: "Deben incorporar el número máximo posible de recursos multimedia", correct: false},
			{text: "Las citas textuales deben repetir lo que ya ha sido relatado por el periodista", correct: false},
		]
	},
	//12.78
	{
		question: "De acuerdo con el Libro de estilo de EITB, en las noticias de eitb.eus…",
		answers: [
			{text: "Pueden incluirse opiniones y juicios de valor sobre los hechos que se narran", correct: false},
			{text: "No deben incluir enlaces", correct: false},
			{text: "No deben incluir la fecha de actualización", correct: false},
			{text: "Siempre que sea posible, enlazarán los documentos, escritos o audiovisuales a los que la noticia haga referencia", correct: true},
		]
	},
	//12.79
	{
		question: "De acuerdo con el Libro de estilo de EITB, en las noticias televisivas…",
		answers: [
			{text: "Pueden incorporarse expresiones para insistir en la frescura de la noticia (“acaba de llegar a nuestra redacción…”)", correct: false},
			{text: "La imagen determina la selección de los contenidos informativos", correct: false},
			{text: "Cada periodista redactará la entradilla correspondiente a la noticia que ha cubierto en coordinación con el presentador o presentadora", correct: true},
			{text: "Las citas textuales deben repetir lo que ya ha sido relatado por el periodista", correct: false},
		]
	},
	//12.80
	{
		question: "De acuerdo con el Libro de estilo de EITB, en las entrevistas…",
		answers: [
			{text: "Pueden pactarse lo cuestionarios con el entrevistado/a", correct: false},
			{text: "Los entrevistados/as pueden exigir la supervisión del material editado", correct: false},
			{text: "Las/los periodistas deben informar a la persona entrevistada sobre todas las características (formato, tono o registro, duración prevista, etc.) y temas que se tratarán", correct: true},
			{text: "Deben priorizarse las preguntas generales", correct: false},
		]
	},
	//12.81
	{
		question: "De acuerdo con el Libro de estilo de EITB, en las entrevistas televisivas…",
		answers: [
			{text: "Debe cuidarse la elección del escenario donde tendrá lugar la entrevista", correct: true},
			{text: "El entrevistado debe mirar directamente al objetivo", correct: false},
			{text: "Solo el entrevistado se situará ante la cámara", correct: false},
			{text: "No puede mostrarse en ningún caso a personas con el rostro oculto", correct: false},
		]
	},
	//12.82
	{
		question: "De acuerdo con el Libro de estilo de EITB, las entrevistas para eitb.eus…",
		answers: [
			{text: "No deben grabarse nunca", correct: false},
			{text: "Las entrevistas hechas por el público no deben moderarse", correct: false},
			{text: "Deben explicar el medio a través del cual se ha realizado la entrevista (cara a cara, por teléfono, etc.)", correct: true},
			{text: "No pueden mostrar en ningún caso a personas con el rostro oculto", correct: false},
		]
	},
	//12.83
	{
		question: "De acuerdo con el Libro de estilo de EITB, en las crónicas…",
		answers: [
			{text: "Puede incluirse la opinión del periodista", correct: false},
			{text: "Debe incluirse una muestra vívida del ambiente, con una suficiente contextualización", correct: true},
			{text: "El periodista es el protagonista de la información", correct: false},
			{text: "El periodista debe dirigirse a un público especializad", correct: false},
		]
	},
	//12.84
	{
		question: "De acuerdo con el Libro de estilo de EITB, en las crónicas radiofónicas…",
		answers: [
			{text: "Conviene comenzar la crónica con un corte de declaraciones", correct: false},
			{text: "Por extensas que sean, solo pueden tener una única voz en los cortes", correct: false},
			{text: "Es conveniente insistir en los referentes que sitúan la crónica, por ejemplo, los nombres de los personajes, el lugar y el tema", correct: true},
			{text: "Deben interpretarse las intenciones de los protagonistas, aunque se desconozcan", correct: false},
		]
	},
	//12.85
	{
		question: "De acuerdo con el Libro de estilo de EITB, en las crónicas televisivas…",
		answers: [
			{text: "No puede utilizarse el recurso de la pantalla partida", correct: false},
			{text: "Se recomienda utilizar un statement o un stand-up", correct: true},
			{text: "Conviene comenzar la crónica con un corte de declaraciones", correct: false},
			{text: "Puede incluirse la opinión del periodista", correct: false},
		]
	},
	//12.86
	{
		question: "De acuerdo con el Libro de estilo de EITB, las crónicas en eitb.eus…",
		answers: [
			{text: "No deben tener formato blog", correct: false},
			{text: "Deben tener siempre un título interpretativo", correct: false},
			{text: "Permiten conciliar la inmediatez y proximidad del género con la capacidad contextualizadora que proporciona el hipertexto", correct: true},
			{text: "Puede incluirse la opinión del periodista", correct: false},
		]
	},
	//12.87
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre la captación de imágenes y sonidos en lugares públicos y privados…",
		answers: [
			{text: "Los precintos judiciales deben respetarse sin excepción", correct: true},
			{text: "No es necesario el consentimiento previo para grabar en espacios cerrados", correct: false},
			{text: "No está permitida la grabación del exterior de edificios desde la vía pública", correct: false},
			{text: "Las imágenes de las y los miembros de los equipos de seguridad siempre irán pixeladas", correct: false},
		]
	},
	//12.88
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre la captación de imágenes y sonidos en lugares públicos y privados…",
		answers: [
			{text: "Bajo ninguna circunstancia podrá utilizarse la grabación con cámara oculta", correct: false},
			{text: "No se emitirán imágenes y sonidos obtenidos de manera fraudulenta o engañosa", correct: true},
			{text: "Pueden emitirse imágenes de la vida privada de las personas que tienen proyección pública si se han tomado en espacios abiertos", correct: false},
			{text: "Pueden utilizarse teleobjetivos o micrófonos de largo alcance para grabar imágenes y sonidos de índole privada", correct: false},
		]
	},
	//12.89
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre los periodistas en el lugar del acontecimiento…",
		answers: [
			{text: "La dramatización debe prevalecer sobre las opciones más austeras y rigurosas", correct: false},
			{text: "Puede utilizarse la pertenencia a EITB para obtener beneficios o trato de privilegio en el lugar de los hechos", correct: false},
			{text: "Los periodistas pueden expresar opiniones o valoraciones personales en los contenidos informativos", correct: false},
			{text: "La proximidad al lugar de los hechos, a los afectados y testigos no debe poner en riesgo la neutralidad", correct: true},
		]
	},
	//12.90
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre los periodistas en el lugar del acontecimiento…",
		answers: [
			{text: "No es necesario mostrar el uso de medidas de seguridad en los lugares en los que se requiere su uso", correct: false},
			{text: "No hay indicaciones de ningún tipo sobre la indumentaria", correct: false},
			{text: "En los programas informativos, la apariencia y atuendo deben caracterizarse por la discreción y la adaptación al escenario del acontecimiento", correct: true},
			{text: "La vestimenta debe ser siempre la misma, independientemente del tipo de acto desde el que se informe", correct: false},
		]
	},
	//12.91
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre el uso del material de archivo en televisión…",
		answers: [
			{text: "Se recomienda su uso para eludir realizar grabaciones de planos recurso", correct: false},
			{text: "Pueden utilizarse imágenes fácilmente identificables de usuarios, marcas, empresas, escenarios, lugares, etc., para ilustrar temas generales, aunque creen una imagen falsa de los mismos", correct: false},
			{text: "Debe evitarse el uso de imágenes de acontecimientos excesivamente connotados o significados para hablar de temas generales", correct: true},
			{text: "Con carácter general, el material de archivo puede formar parte de los titulares", correct: false},
		]
	},
	//12.92
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre el uso del material de archivo…",
		answers: [
			{text: "No es necesario indicar su uso expresamente", correct: false},
			{text: "En el caso de las fuentes ajenas a ETB, no es necesario indicar su procedencia", correct: false},
			{text: "No puede utilizarse material de archivo con fines satíricos, tampoco en los programas de infoentretenimiento", correct: false},
			{text: "En los casos de material de archivo impactante por el dolor o la violencia, se intentará evitar los elementos que identifican a las personas concretas", correct: true},
		]
	},
	//12.93
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre el uso del material de archivo en eitb.eus…",
		answers: [
			{text: "Si se utilizan contenidos provenientes de la radio y la televisión debe mencionarse el título del programa y la fecha de emisión", correct: false},
			{text: "En la medida de lo posible, las noticias se completarán con enlaces a otras informaciones precedentes sobre el tema", correct: true},
			{text: "Si se modifica y elimina un contenido por razones legales, no debe comunicarse a la audiencia", correct: false},
			{text: "El material de archivo puede formar parte de los titulares", correct: false},
		]
	},
	//12.94
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre el material elaborado por terceros…",
		answers: [
			{text: "Puede ser objeto de compraventa", correct: false},
			{text: "Puede ser una vía para la obtención gratuita de imágenes", correct: false},
			{text: "Los videocomunicados pueden emitirse íntegramente", correct: false},
			{text: "Se evitará emitir contenidos ajenos procedentes de Internet si no se tiene constancia de que están libres de derechos", correct: true},
		]
	},
	//12.95
	{
		question: "De acuerdo con el Libro de estilo de EITB, la procedencia del material elaborado por terceros…",
		answers: [
			{text: "Debe indicarse a través de locución o de rotulación", correct: true},
			{text: "Cada profesional decidirá la necesidad de citar o no su procedencia", correct: false},
			{text: "Nunca puede pertenecer a testigos de acontecimientos imprevistos", correct: false},
			{text: "Puede no citarse su procedencia, si pertenecen a las fuerzas de seguridad", correct: false},
		]
	},
	//12.96
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre el uso de sus redes sociales…",
		answers: [
			{text: "Las cuentas de EITB permiten realizar una escucha activa para responder a consultas, aclarar dudas y monitorizar el flujo de opiniones y/o críticas", correct: true},
			{text: "Las cuentas de EITB pueden emitir contenidos sin verificar o contrastar, dada su instantaneidad", correct: false},
			{text: "Las cuentas de EITB pueden publicar los contenidos informativos antes que eitb.eus o los otros medios del grupo", correct: false},
			{text: "Las cuentas de EITB pueden ser la vía en la que los periodistas expresen las opiniones sobre los temas sobre los que informan", correct: false},
		]
	},
	//12.97
	{
		question: "De acuerdo con el Libro de estilo de EITB, en el uso de sus redes sociales…",
		answers: [
			{text: "Se respetarán las directrices establecidas en el Plan de medios sociales de EITB", correct: true},
			{text: "Pueden crearse cuentas de marcas o productos que no tengan sitio en eitb.eus", correct: false},
			{text: "No hay que hacer una diferenciación entre cuentas profesionales y las cuentas personales de las/los periodistas de EITB", correct: false},
			{text: "No debe mantenerse un diálogo con la audiencia a través de ellas", correct: false},
		]
	},
	//12.98
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre la participación ciudadana…",
		answers: [
			{text: "EITB hace suyas las opiniones de la audiencia expresadas a través de los soportes de participación", correct: false},
			{text: "Debe evitarse habilitar los comentarios en noticias que puedan provocan intervenciones que generen sufrimiento o dolor", correct: true},
			{text: "Puede utilizarse para reducir los costes de acopio del material informativo", correct: false},
			{text: "Los mecanismos de participación pueden utilizarse con fines personales, comerciales o publicitarios", correct: false},
		]
	},
	//12.99
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre la participación ciudadana…",
		answers: [
			{text: "La publicación de la identidad de los participantes siempre es obligatoria, incluidos los comentarios y las encuestas", correct: false},
			{text: "Los espacios de discusión sobre la actualidad no tienen moderación", correct: false},
			{text: "Deben presentarse de manera claramente diferenciada los contenidos elaborados por EITB y los contenidos enviados por la audiencia", correct: true},
			{text: "La participación no puede implicar en ningún caso un coste económico", correct: false},
		]
	},
	//12.100
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre la autoría y la firma en televisión…",
		answers: [
			{text: "Los videos de titulares y los vídeos off llevan firma", correct: false},
			{text: "Si es necesario garantizar el anonimato del autor o autora de la información se utilizará el término genérico ‘EITB Media’", correct: true},
			{text: "Los videos que contienen exclusivamente declaraciones de protagonistas de la noticia llevan firma", correct: false},
			{text: "Con carácter general, las firmas pueden mostrar apodos, sobrenombres o abreviaturas familiares", correct: false},
		]
	},
	//12.101
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre la autoría y la firma en eitb.eus…",
		answers: [
			{text: "Las piezas se firmarán en mayúsculas con el nombre del autor/a seguido de EITB Media", correct: true},
			{text: "Las piezas se firmarán en mayúsculas solo con el nombre del autor/a", correct: false},
			{text: "Los blogs no requieren firma", correct: false},
			{text: "Las infografías no requieren firma", correct: false},
		]
	},
	//12.102
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre la grafía de los apellidos vascos…",
		answers: [
			{text: "La grafía euskérica debe aplicarse a todos los apellidos de origen vasco, independientemente de la procedencia de las personas", correct: false},
			{text: "La grafía euskérica de los apellidos solo es optativa", correct: false},
			{text: "Debe respetarse la grafía de los apellidos tal y como la hayan manifestado las personas nombradas", correct: true},
			{text: "Se escribirán indistintamente en cualquiera de las grafías", correct: false},
		]
	},
	//12.103
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre la grafía de los nombres y apellidos de lenguas que se escriben en alfabeto diferente al latino…",
		answers: [
			{text: "Los nombres y apellidos que originariamente se escriben en el alfabeto griego, cirílico, georgiano, armenio o árabe se adecuarán al euskera utilizando utilizando el sistema pinyin", correct: false},
			{text: "Los nombres y apellidos procedentes del subcontinente indio se adecuarán al euskera y al castellano a través del inglés", correct: true},
			{text: "Los nombres y apellidos en idioma japonés se adecuarán al euskera y al castellano utilizando los sistemas elaborados por Euskaltzaindia", correct: false},
			{text: "Los nombres y apellidos en idioma chino se adecuarán al euskera y al castellano utilizando los sistemas elaborados por la Fundación del Español Urgente", correct: false},
		]
	},
	//12.104
	{
		question: "De acuerdo con el Libro de estilo de EITB, sobre la grafía de la toponimia vasca…",
		answers: [
			{text: "Se tenderá a utilizar los topónimos en ambas lenguas oficiales simultáneamente", correct: false},
			{text: "Se tenderá a utilizar una sola forma para cada topónimo", correct: true},
			{text: "En lo relativo a las formas en euskera de los topónimos de Euskal Herria, la última palabra la tendrá la Fundación del Español Urgente", correct: false},
			{text: "Los topónimos de Euskal Herria deben utilizarse como si fueran referencias ajenas", correct: false},
		]
	},
	//12.105
	{
		question: "¿En cuál de los siguientes documentos recoge la Radiotelevisión Pública Vasca su Estatuto de Redacción?",
		answers: [
			{text: "En la Ley 5/1982 de creación del Ente Público Radio Televisión Vasca", correct: false},
			{text: "En el Libro de Estilo de EITB", correct: true},
			{text: "En el Decreto 92/2020 de autorización de la creación de EITB MEDIA S.A.U.", correct: false},
			{text: "En el convenio colectivo de EITB", correct: false},
		]
	},
	//12.106
	{
		question: "El Estatuto de Redacción de EITB se aprobó el 30 de octubre de 2012 en un:",
		answers: [
			{text: "Consejo de Administración", correct: true},
			{text: "Comité de Redacción", correct: false},
			{text: "Comité Ejecutivo", correct: false},
			{text: "Consejo de Dirección", correct: false},
		]
	},
	//12.107
	{
		question: "Según recoge el preámbulo del Estatuto de Redacción, la Radio Televisión Vasca-Euskal Irrati Telebista (EITB) es un medio de titularidad…",
		answers: [
			{text: "Privada", correct: false},
			{text: "Pública", correct: true},
			{text: "Mixta", correct: false},
			{text: "Social", correct: false},
		]
	},
	//12.108
	{
		question: "El preámbulo del Estatuto de Redacción de EITB se refiere a la responsabilidad de los profesionales del ente de garantizar el derecho a la información de la ciudadanía, respetando los principios editoriales y el contenido del Estatuto con la expresión…:",
		answers: [
			{text: "Responsabilidad Social Corporativa", correct: false},
			{text: "Rendición de cuentas", correct: false},
			{text: "Mandato social", correct: true},
			{text: "Secreto profesional", correct: false},
		]
	},
	//12.109
	{
		question: "¿Qué documento regula “las actuaciones de las y los profesionales de la información audiovisual del Ente Público y sus sociedades filiales”?",
		answers: [
			{text: "El Estatuto de Redacción", correct: true},
			{text: "El convenio colectivo", correct: false},
			{text: "El consejo de redacción", correct: false},
			{text: "El código deontológico", correct: false},
		]
	},
	//12.110
	{
		question: "¿Qué documento fija la composición y funciones de los Consejos de Redacción?",
		answers: [
			{text: "El Libro de Estilo", correct: false},
			{text: "El Estatuto de Redacción", correct: true},
			{text: "El convenio colectivo", correct: false},
			{text: "La Ley 5/1982 de creación del Ente Público “Radio Televisión Vasca”", correct: false},
		]
	},
	//12.111
	{
		question: "¿Cuál de los siguientes documentos hace referencia a una “norma interna de obligado cumplimiento” por parte de las y los profesionales de EITB?",
		answers: [
			{text: "El Código UNESCO", correct: false},
			{text: "La Ley 5/1982 de creación del Ente Público “Radio Televisión Vasca”", correct: false},
			{text: "El Estatuto de Redacción", correct: true},
			{text: "El convenio colectivo", correct: false},
		]
	},
	//12.112
	{
		question: "¿Qué documento regula las relaciones de carácter laboral y sindical de EITB?",
		answers: [
			{text: "El convenio colectivo", correct: true},
			{text: "El Estatuto de Redacción", correct: false},
			{text: "El Libro de Estilo", correct: false},
			{text: "La Ley 5/1982 de creación del Ente Público “Radio Televisión Vasca”", correct: false},
		]
	},
	//12.113
	{
		question: "El Consejo de Redacción de EITB está integrado por:",
		answers: [
			{text: "El Consejo de Administración", correct: false},
			{text: "Las presidencias de los Consejos de Redacción de cada medio", correct: true},
			{text: "Las comisiones asesoras de EITB", correct: false},
			{text: "El Comité Ejecutivo", correct: false},
		]
	},
	//12.114
	{
		question: "¿Cuál de los siguientes principios deontológico recoge el Estatuto de Redacción de EITB?",
		answers: [
			{text: "Priorización de las fuentes no oficiales", correct: false},
			{text: "Respecto al “off de record” en todos los casos, incluso cuando no haya sido expresamente invocado", correct: false},
			{text: "Clara distinción entre los hechos y las opiniones, evitado la propagación de rumores", correct: true},
			{text: "Las informaciones demostradas falsas o erróneas no se rectificarán, salvo en situaciones excepcionales", correct: false},
		]
	},
	//12.115
	{
		question: "Según recoge el Estatuto de Redacción de EITB, la cláusula de conciencia es un derecho de los profesionales de la información regulado por:",
		answers: [
			{text: "El Código deontológico UNESCO", correct: false},
			{text: "El Libro de estilo de EITB", correct: false},
			{text: "La Ley de Creación de EITB", correct: false},
			{text: "La Ley Orgánica 2/1997", correct: true},
		]
	},
	//12.116
	{
		question: "12.116. ¿Qué regula la cláusula de conciencia recogida en el Estatuto de Redacción?",
		answers: [
			{text: "El derecho del profesional de la información a no revelar sus fuentes", correct: false},
			{text: "El derecho del profesional de la información a negarse a participar en la elaboración de informaciones contrarias a los principios éticos y deontológicos de la comunicación", correct: true},
			{text: "El derecho del profesional de la información a no respetar el “off the record”", correct: false},
			{text: "El derecho del profesional de la información a autorregularse en el desempeño de sus funciones", correct: false},
		]
	},
	//12.117
	{
		question: "¿Tienen los profesionales de la información de EITB derecho a la defensa jurídica si se ven afectados por un procedimiento judicial por una información difundida?",
		answers: [
			{text: "No, en ningún caso", correct: false},
			{text: "Sí, cuando la información se realiza con fuentes oficiales gubernamentales", correct: false},
			{text: "Sí, cuando la información se realiza con fuentes inmersas en un procedimiento judicial penal", correct: false},
			{text: "Sí, cuando la información se realiza conforme a los principios generales de la práctica periodística", correct: true},
		]
	},
	//12.118
	{
		question: "En virtud del derecho de secreto profesional, los profesionales de la información de EITB no tienen la obligación de revelar sus fuentes, excepto si lo solicita:",
		answers: [
			{text: "La Dirección de EITB", correct: false},
			{text: "Una resolución judicial motivada", correct: true},
			{text: "El Consejo de Redacción de EITB", correct: false},
			{text: "El Consejo de Administración de EITB", correct: false},
		]
	},
	//12.119
	{
		question: "Respecto al director/a o jefe/a los servicios informativos:",
		answers: [
			{text: "La Dirección propone su nombre y lo comunica a los Consejos de Redacción correspondiente", correct: true},
			{text: "EL Consejo de Administración propone su nombre", correct: false},
			{text: "El Consejo de Redacción propone su nombre y lo comunica a la Dirección", correct: false},
			{text: "El Consejo de Administración propone su nombre y lo comunica a la Dirección", correct: false},
		]
	},
	//12.120
	{
		question: "¿Quién actúa como instancia de comunicación, diálogo y consulta entre la Dirección y las y los profesionales de la información en todo lo relativo al Estatuto de Redacción?",
		answers: [
			{text: "La jefa o el jefe de los servicios informativos", correct: false},
			{text: "El Consejo de Redacción", correct: true},
			{text: "El Consejo de Administración", correct: false},
			{text: "El Comité de Empresa", correct: false},
		]
	},
	//12.121
	{
		question: "¿Ante quién debe justificar la Dirección de EITB o de los servicios informativos la decisión de retrasar o impedir la emisión de determinadas informaciones?",
		answers: [
			{text: "El Lehendakari", correct: false},
			{text: "El Consejo de Redacción", correct: true},
			{text: "El Consejo de Administración", correct: false},
			{text: "El Comité de empresa", correct: false},
		]
	},
	//12.122
	{
		question: "Según el Estatuto de Redacción (art. 71), ¿con qué periodicidad debe reunirse, al menos, el Consejo de Redacción con la Dirección de Informativos y las personas responsables de contenidos?",
		answers: [
			{text: "Diariamente", correct: false},
			{text: "Mensualmente", correct: true},
			{text: "Semanalmente", correct: false},
			{text: "Anualmente", correct: false},
		]
	},
	//12.123
	{
		question: "¿Quién se encarga de asesorar y apoyar a las y los profesionales de la información en todo lo concerniente a los derechos y obligaciones que les corresponden?",
		answers: [
			{text: "El Comité de Empresa", correct: false},
			{text: "El Consejo de Redacción", correct: true},
			{text: "El Consejo de Administración", correct: false},
			{text: "La Dirección de EITB", correct: false},
		]
	},
	//12.124
	{
		question: "¿Quién puede proponer la reforma del Estatuto de Redacción?",
		answers: [
			{text: "Exclusivamente la Dirección de EITB", correct: false},
			{text: "Exclusivamente los Consejos de Redacción", correct: false},
			{text: "Exclusivamente el Consejo de Administración", correct: false},
			{text: "La Dirección General, El Consejo de Administración o los Consejos de Redacción", correct: true},
		]
	},
	//12.125
	{
		question: "Los consejos de redacción de las radios de Eusko Irratia y de EITBnet estarán compuestos, cada uno, por:",
		answers: [
			{text: "Cinco miembros", correct: false},
			{text: "Tres miembros", correct: true},
			{text: "Dos miembros", correct: false},
			{text: "Diez miembros", correct: false},
		]
	},
	//12.126
	{
		question: "El Consejo de Redacción de ETB se compone de:",
		answers: [
			{text: "Cinco representantes", correct: true},
			{text: "Diez representantes", correct: false},
			{text: "Veinte representantes", correct: false},
			{text: "Treinta representantes", correct: false},
		]
	},
	//12.127
	{
		question: "Las personas miembros de los consejos de redacción pueden ejercer sus funciones durante un periodo máximo de:",
		answers: [
			{text: "Un mandato de un año", correct: false},
			{text: "Dos mandatos continuados de dos años cada uno", correct: true},
			{text: "Un mandato de cinco años", correct: false},
			{text: "Un mandato de seis años", correct: false},
		]
	},
	//12.128
	{
		question: "Según el Estatuto de Redacción, ¿quién debe ostentar el cargo de presidenta o presidente de cada consejo de redacción?",
		answers: [
			{text: "Quien haya recabado el menor número de sufragios", correct: false},
			{text: "Quien haya recabado el mayor número de sufragios", correct: true},
			{text: "Quien haya recabado un tercio de sufragios", correct: false},
			{text: "Quien haya recabado un cuarto de sufragios", correct: false},
		]
	},
	//12.129
	{
		question: "Según el reglamento electoral del Estatuto de Redacción, son electoras de las y los representantes de los Consejos de Redacción…",
		answers: [
			{text: "Las personas profesionales de la información vinculadas al grupo EITB con al menos un año de relación jurídica laboral con la empresa", correct: false},
			{text: "Las personas profesionales de la información vinculadas al grupo EITB con al menos tres años de relación jurídica laboral con la empresa", correct: false},
			{text: "Las personas profesionales de la información vinculadas al grupo EITB con al menos un mes de relación jurídica laboral con la empresa", correct: true},
			{text: "Los cargos que deban ser ratificados como miembros del Consejo de Redacción por parte del Consejo de Administración", correct: false},
		]
	},
	//12.130
	{
		question: "Según el reglamento electoral del Estatuto de Redacción, son elegibles para representantes de los consejos de redacción…",
		answers: [
			{text: "Las personas profesionales de la información vinculadas al grupo EITB con al menos un año de relación jurídica laboral con la empresa", correct: false},
			{text: "Las personas profesionales de la información vinculadas al grupo EITB con al menos seis meses de relación jurídica laboral con la empresa", correct: true},
			{text: "Las personas profesionales de la información vinculadas al grupo EITB con al menos tres años de relación jurídica laboral con la empresa", correct: false},
			{text: "Los cargos que deban ser ratificados como miembros del Consejo de Redacción por parte del Consejo de Administración", correct: false},
		]
	},
	//12.131
	{
		question: "El número mínimo de personas para constituir la Comisión Electoral encargada del proceso de votación del Estatuto de Redacción, según el anexo especial de dicho documento, será de:",
		answers: [
			{text: "Cinco", correct: false},
			{text: "Seis", correct: true},
			{text: "Siete", correct: false},
			{text: "Diez", correct: false},
		]
	},
	//12.132
	{
		question: "El número de personas para constituir la Comisión Electoral encargada del proceso de votación del Estatuto de Redacción elegibles por la Dirección de EITB, según el anexo especial de dicho documento, será de:",
		answers: [
			{text: "Tres", correct: true},
			{text: "Cinco", correct: false},
			{text: "Una", correct: false},
			{text: "Dos", correct: false},
		]
	},
	//12.133
	{
		question: "Tras la publicación del censo electoral definitivo, ¿en cuántos días debe celebrarse la votación del Estatuto de Redacción?",
		answers: [
			{text: "Antes de 5 días naturales", correct: false},
			{text: "Antes de 7 días naturales", correct: false},
			{text: "Antes de 10 días naturales", correct: false},
			{text: "Antes de 15 días naturales", correct: true},
		]
	},
	//12.134
	{
		question: "¿Qué día de la semana se establece por normativa para proceder a la votación del Estatuto de Redacción?",
		answers: [
			{text: "Lunes", correct: false},
			{text: "Martes", correct: false},
			{text: "Viernes", correct: true},
			{text: "Domingo", correct: false},
		]
	},
	//12.135
	{
		question: "¿Qué franja horaria se establece por normativa para proceder a la votación del Estatuto de Redacción?",
		answers: [
			{text: "En horario de 10.00 a 12.00 h.", correct: false},
			{text: "En horario de 10.00 a 16.00 h.", correct: false},
			{text: "En horario de 10.00 a 18.00 h.", correct: false},
			{text: "En horario de 10.00 a 22.00 h.", correct: true},
		]
	},
	//12.136
	{
		question: "¿Quiénes no pueden formar parte de la comisión electoral encargada de la elección de las personas miembros de los consejos de redacción?",
		answers: [
			{text: "Quienes hayan trabajado en la elaboración del texto del Estatuto de Redacción y presenten su candidatura a los consejos de redacción", correct: true},
			{text: "Quienes hayan trabajado en la elaboración del texto del Estatuto de Redacción y formen parte del Consejo de Administración", correct: false},
			{text: "Quienes hayan trabajado en la elaboración del texto del Estatuto de Redacción y formen parte del Consejo Asesor", correct: false},
			{text: "Quienes hayan trabajado en la elaboración del texto del Estatuto de Redacción y formen parte de las jefaturas de los servicios informativos", correct: false},
		]
	},
	//12.137
	{
		question: "Según el Libro de Estilo de EITB…",
		answers: [
			{text: "Es correcto hablar de Euskadi incluyendo a Navarra", correct: false},
			{text: "Comunidad Autónoma Vasca se suele abreviar como CAV", correct: true},
			{text: "Es incorrecto hablar de Euskadi para referirse al País Vasco y la CAV", correct: false},
			{text: "Es incorrecto hablar de Euskal Herria para englobar los territorios donde se habla euskera", correct: false},
		]
	},
	//12.138
	{
		question: "Según el Libro de Estilo de EITB, para hablar de personas con discapacidad ha de utilizarse el término",
		answers: [
			{text: "Minusválido", correct: false},
			{text: "Discapacitado", correct: false},
			{text: "Disminuido", correct: false},
			{text: "Persona con discapacidad (física, mental, etc.)", correct: true},
		]
	},
	//12.139
	{
		question: "Según el Libro de Estilo de EITB, en los textos noticiosos el término ‘violencia machista’ puede equipararse a:",
		answers: [
			{text: "Violencia de pareja", correct: false},
			{text: "Violencia sexista", correct: true},
			{text: "Violencia doméstica", correct: false},
			{text: "Violencia intrafamiliar", correct: false},
		]
	},
	//12.140
	{
		question: "Según el Libro de Estilo de EITB, las líneas de los subtítulos en pantalla…",
		answers: [
			{text: "No deben sobrepasar, en ningún caso, los 40 caracteres", correct: true},
			{text: "No deben sobrepasar, en ningún caso, los 10 caracteres", correct: false},
			{text: "No deben sobrepasar, en ningún caso, los 20 caracteres", correct: false},
			{text: "No deben sobrepasar, en ningún caso, los 60 caracteres", correct: false},
		]
	},
	//12.141
	{
		question: "Según el Libro de Estilo de EITB, en los subtítulos de traducción que ocupen más de una línea en pantalla…",
		answers: [
			{text: "La duración de la pantalla (corte) debe ser menor de diez segundos, para facilitar la lectura del subtítulo", correct: false},
			{text: "Deben aprovecharse los lugares relacionados con la gramática (comas, nexos, conjunciones…) para partir las líneas", correct: true},
			{text: "No es necesario respetar la correcta utilización de los puntos y las comas", correct: false},
			{text: "Es absolutamente necesaria la utilización de comillas para abrir y cerrar los subtítulos", correct: false},
		]
	},
	//12.142
	{
		question: "En relación a las cuestiones gráficas en castellano, según el Libro de Estilo de EITB …",
		answers: [
			{text: "Los números se expresarán obligatoriamente mediante cifras, incluyendo los comprendidos entre el uno y el nueve, aunque haya espacio suficiente", correct: false},
			{text: "Aún escribiendo en mayúsculas, deben emplearse los acentos correspondientes (CANCÚN)", correct: true},
			{text: "El prefijo “ex” debe ir unido a la base mediante un guion cuando está compuesta por más de una palabra (ex-primer ministro, etc.)", correct: false},
			{text: "Es obligatorio acentuar el adverbio “solo” (sólo).", correct: false},
		]
	},
	//12.143
	{
		question: "En relación a las pautas de grabación con ENG, el Libro de Estilo de EITB establece que…",
		answers: [
			{text: "En las exposiciones de arte, cada cuadro o escultura grabada debe tener un plano de “totalidad”, pero no es necesario que tenga un plano de “detalles”", correct: false},
			{text: "En los deportes, no es necesario que el equipo de ENG conozca lo básico de ese deporte y sus principales deportistas", correct: false},
			{text: "El equipo de ENG debe conocer el idioma en el que se desarrollará la rueda de prensa", correct: true},
			{text: "Para el statement (Stand up) se debe priorizar el fondo sobre la imagen del periodista, especialmente en informaciones sobre accidentes, daños y catástrofes", correct: false},
		]
	},
	//12.144
	{
		question: "En relación a los créditos de televisión, el Libro de Estilo de EITB establece que…",
		answers: [
			{text: "Cada tipo de programa tiene su propio sistema de créditos, en concreto, tres: entretenimiento y actualidad, servicios informativos, y retransmisiones externas.", correct: true},
			{text: "Los créditos tienen un único modo de cierre", correct: false},
			{text: "Presentadores/as y periodistas se mencionarán al finalizar el programa y no en el momento de su aparición", correct: false},
			{text: "Los créditos se insertarán aunque hayan finalizado las imágenes del programa correspondiente", correct: false},
		]
	},
	//12.145
	{
		question: "Según el Libro de Estilo de EITB, ¿cuál de las siguientes expresiones resulta inadecuada?",
		answers: [
			{text: "Inmigrante ilegal", correct: true},
			{text: "Migrante", correct: false},
			{text: "Expatriado", correct: false},
			{text: "Exiliado", correct: false},
		]
	},
	//12.146
	{
		question: "¿En qué documento pueden las y los periodistas consultar palabras que les generan dudas a la hora de elaborar una información?",
		answers: [
			{text: "En el Libro de Estilo de EITB", correct: true},
			{text: "En el Estatuto de Redacción", correct: false},
			{text: "En la ley de creación del Ente EITB", correct: false},
			{text: "En el Código deontológico de la FAPE", correct: false},
		]
	},
	//12.147
	{
		question: "¿Qué servicio meteorológico cita el Libro de Estilo de EITB como propio de la CAV?",
		answers: [
			{text: "Meteo France", correct: false},
			{text: "AEMET", correct: false},
			{text: "Euskalmet", correct: true},
			{text: "Eguraldia", correct: false},
		]
	},
	//12.148
	{
		question: "Según el Libro de Estilo de EITB, ¿qué equipo puede ser de ayuda para interpretar una noticia sobre fenómenos atmosféricos?",
		answers: [
			{text: "El equipo de Deportes", correct: false},
			{text: "El equipo de Eguraldi", correct: true},
			{text: "El equipo de sucesos", correct: false},
			{text: "El equipo de la web", correct: false},
		]
	},
	//12.149
	{
		question: "Según el Libro de Estilo de EITB, natural de Bizkaia se escribe en castellano mediante la palabra…",
		answers: [
			{text: "Bizkaíno", correct: true},
			{text: "Bizcaino", correct: false},
			{text: "Vizkaino", correct: false},
			{text: "Biscayno", correct: false},
		]
	},
	//12.150
	{
		question: "Según el Libro de Estilo de EITB, la transformación que ocurre en el sistema climático del planeta tierra se denomina…",
		answers: [
			{text: "Ecología", correct: false},
			{text: "Medioambiente", correct: false},
			{text: "Emergencia ecologista", correct: false},
			{text: "Cambio climático", correct: true},
		]
	},
	//12.151
	{
		question: "Según el Libro de Estilo de EITB, un “desplazado/a” es un/a…",
		answers: [
			{text: "Procesado/a", correct: false},
			{text: "Ermitaño/a", correct: false},
			{text: "Refugiado/a", correct: true},
			{text: "Veraneante", correct: false},
		]
	},
	//12.152
	{
		question: "Según el Libro de Estilo de EITB, a la persona que es expulsada de su país y a la que se le prohíbe volver se le denomina…",
		answers: [
			{text: "Inmigrante", correct: false},
			{text: "Encausado/a", correct: false},
			{text: "Desarraigado/a", correct: false},
			{text: "Exiliado/a", correct: true},
		]
	},
	//12.153
	{
		question: "Según se recoge en el Libro de Estilo de EITB, Herri Urrats se refiere a una…",
		answers: [
			{text: "Fiesta en favor de las ikastolas de Iparralde", correct: true},
			{text: "Fiesta en favor de las ikastolas de Gipuzkoa", correct: false},
			{text: "Fiesta en favor de las ikastolas de Bizkaia", correct: false},
			{text: "Fiesta en favor del deporte", correct: false},
		]
	},
	//12.154
	{
		question: "Según el Libro de Estilo de EITB, la expresión “persona de color” puede ser utilizada para referirse a personas",
		answers: [
			{text: "De piel blanca", correct: false},
			{text: "De origen americano", correct: false},
			{text: "De origen asiático", correct: false},
			{text: "De piel negra, oscura o morena", correct: true},
		]
	},
	//12.155
	{
		question: "Según el Libro de Estilo de EITB, la “presunción de inocencia” es…",
		answers: [
			{text: "Un derecho", correct: true},
			{text: "Un delito", correct: false},
			{text: "Una obligación", correct: false},
			{text: "Un deber", correct: false},
		]
	},
	//12.156
	{
		question: "Según el Libro de Estilo de EITB, en relación a la “presunción de inocencia”, si las actuaciones judiciales están por empezar, hay que utilizar la expresión…",
		answers: [
			{text: "Procesado/a", correct: false},
			{text: "Autor confeso/a", correct: false},
			{text: "Supuesto/a autor/a", correct: true},
			{text: "Presunto/a autor/a", correct: false},
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
	nextButton.innerHTML = "Hurrengo Galdera";
	showQuestion ();
}

function showQuestion (){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if(answer.correct){
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}


function resetState(){
	nextButton.style.display = "none";
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e){
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if (isCorrect){
		selectedBtn.classList.add ("correct");
        score++;
	}else{
		selectedBtn.classList.add ("incorrect");
	}
    Array.from(answerButtons.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Zure nota ${score} / ${questions.length}!`;
    nextButton.innerHTML = "Proba berriro";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
            showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        StartQuiz();
    }
});

StartQuiz();