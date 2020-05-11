import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
            "loading":"Loading...",
            "categories": "Categories",
            "login": "Login",
            "Start tracking your expenses": "Start tracking your expenses",
            "email":"Email",
            "password":"Password",
            "Sign In": "Sign In",
            "transaction":"transaction",
            "transactions":"Transactions",
            "no transactions":"Add your first transaction!",
            "balance": "Your balance",
            "income":"Income",
            "outcome":"Outcome",
            "history":"History",
            "current month":"Current month",
            "past month":"Past month",
            "expense":"Expense",
            "expense chart":"Expense Chart",
            "add transaction":"Add transaction",
            "help": "Income: Positive value / Expense: Negative value",
            "title": "Transaction title",
            "select category": "Select category",
            "amount":"Amount",
            "comments": "Comments",
            "add income":"Income",
            "add expense":"Expense",
            "createdAt":"Created",
            "settings page":"Settings",
            "settings description":"Customize your Expense Tracker",
            "categories page": "Categories",
            "categories description":"Manage your expenses and incomes categories.",
            "add category":"Create",
            "category name":"Category"
        }
      },
      es: {
        translations: {
            "loading":"Cargando...",
            "categories": "Categorías",
            "login": "Iniciar sesión",
            "Start tracking your expenses": "Ingresa tus datos",
            "email":"Email",
            "password":"Contraseña",
            "Sign In": "Comenzar",
            "transaction":"transacción",
            "no transactions":"¡Agrega tu primera transacción!",
            "transactions":"transacciones",
            "balance": "Tu balance",
            "income":"Ingreso",
            "outcome":"Gasto",
            "history":"Historia",
            "current month":"Mes en curso",
            "past month":"Mes anterior",
            "expense":"Expense",
            "expense chart":"Gráfico de gastos",
            "add transaction":"Agregar transación",
            "title": "Título transacción",
            "select category": "Seleccionar categoría",
            "amount":"Monto",
            "comments": "Comentarios",
            "add income":"Ingreso",
            "add expense":"Gasto",
            "help": "Ingreso: valor positivo / Gato: valor negativo",
            "createdAt":"Creado",
            "settings page":"Configuración",
            "settings description":"Personaliza tu Expense Tracker",
            "categories page": "Categorías",
            "categories description":"Gestiona las categorías de tus gastos e ingresos.",
            "add category":"Crear",
            "category name":"Categoría"
        }
      }
    },
    fallbackLng: "es",
    debug: false,
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
