const questions = [
		
	//71
	{
		question: "LA CONSTITUCIÓN REGULA LA AUTONOMÍA DEL MUNICIPIO EN SU ARTÍCULO:",
		answers: [
			{text: "a) 130.", correct: false},
			{text: "b) 140.", correct: true},
			{text: "c) 143.", correct: false},
			{text: "d) 149.", correct: false},
		]
	},

	//72
	{
		question: "LA ENTIDAD BÁSICA DE LA ORGANIZACIÓN TERRITORIAL DEL ESTADO ES:",
		answers: [
			{text: "a) La Comunidad Autónoma.", correct: false},
			{text: "b) La región.", correct: false},
			{text: "c) La provincia.", correct: false},
			{text: "d) El municipio.", correct: true},
		]
	},

	//73
	{
		question: "NO ES UN ELEMENTO DEL MUNICIPIO:",
		answers: [
			{text: "a) El territorio.", correct: false},
			{text: "b) La población.", correct: false},
			{text: "c) El ayuntamiento.", correct: true},
			{text: "d) La organización.", correct: false},
		]
	},

	//74
	{
		question: "¿QUIENES FORMAN LA POBLACIÓN DE UN MUNICIPIO?",
		answers: [
			{text: "a) Los inscritos y los no inscritos en el Padrón municipal.", correct: false},
			{text: "b) Los inscritos en el Padrón municipal.", correct: true},
			{text: "c) Los domiciliados, los transeúntes y los extranjeros.", correct: false},
			{text: "d) Los inscritos en el Padrón municipal que sean mayores de edad.", correct: false},
		]
	},

	//75
	{
		question: "QUIEN RESIDA EN VARIOS MUNICIPIOS DEBE INSCRIBIRSE EN EL PADRÓN MUNICIPAL:",
		answers: [
			{text: "a) Del municipio en el que tenga su residencia habitual.", correct: false},
			{text: "b) Del municipio en el que resida mayor tiempo al año.", correct: true},
			{text: "c) De cualquiera de ellos.", correct: false},
			{text: "d) No existe obligación de inscribirse en ninguno de ellos.", correct: false},
		]
	},

	//76
	{
		question: "LAS PERSONAS TITULARES DEL ÓRGANO U ÓRGANOS CON FUNCIONES DE PRESUPUESTACIÓN, CONTABILIDAD, TESORERÍA Y RECAUDACIÓN DEBERÁN PERTENECER A CUERPOS FUNCIONARIALES CON HABILITACIÓN DE CARÁCTER NACIONAL SALVO PARA LAS FUNCIONES DE:",
		answers: [
			{text: "a) Recaudación.", correct: false},
			{text: "b) Tesorería.", correct: false},
			{text: "c) Presupuestación.", correct: true},
			{text: "d) Contabilidad y recaudación.", correct: false},
		]
	},

	//77
	{
		question: "SEGÚN EL ARTÍCULO 19 DE LA LEY DE BASES DE RÉGIMEN LOCAL, EL GOBIERNO Y LA ADMINISTRACIÓN MUNICIPAL CORRESPONDE AL AYUNTAMIENTO INTEGRADO POR:",
		answers: [
			{text: "a) El Alcalde y los Concejales.", correct: true},
			{text: "b) El Alcalde, los Tenientes de Alcalde, los Concejales y la Junta de Gobierno Local.", correct: false},
			{text: "c) El Alcalde, los Tenientes de Alcalde, los Concejales y la Junta de Gobierno Local.", correct: false},
			{text: "d) El Alcalde, los Concejales, la Junta de Gobierno Local y el Pleno.", correct: false},
		]
	},

	//78
	{
		question: "LA JUNTA DE GOBIERNO LOCAL EXISTE EN TODOS LOS MUNICIPIOS CON POBLACIÓN SUPERIOR A 5.000 HABITANTES Y EN LOS DE MENOS:",
		answers: [
			{text: "a) Cuando así lo disponga la Constitución.", correct: false},
			{text: "b) Cuando así lo disponga el Estatuto de Autonomía.", correct: false},
			{text: "c) Cuando así lo disponga su Reglamento Orgánico o así lo acuerde el Pleno de su ayuntamiento.", correct: true},
			{text: "d) Cuando así lo disponga la Ley de Bases de Régimen Local.", correct: false},
		]
	},

	//79
	{
		question: "LOS ÓRGANOS DE LOS AYUNTAMIENTOS SE CLASIFICAN EN:",
		answers: [
			{text: "a) Ordinarios y extraordinarios.", correct: false},
			{text: "b) Ordinarios y especiales.", correct: false},
			{text: "c) Obligatorios y necesarios.", correct: false},
			{text: "d) Complementarios y necesarios.", correct: true},
		]
	},

	//80
	{
		question: "EL ALCALDE ES ELEGIDO POR:",
		answers: [
			{text: "a) Los Concejales o por los vecinos; todo ello en los términos que establezca la legislación electoral general.", correct: true},
			{text: "b) Mayoría absoluta.", correct: false},
			{text: "c) Todos los Concejales.", correct: false},
			{text: "d) Todos los vecinos que tengan derecho de sufragio pasivo.", correct: false},
		]
	},

	//81
	{
		question: "EL ALCALDE ES EL PRESIDENTE DE LA CORPORACIÓN Y OSTENTA LAS SIGUIENTES ATRIBUCIONES:",
		answers: [
			{text: "a) Dirigir el gobierno y la administración municipal.", correct: false},
			{text: "b) Dictar bandos.", correct: false},
			{text: "c) Ejercer la jefatura de la Policía Municipal.", correct: false},
			{text: "d) Todas las respuestas son correctas.", correct: true},
		]
	},

	//82
	{
		question: "SEGÚN LA LEY DE BASES DE RÉGIMEN LOCAL, DIGA ¿CUÁL DE LAS SIGUIENTES ATRIBUCIONES CORRESPONDE AL PLENO DEL AYUNTAMIENTO?:",
		answers: [
			{text: "a) Dirigir, inspeccionar e impulsar los servicios y obras municipales.", correct: false},
			{text: "b) Nombrar a los Tenientes de Alcalde.", correct: false},
			{text: "c) La aprobación del Reglamento Orgánico y de las ordenanzas.", correct: true},
			{text: "d) Todas las respuestas anteriores son falsas.", correct: false},
		]
	},

	//83
	{
		question: "SEGÚN LA LEY DE BASES DE RÉGIMEN LOCAL, EN LOS MUNICIPIOS CON POBLACIÓN SUPERIOR A 5.000 HABITANTES E INFERIOR A 20.000 HABITANTES, SE DEBERÁN PRESTAR ADEMÁS LOS SIGUIENTES SERVICIOS:",
		answers: [
			{text: "a) Alumbrado público, cementerio, recogida de residuos y limpieza viaria.", correct: false},
			{text: "b) Parque público, biblioteca pública, y tratamiento de residuos.", correct: true},
			{text: "c) Alumbrado público, cementerio, biblioteca y limpieza viaria.", correct: false},
			{text: "d) Alumbrado público, parque público, biblioteca pública y limpieza viaria.", correct: false},
		]
	},

	//84
	{
		question: "FUNCIONAN EN RÉGIMEN ESPECIAL DE CONCEJO ABIERTO:",
		answers: [
			{text: "a) Los municipios que tradicional y voluntariamente cuenten con ese singular régimen de gobierno y administración.", correct: true},
			{text: "b) Los municipios con menos de 200 habitantes.", correct: false},
			{text: "c) Los municipios con menos de 300 habitantes.", correct: false},
			{text: "d) Los municipios con menos de 500 habitantes.", correct: false},
		]
	},

	//85
	{
		question: "SEGÚN LA LEY DE BASES DE RÉGIMEN LOCAL, LA JUNTA DE GOBIERNO LOCAL SE INTEGRA POR EL ALCALDE Y UN NÚMERO DE CONCEJALES:",
		answers: [
			{text: "a) No superior a dos tercios del número legal de los mismos.", correct: false},
			{text: "b) No superior a la mitad del número legal de los mismos.", correct: false},
			{text: "c) No superior al tercio del número legal de los mismos.", correct: true},
			{text: "d) Ninguna de las respuestas anteriores es correcta.", correct: false},
		]
	},

	//86
	{
		question: "SEGÚN LA LEY DE BASES DE RÉGIMEN LOCAL, EL RÉGIMEN DE ORGANIZACIÓN DE LOS MUNICIPIOS DE GRAN POBLACIÓN SERÁ APLICABLE:",
		answers: [
			{text: "a) A los municipios cuya población supere los 50.000 habitantes.", correct: false},
			{text: "b) A los municipios cuya población supere los 150.000 habitantes.", correct: false},
			{text: "c) A los municipios que sean capitales de provincia, capitales autonómicas o sedes de las instituciones autonómicas cuando así lo decidan las Asambleas Legislativas correspondientes a iniciativa de los respectivos Ayuntamientos.", correct: true},
			{text: "d) A los municipios cuya población supere los 75.000 habitantes.", correct: false},
		]
	},

	//87
	{
		question: "SEGÚN EL ARTÍCULO 121.3 DE LA LEY DE BASES DE RÉGIMEN LOCAL, LOS MUNICIPIOS A LOS QUE RESULTE DE APLICACIÓN EL RÉGIMEN PREVISTO EN ESTE TÍTULO:",
		answers: [
			{text: "a) No continuarán rigiéndose por el mismo cuando su cifra oficial de población se reduzca posteriormente por debajo del límite establecido en esta Ley.", correct: false},
			{text: "b) Sólo continuarán rigiéndose por el mismo cuando haya un acuerdo del Pleno.", correct: false},
			{text: "c) Continuarán rigiéndose por el mismo aun cuando su cifra oficial de población se reduzca posteriormente por debajo del límite establecido en esta Ley.", correct: true},
			{text: "d) Ninguna de las respuestas anteriores es correcta.", correct: false},
		]
	},

	//88
	{
		question: "SEGÚN LA LEY BÁSICA DE RÉGIMEN LOCAL, EN LOS MUNICIPIOS DE GRAN POBLACIÓN CORRESPONDE A LA JUNTA DE GOBIERNO LOCAL:",
		answers: [
			{text: "a) La aprobación de los proyectos de ordenanzas y de los reglamentos, incluidos los orgánicos, con excepción de las normas reguladoras del Pleno y sus comisiones.", correct: true},
			{text: "b) Dirigir la política, el gobierno y la administración municipal.", correct: false},
			{text: "c) La aprobación y modificación de los reglamentos de naturaleza orgánica.", correct: false},
			{text: "d) Los acuerdos relativos a la participación en organizaciones supramunicipales.", correct: false},
		]
	},

	//89
	{
		question: "EN LOS MUNICIPIOS DE GRAN POBLACIÓN SON ÓRGANOS SUPERIORES:",
		answers: [
			{text: "a) El Alcalde, Los Tenientes de Alcalde, los Concejales y el Pleno.", correct: false},
			{text: "b) El Alcalde y los miembros de la Junta de Gobierno Local.", correct: true},
			{text: "c) El Alcalde, los Concejales y el Secretario general del Pleno.", correct: false},
			{text: "d) El Alcalde, los Concejales, el Secretario general del Pleno y el Interventor general municipal.", correct: false},
		]
	},

	//90
	{
		question: "SEGÚN LA LEY DE BASES DE RÉGIMEN LOCAL, EN LOS MUNICIPIOS DE GRAN POBLACIÓN PARA LA DEFENSA DE LOS DERECHCOS DE LOS VECINOS ANTE LA ADMINISTRACIÓN MUNICIPAL EL PLENO CREARÁ:",
		answers: [
			{text: "a) Un órgano de gestión tributaria.", correct: false},
			{text: "b) Una Comisión especial de Sugerencias y Reclamaciones.", correct: true},
			{text: "c) Un órgano de gestión económico-financiera que dará cuenta al Pleno mediante un informe anual.", correct: false},
			{text: "d) Un órgano especial para la resolución de las reclamaciones económico-administrativas.", correct: false},
		]
	},

	//91
	{
		question: "LA DETERMINACIÓN DE LOS RECURSOS PROPIOS DE CARÁCTER TRIBUTARIO ES COMPETENCIA PROPIA DE:",
		answers: [
			{text: "a) El Alcalde.", correct: false},
			{text: "b) El Concejal Delegado.", correct: false},
			{text: "c) El Pleno.", correct: true},
			{text: "d) La Junta de Gobierno Local.", correct: false},
		]
	},

	//92
	{
		question: "INDIQUE LA RESPUESTA INCORRECTA. SEGÚN EL ARTÍCULO 133 DE LA LEY DE BASES DE RÉGIMEN LOCAL, LA GESTIÓN ECONÓMICO-FINANCIERA SE AJUSTARÁ A LOS SIGUIENTES CRITERIOS:",
		answers: [
			{text: "a) Se excluye la exigencia del seguimiento de los costes de los servicios.", correct: true},
			{text: "b) La contabilidad se ajustará en todo caso a las previsiones que en esta materia contiene la Ley de las Haciendas Locales.", correct: false},
			{text: "c) Cumplimiento del objetivo de estabilidad presupuestaria de acuerdo con lo dispuesto en la legislación que lo regule.", correct: false},
			{text: "d) Separación de las funciones de contabilidad y de fiscalización de la gestión económico- financiera.", correct: false},
		]
	},

	//93
	{
		question: "SEGÚN EL ARTÍCULO 128 DE LA LEY DE BASES DE RÉGIMEN LOCAL, LA PRESIDENCIA DEL DISTRITO CORRESPONDERÁ EN TODO CASO:",
		answers: [
			{text: "a) Al Alcalde o a la Alcaldesa.", correct: false},
			{text: "b) A la Junta de Gobierno Local.", correct: false},
			{text: "c) Al Pleno.", correct: false},
			{text: "d) A un Concejal o a una Concejala.", correct: true},
		]
	},

	//94
	{
		question: "EL CONSEJO SOCIAL DE LA CIUDAD ESTÁ INTEGRADO POR:",
		answers: [
			{text: "a) Representantes de las organizaciones empresariales, deportivas, académicas y de vecinos más representativas.", correct: false},
			{text: "b) Representantes de las organizaciones económicas, sociales, profesionales y de vecinos más representativas.", correct: true},
			{text: "c) Representantes de las organizaciones empresariales, sindicales, académicas y de vecinos más representativas.", correct: false},
			{text: "d) Ninguna de las respuestas es correcta.", correct: false},
		]
	},

	//95
	{
		question: "EL TITULAR DE LA ASESORÍA JURÍDICA SERÁ NOMBRADO Y SEPARADO POR:",
		answers: [
			{text: "a) El Alcalde.", correct: false},
			{text: "b) El Pleno.", correct: false},
			{text: "c) La Junta de Gobierno Local.", correct: true},
			{text: "d) Ninguna de las respuestas es correcta.", correct: false},
		]
	},

	//96
	{
		question: "EL PLENO, FORMADO POR EL ALCALDE Y LOS CONCEJALES, ES:",
		answers: [
			{text: "a) El órgano de máxima representación política de los ciudadanos en el gobierno municipal.", correct: false},
			{text: "b) El órgano que será convocado y presidido por el Alcalde, salvo en los supuestos previstos en esta Ley y en la legislación electoral general.", correct: false},
			{text: "c) Podrá dotarse de su propio reglamento, que tendrá la naturaleza de orgánico.", correct: false},
			{text: "d) Todas las respuestas anteriores son correctas.", correct: true},
		]
	},

	//97
	{
		question: "ESTABLECER EL RÉGIMEN RETRIBUTIVO DE LOS MIEMBROS DEL PLENO, DE SU SECRETARIO GENERAL, DEL ALCALDE, DE LOS MIEMBROS DE LA JUNTA DE GOBIERNO LOCAL Y DE LOS ÓRGANOS DIRECTIVOS MUNICIPALES, ES UNA COMPETENCIA ATRIBUIDA A:",
		answers: [
			{text: "a) Al Pleno.", correct: true},
			{text: "b) Al Alcalde.", correct: false},
			{text: "c) A la Junta de Gobierno Local.", correct: false},
			{text: "d) Al Órgano de gestión económico-financiera y presupuestaria.", correct: false},
		]
	},

	//98
	{
		question: "EL ALCALDE EN LOS MUNICIPIOS DE GRAN POBLACIÓN TENDRÁ EL TRATAMIENTO DE:",
		answers: [
			{text: "a) Excelentísimo.", correct: false},
			{text: "b) Excelencia.", correct: true},
			{text: "c) Ilustrísimo.", correct: false},
			{text: "d) Señoría.", correct: false},
		]
	},

	//99
	{
		question: "EL ALCALDE PODRÁ DELEGAR SUS COMPETENCIAS QUE PUEDAN SER OBJETO DE DELEGACIÓN MEDIANTE:",
		answers: [
			{text: "a) Decreto.", correct: true},
			{text: "b) Órdenes de servicio.", correct: false},
			{text: "c) Bandos.", correct: false},
			{text: "d) Decreto legislativo.", correct: false},
		]
	},

	//100
	{
		question: "LA SECRETARÍA DE LA JUNTA DE GOBIERNO LOCAL CORRESPONDERÁ A UNO DE SUS MIEMBROS QUE REÚNA LA CONDICIÓN DE CONCEJAL DESIGNADO POR:",
		answers: [
			{text: "a) El Pleno.", correct: false},
			{text: "b) El Alcalde.", correct: true},
			{text: "c) La Junta de Gobierno Local.", correct: false},
			{text: "d) El Secretario general del Pleno.", correct: false},
		]
	},

	//101
	{
		question: "INDIQUE CUAL DE LAS SIGUIENTES ATRIBUCIONES NO ES COMPETENCIA DE LA JUNTA DE GOBIERNO LOCAL:",
		answers: [
			{text: "a) Nombrar y cesar a los Tenientes de Alcalde y a los Presidentes de los Distritos.", correct: true},
			{text: "b) La aprobación del proyecto de presupuesto.", correct: false},
			{text: "c) La concesión de cualquier tipo de licencia.", correct: false},
			{text: "d) Aprobar la relación de puestos de trabajo.", correct: false},
		]
	},

	//102
	{
		question: "LAS FUNCIONES DE PRESUPUESTACIÓN, CONTABILIDAD, TESORERÍA Y RECAUDACIÓN SERÁN EJERCIDAS POR:",
		answers: [
			{text: "a) El Órgano de Gestión Tributaria.", correct: false},
			{text: "b) El Órgano responsable del control y de la fiscalización interna.", correct: false},
			{text: "c) El Órgano u órganos que se determine en el Reglamento orgánico municipal.", correct: true},
			{text: "d) El Órgano para la resolución de las reclamaciones económico-administrativas.", correct: false},
		]
	},

	//103
	{
		question: "INDIQUE CUÁL DE LAS SIGUIENTES COMPETENCIAS NO CORRESPONDE AL ÓRGANO DE GESTIÓN TRIBUTARIA:",
		answers: [
			{text: "a) La gestión, liquidación, inspección, recaudación y revisión de los actos tributarios municipales.", correct: false},
			{text: "b) El conocimiento y resolución de las reclamaciones sobre actos de gestión, liquidación, recaudación e inspección de tributos e ingresos de derecho público, que sean de competencia municipal.", correct: true},
			{text: "c) La recaudación en período ejecutivo de los demás ingresos de derecho público del ayuntamiento.", correct: false},
			{text: "d) La tramitación y resolución de los expedientes sancionadores tributarios relativos a los tributos cuya competencia gestora tenga atribuida.", correct: false},
		]
	},

	//104
	{
		question: "LOS MIEMBROS DEL ÓRGANO PARA LA RESOLUCIÓN DE LAS RECLAMACIONES ECONÓMICO-ADMINISTRATIVAS ESTARÁ CONSTITUIDO POR:",
		answers: [
			{text: "a) un número par de miembros, con un mínimo de cuatro designados por el Pleno.", correct: false},
			{text: "b) un número impar de miembros, con un mínimo de tres, designados por la Junta de Gobierno Local.", correct: false},
			{text: "c) un número impar de miembros, con un mínimo de tres, designados por el Pleno.", correct: true},
			{text: "d) un número impar de miembros, con un mínimo de cinco, designados por el Alcalde.", correct: false},
		]
	},

	//105
	{
		question: "FORMARÁN PARTE DE LA CONFERENCIA DE CIUDADES PREVISTA EN EL TÍTULO X RÉGIMEN DE ORGANIZACIÓN DE MUNICIPIOS DE GRAN POBLACIÓN:",
		answers: [
			{text: "a) La Administración General del Estado, las Comunidades Autónomas y los alcaldes de los municipios comprendidos en el ámbito de aplicación del título X de la Ley de Bases de Régimen Local.", correct: true},
			{text: "b) La Administración General del Estado, las Comunidades Autónomas, La Federación Española de municipios y provincias y los Alcaldes de los municipios de las principales capitales de provincia.", correct: false},
			{text: "c) Las Comunidades Autónomas, la Federación Española de municipios y provincias y los Alcaldes de los municipios de gran población.", correct: false},
			{text: "d) Ninguna de las respuestas es correcta.", correct: false},
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