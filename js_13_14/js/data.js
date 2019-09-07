var testObj = {
	header: "Насколько хорошо Вы знаете столицы мира ?",
	button: "Узнать результаты",
	wrong: "Попробуй ещё, есть ошибки",
	right: "Ты ответил правильно",
	data: [
		{question: "Назовите столицу Турции",
		answers: ["Анталия", "Мармарис", "Стамбул", "Анкара"],
		name: "turkey",
		check: [0,0,0,1]
		},
		{question: "Теперь найдите столицу Индонезии",
		answers: ["Джакарта", "Суматра", "Сулавеси", "Ява"],
		name: "indonesia",
		check: [1,0,0,0]
		},
		{question: "Что там со столицей Филиппин?",
		answers: ["Манила", "Себу", "Негрос", "Боракай"],
		name: "philippines",
		check: [1,0,0,0]
		},
		{question: "Перейдём к вопросам посложнее: назовите столицу Шри-Ланки",
		answers: ["Бентота", "Коломбо", "Шри-Джаявардена-Пура-Котте", "Коломбо"],
		name: "srilanka",
		check: [0,0,1,0]
		},
		{question: "Помните, какая столица у Марокко?",
		answers: ["Касабланка", "Марракеш", "Агадир", "Рабат"],
		name: "marocco",
		check: [0,0,0,1]
		}
	]
};

localStorage.setItem("testStr",JSON.stringify(testObj));