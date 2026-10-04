export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  fullContent: string;
  fullContentEn: string;
  category: string;
  categoryEn: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-to-write-research-proposal",
    title: "איך לכתוב הצעת מחקר מנצחת",
    titleEn: "How to Write a Winning Research Proposal",
    excerpt: "הצעת מחקר היא אחד המסמכים החשובים ביותר בתהליך האקדמי שלך. במאמר זה נלמד איך לבנות הצעה שתתקבל.",
    excerptEn: "A research proposal is one of the most important documents in your academic journey. In this article, we'll learn how to build a proposal that gets accepted.",
    content: "הצעת מחקר טובה מתחילה בהגדרה ברורה של שאלת המחקר.",
    contentEn: "A good research proposal starts with a clear definition of the research question.",
    fullContent: `
      <h2>מהי הצעת מחקר?</h2>
      <p>הצעת מחקר היא מסמך שמתאר את התכנית המחקרית שלך. היא כוללת את שאלת המחקר, הרקע התיאורטי, המתודולוגיה והתרומה הצפויה של המחקר לתחום.</p>
      
      <h2>מבנה הצעת המחקר</h2>
      <p>הצעת מחקר טובה כוללת את המרכיבים הבאים:</p>
      <ul>
        <li><strong>כותרת:</strong> כותרת ברורה ותמציתית שמשקפת את נושא המחקר</li>
        <li><strong>תקציר:</strong> סיכום קצר של ההצעה כולה</li>
        <li><strong>רקע תיאורטי:</strong> סקירת ספרות רלוונטית והצגת הפער המחקרי</li>
        <li><strong>שאלות מחקר:</strong> ניסוח ברור של השאלות שהמחקר יענה עליהן</li>
        <li><strong>מתודולוגיה:</strong> תיאור שיטת המחקר, האוכלוסייה, הכלים והניתוח</li>
        <li><strong>לוח זמנים:</strong> תכנון ריאליסטי של שלבי המחקר</li>
        <li><strong>תקציב:</strong> פירוט העלויות הצפויות (במידת הצורך)</li>
      </ul>
      
      <h2>טיפים לכתיבה מוצלחת</h2>
      <p>כדי שההצעה שלך תתקבל, חשוב לזכור:</p>
      <ol>
        <li>להגדיר שאלת מחקר ממוקדת וברורה</li>
        <li>להראות היכרות עם הספרות הקיימת</li>
        <li>להסביר למה המחקר חשוב ומה התרומה שלו</li>
        <li>לבחור מתודולוגיה מתאימה ולנמק את הבחירה</li>
        <li>להיות ריאליסטיים לגבי לוח הזמנים והמשאבים</li>
      </ol>
      
      <h2>טעויות נפוצות שכדאי להימנע מהן</h2>
      <p>בהגשת הצעות מחקר, רבים נופלים בטעויות הבאות:</p>
      <ul>
        <li>שאלת מחקר רחבה מדי או לא ממוקדת</li>
        <li>חוסר היכרות עם הספרות הקיימת</li>
        <li>מתודולוגיה לא מתאימה לשאלות המחקר</li>
        <li>לוח זמנים לא ריאליסטי</li>
        <li>כתיבה לא ברורה או עמוסה מדי</li>
      </ul>
      
      <p>חשוב לזכור: הצעת מחקר טובה היא הבסיס למחקר מוצלח. שווה להשקיע בה את הזמן והמחשבה הנדרשים!</p>
    `,
    fullContentEn: `
      <h2>What is a Research Proposal?</h2>
      <p>A research proposal is a document that describes your research plan. It includes the research question, theoretical background, methodology, and the expected contribution of the research to the field.</p>
      
      <h2>Structure of a Research Proposal</h2>
      <p>A good research proposal includes the following components:</p>
      <ul>
        <li><strong>Title:</strong> A clear and concise title that reflects the research topic</li>
        <li><strong>Abstract:</strong> A brief summary of the entire proposal</li>
        <li><strong>Literature Review:</strong> Review of relevant literature and presentation of the research gap</li>
        <li><strong>Research Questions:</strong> Clear formulation of the questions the research will answer</li>
        <li><strong>Methodology:</strong> Description of the research method, population, tools, and analysis</li>
        <li><strong>Timeline:</strong> Realistic planning of research stages</li>
        <li><strong>Budget:</strong> Breakdown of expected costs (if applicable)</li>
      </ul>
      
      <h2>Tips for Successful Writing</h2>
      <p>To get your proposal accepted, remember:</p>
      <ol>
        <li>Define a focused and clear research question</li>
        <li>Show that you know the existing literature</li>
        <li>Explain why your research is important and what its contribution is</li>
        <li>Choose an appropriate methodology and justify your choice</li>
        <li>Be realistic about the timeline and resources</li>
      </ol>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>When submitting research proposals, many fall into these mistakes:</p>
      <ul>
        <li>Research question that is too broad or unfocused</li>
        <li>Lack of familiarity with existing literature</li>
        <li>Methodology not suitable for the research questions</li>
        <li>Unrealistic timeline</li>
        <li>Unclear or overly complex writing</li>
      </ul>
      
      <p>Remember: A good research proposal is the foundation for successful research. Invest the time and thought it requires!</p>
    `,
    category: "כתיבה אקדמית",
    categoryEn: "Academic Writing",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
  },
  {
    id: 2,
    slug: "dealing-with-writers-block",
    title: "התמודדות עם חסימת כותב",
    titleEn: "Dealing with Writer's Block",
    excerpt: "חסימת כותב היא תופעה נפוצה בקרב חוקרים וחוקרות. הנה כמה טיפים מעשיים להתמודדות.",
    excerptEn: "Writer's block is a common phenomenon among researchers. Here are some practical tips for dealing with it.",
    content: "חסימת כותב קורית לכולם. הדרך הטובה ביותר להתמודד איתה היא לכתוב משהו, גם אם זה לא מושלם.",
    contentEn: "Writer's block happens to everyone. The best way to deal with it is to write something, even if it's not perfect.",
    fullContent: `
      <h2>מה זו חסימת כותב?</h2>
      <p>חסימת כותב היא מצב שבו קשה להתחיל לכתוב או להמשיך בכתיבה. זו תופעה נורמלית שרוב הכותבים חווים בשלב כזה או אחר.</p>
      
      <h2>למה זה קורה?</h2>
      <p>יש כמה סיבות נפוצות לחסימת כותב:</p>
      <ul>
        <li>פרפקציוניזם - הרצון שהכל יהיה מושלם מהניסיון הראשון</li>
        <li>פחד מכישלון או מביקורת</li>
        <li>עומס רגשי או לחץ</li>
        <li>חוסר בהירות לגבי מה לכתוב</li>
        <li>עייפות או שחיקה</li>
      </ul>
      
      <h2>טכניקות להתגברות על חסימה</h2>
      <p>הנה כמה שיטות שעובדות:</p>
      <ol>
        <li><strong>כתיבה חופשית:</strong> לכתוב 10 דקות בלי לעצור, בלי לערוך. פשוט לתת למילים לזרום.</li>
        <li><strong>התחלה מהאמצע:</strong> לא חייבים להתחיל מההתחלה. אפשר להתחיל מהחלק שהכי קל.</li>
        <li><strong>טכניקת הפומודורו:</strong> לכתוב 25 דקות, הפסקה של 5 דקות, ולחזור על הסבב.</li>
        <li><strong>שינוי סביבה:</strong> לפעמים מעבר לבית קפה או לספרייה יכול לעזור.</li>
        <li><strong>דיבור לפני כתיבה:</strong> לספר למישהו (או לעצמך) מה רוצים לכתוב.</li>
      </ol>
      
      <h2>בניית הרגלי כתיבה</h2>
      <p>הדרך הטובה ביותר להתמודד עם חסימת כותב היא למנוע אותה:</p>
      <ul>
        <li>לקבוע זמן קבוע לכתיבה כל יום</li>
        <li>להתחיל עם יעדים קטנים (למשל 200 מילים ביום)</li>
        <li>לא לערוך בזמן הכתיבה - זה שלב נפרד</li>
        <li>לחגוג הישגים קטנים</li>
      </ul>
      
      <p>חשוב לזכור: כתיבה היא תהליך. לא כל יום יהיה פורה, וזה בסדר. המפתח הוא להמשיך לנסות.</p>
    `,
    fullContentEn: `
      <h2>What is Writer's Block?</h2>
      <p>Writer's block is a condition where it's difficult to start writing or continue writing. It's a normal phenomenon that most writers experience at some point.</p>
      
      <h2>Why Does It Happen?</h2>
      <p>There are several common reasons for writer's block:</p>
      <ul>
        <li>Perfectionism - wanting everything to be perfect from the first attempt</li>
        <li>Fear of failure or criticism</li>
        <li>Emotional overload or stress</li>
        <li>Lack of clarity about what to write</li>
        <li>Fatigue or burnout</li>
      </ul>
      
      <h2>Techniques for Overcoming Block</h2>
      <p>Here are some methods that work:</p>
      <ol>
        <li><strong>Free Writing:</strong> Write for 10 minutes without stopping, without editing. Just let the words flow.</li>
        <li><strong>Start from the Middle:</strong> You don't have to start from the beginning. Start with the part that's easiest for you.</li>
        <li><strong>Pomodoro Technique:</strong> Write for 25 minutes, take a 5-minute break. Repeat the cycle.</li>
        <li><strong>Change Environment:</strong> Sometimes moving to a coffee shop or library can help.</li>
        <li><strong>Talk Before Writing:</strong> Tell someone (or yourself) what you want to write.</li>
      </ol>
      
      <h2>Building Writing Habits</h2>
      <p>The best way to deal with writer's block is to prevent it:</p>
      <ul>
        <li>Set a fixed time for writing every day</li>
        <li>Start with small goals (e.g., 200 words a day)</li>
        <li>Don't edit while you're writing - that's a separate stage</li>
        <li>Celebrate small achievements</li>
      </ul>
      
      <p>Remember: Writing is a process. Not every day will be productive, and that's okay. The key is to keep trying.</p>
    `,
    category: "כתיבה אקדמית",
    categoryEn: "Academic Writing",
    image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80"
  },
  {
    id: 3,
    slug: "time-management-research",
    title: "ניהול זמן במחקר",
    titleEn: "Time Management in Research",
    excerpt: "ניהול זמן יעיל הוא המפתח להצלחה במחקר. למדי איך לתכנן את הזמן שלך בצורה חכמה.",
    excerptEn: "Effective time management is the key to research success. Learn how to plan your time wisely.",
    content: "תכנון זמן במחקר דורש גמישות ומשמעת.",
    contentEn: "Time planning in research requires flexibility and discipline.",
    fullContent: `
      <h2>האתגר של ניהול זמן במחקר</h2>
      <p>מחקר הוא פרויקט ארוך טווח עם הרבה אי-ודאות. בניגוד לעבודה רגילה, אין תמיד מבנה ברור ליום או לשבוע, ולפעמים קשה לדעת כמה זמן ייקח כל שלב.</p>
      
      <h2>עקרונות בסיסיים</h2>
      <ul>
        <li><strong>פרקי למשימות קטנות:</strong> במקום "לכתוב פרק", חלקי ל"לכתוב סקירת ספרות על נושא X"</li>
        <li><strong>קבעי דדליינים פנימיים:</strong> אל תחכי לדדליין הרשמי</li>
        <li><strong>השאירי מרווח:</strong> תמיד תכנני פחות ממה שאת חושבת שתוכלי</li>
        <li><strong>עבדי בבלוקים:</strong> 2-3 שעות של עבודה ממוקדת יעילות יותר מ-8 שעות מפוזרות</li>
      </ul>
      
      <h2>כלים מומלצים</h2>
      <p>כמה כלים שיכולים לעזור:</p>
      <ol>
        <li><strong>לוח שנה דיגיטלי:</strong> Google Calendar או Outlook לתכנון פגישות וזמני כתיבה</li>
        <li><strong>מנהל משימות:</strong> Todoist, Notion או אפילו רשימה פשוטה</li>
        <li><strong>טיימר:</strong> לעבודה בטכניקת פומודורו</li>
        <li><strong>גאנט צ'ארט:</strong> לתכנון ארוך טווח של שלבי המחקר</li>
      </ol>
      
      <h2>התמודדות עם הסחות דעת</h2>
      <p>הנה כמה טיפים:</p>
      <ul>
        <li>כבי התראות בזמן כתיבה</li>
        <li>השתמשי באפליקציות חסימה כמו Freedom או Cold Turkey</li>
        <li>עבדי במקום שקט או עם אוזניות</li>
        <li>הגדירי "שעות עבודה" ברורות לעצמך</li>
      </ul>
      
      <p>זכרי: ניהול זמן טוב לא אומר לעבוד יותר - אלא לעבוד חכם יותר!</p>
    `,
    fullContentEn: `
      <h2>The Challenge of Time Management in Research</h2>
      <p>Research is a long-term project with a lot of uncertainty. Unlike regular work, there isn't always a clear structure for the day or week, and sometimes it's hard to know how long each stage will take.</p>
      
      <h2>Basic Principles</h2>
      <ul>
        <li><strong>Break into Small Tasks:</strong> Instead of "write a chapter," divide into "write literature review on topic X"</li>
        <li><strong>Set Internal Deadlines:</strong> Don't wait for the official deadline</li>
        <li><strong>Leave Buffer:</strong> Always plan for less than you think you can do</li>
        <li><strong>Work in Blocks:</strong> 2-3 hours of focused work is more efficient than 8 scattered hours</li>
      </ul>
      
      <h2>Recommended Tools</h2>
      <p>Some tools that can help:</p>
      <ol>
        <li><strong>Digital Calendar:</strong> Google Calendar or Outlook for planning meetings and writing times</li>
        <li><strong>Task Manager:</strong> Todoist, Notion, or even a simple list</li>
        <li><strong>Timer:</strong> For working with the Pomodoro technique</li>
        <li><strong>Gantt Chart:</strong> For long-term planning of research stages</li>
      </ol>
      
      <h2>Dealing with Distractions</h2>
      <p>Here are some tips:</p>
      <ul>
        <li>Turn off notifications while writing</li>
        <li>Use blocking apps like Freedom or Cold Turkey</li>
        <li>Work in a quiet place or with headphones</li>
        <li>Set clear "work hours" for yourself</li>
      </ul>
      
      <p>Remember: Good time management doesn't mean working more - it means working smarter!</p>
    `,
    category: "ניהול מחקר",
    categoryEn: "Research Management",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80"
  },
  {
    id: 4,
    slug: "choosing-supervisor",
    title: "איך לבחור מנחה מתאים",
    titleEn: "How to Choose the Right Supervisor",
    excerpt: "בחירת מנחה היא החלטה קריטית. הנה השאלות שכדאי לשאול לפני שמתחייבים.",
    excerptEn: "Choosing a supervisor is a critical decision. Here are the questions to ask before committing.",
    content: "מנחה טוב הוא לא רק מומחה בתחום, אלא גם מישהו שמתאים לסגנון העבודה שלך.",
    contentEn: "A good supervisor is not just an expert in the field, but also someone who fits your work style.",
    fullContent: `
      <h2>למה בחירת המנחה כל כך חשובה?</h2>
      <p>המנחה שלך הוא השותף המרכזי שלך בתהליך האקדמי. הקשר הזה ישפיע על החוויה שלך, על קצב ההתקדמות, ולעיתים גם על הקריירה העתידית שלך.</p>
      
      <h2>מה לבדוק לפני שבוחרים</h2>
      <ul>
        <li><strong>התמחות:</strong> האם המנחה מתמחה בנושא שמעניין אותך?</li>
        <li><strong>זמינות:</strong> כמה סטודנטים וסטודנטיות יש לו כרגע? כמה זמן הוא מקדיש להנחיה?</li>
        <li><strong>סגנון הנחיה:</strong> האם הוא מעדיף מפגשים תכופים או עצמאות? ביקורת ישירה או עדינה?</li>
        <li><strong>רקורד:</strong> כמה אנשים סיימו תחתיו בהצלחה? בכמה זמן?</li>
        <li><strong>יחסים:</strong> מה אומרים אנשים שעבדו איתו בעבר על הקשר איתו?</li>
      </ul>
      
      <h2>שאלות לשאול בפגישת היכרות</h2>
      <ol>
        <li>מהן הציפיות שלך מסטודנט/ית מחקר?</li>
        <li>באיזו תדירות אנחנו נפגשים?</li>
        <li>איך אתה נותן משוב על כתיבה?</li>
        <li>מה לדעתך לוח הזמנים הריאליסטי לסיום?</li>
        <li>האם יש מימון או הזדמנויות לפרסום?</li>
      </ol>
      
      <h2>סימנים לבעיה פוטנציאלית</h2>
      <p>כדאי לשים לב לדגלים אדומים:</p>
      <ul>
        <li>קשה מאוד לתפוס אותו לפגישות</li>
        <li>אנשים שעבדו איתו בעבר נשמעים לא מרוצים</li>
        <li>הוא לא מכבד את הזמן שלך</li>
        <li>הוא לא נותן משוב בונה</li>
        <li>יש חוסר התאמה בציפיות</li>
      </ul>
      
      <p>אין לחשוש לבקש פגישת היכרות לפני ההתחייבות. זו החלטה חשובה שתשפיע על שנים קדימה!</p>
    `,
    fullContentEn: `
      <h2>Why is Choosing a Supervisor So Important?</h2>
      <p>Your supervisor is your main partner in the academic journey. This relationship will affect your experience, pace of progress, and sometimes even your future career.</p>
      
      <h2>What to Check Before Choosing</h2>
      <ul>
        <li><strong>Expertise:</strong> Does the supervisor specialize in a topic that interests you?</li>
        <li><strong>Availability:</strong> How many students does he have now? How much time does he dedicate to supervision?</li>
        <li><strong>Supervision Style:</strong> Does he prefer frequent meetings or independence? Direct or gentle criticism?</li>
        <li><strong>Track Record:</strong> How many students have completed successfully under him? In how much time?</li>
        <li><strong>Relationships:</strong> What do previous students say about the relationship with him?</li>
      </ul>
      
      <h2>Questions to Ask in an Introductory Meeting</h2>
      <ol>
        <li>What are your expectations from a research student?</li>
        <li>How often will we meet?</li>
        <li>How do you give feedback on writing?</li>
        <li>What do you think is the realistic timeline for completion?</li>
        <li>Is there funding or publication opportunities?</li>
      </ol>
      
      <h2>Signs of a Potential Problem</h2>
      <p>Pay attention to red flags:</p>
      <ul>
        <li>Very hard to catch him for meetings</li>
        <li>Previous students sound dissatisfied</li>
        <li>He doesn't respect your time</li>
        <li>He doesn't give constructive feedback</li>
        <li>There's a mismatch in expectations</li>
      </ul>
      
      <p>Don't be shy to ask for an introductory meeting before committing. This is an important decision that will affect years ahead!</p>
    `,
    category: "ניהול מחקר",
    categoryEn: "Research Management",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    id: 5,
    slug: "living-abroad-academic-journey",
    title: "מעבר וחיים בחו״ל במסגרת המסע האקדמי",
    titleEn: "Moving and Living Abroad in Your Academic Journey",
    excerpt: "מעבר לחו״ל לצורך לימודים או מחקר הוא הרפתקה מרגשת אך גם מאתגרת. הנה מה שחשוב לדעת.",
    excerptEn: "Moving abroad for studies or research is an exciting but challenging adventure. Here's what you need to know.",
    content: "חיים בחו״ל פותחים דלתות להזדמנויות אקדמיות ייחודיות, אך גם מביאים אתגרים.",
    contentEn: "Living abroad opens doors to unique academic opportunities but also brings challenges.",
    fullContent: `
      <h2>למה לשקול מעבר לחו״ל?</h2>
      <p>חוויה אקדמית בינלאומית יכולה להעשיר את הקריירה שלך בכמה דרכים:</p>
      <ul>
        <li>חשיפה לשיטות מחקר ונקודות מבט חדשות</li>
        <li>בניית רשת קשרים בינלאומית</li>
        <li>גישה למעבדות, ספריות ומשאבים ייחודיים</li>
        <li>שיפור שליטה בשפה זרה</li>
        <li>צמיחה אישית וגמישות</li>
      </ul>
      
      <h2>ההיבט הפרקטי</h2>
      <p>לפני שמתחילים, יש כמה דברים לסדר:</p>
      <ol>
        <li><strong>ויזה:</strong> בדקי מוקדם מה סוג הויזה שאת צריכה ומה התהליך</li>
        <li><strong>מימון:</strong> חפשי מלגות ומענקים לסטודנטים בינלאומיים</li>
        <li><strong>ביטוח בריאות:</strong> ודאי שיש לך כיסוי מתאים</li>
        <li><strong>דיור:</strong> התחילי לחפש מוקדם - השוק יכול להיות תחרותי</li>
        <li><strong>בנקאות:</strong> פתחי חשבון מקומי אם צריך</li>
      </ol>
      
      <h2>התאקלמות רגשית</h2>
      <p>המעבר יכול להיות מאתגר רגשית:</p>
      <ul>
        <li><strong>הלם תרבותי:</strong> זה נורמלי להרגיש מבולבלת בהתחלה</li>
        <li><strong>געגועים:</strong> שמרי על קשר עם המשפחה והחברים</li>
        <li><strong>בדידות:</strong> השקיעי בבניית חברויות חדשות</li>
        <li><strong>שגרה חדשה:</strong> ייקח זמן להתרגל לקצב החדש</li>
      </ul>
      
      <h2>טיפים להצלחה</h2>
      <ol>
        <li>היי פתוחה לחוויות חדשות</li>
        <li>למדי על התרבות המקומית לפני ובמהלך השהות</li>
        <li>מצאי קהילה של ישראליים או סטודנטים בינלאומיים</li>
        <li>שמרי על קשר עם המנחה והמוסד בארץ</li>
        <li>תעדי את החוויה - זה יהיה שווה בעתיד</li>
      </ol>
      
      <h2>החזרה הביתה</h2>
      <p>אל תשכחי לתכנן גם את החזרה:</p>
      <ul>
        <li>שמרי על קשרים שיצרת בחו״ל</li>
        <li>חשבי איך לשלב את מה שלמדת במחקר שלך</li>
        <li>היי מוכנה ל"הלם תרבותי הפוך" - גם החזרה יכולה להיות מאתגרת</li>
      </ul>
      
      <p>מעבר לחו״ל הוא אחד ההרפתקות הגדולות שיכולות להיות בתהליך האקדמי. עם תכנון נכון, זו יכולה להיות חוויה שתעצב את הקריירה והחיים שלך!</p>
    `,
    fullContentEn: `
      <h2>Why Consider Moving Abroad?</h2>
      <p>An international academic experience can enrich your career in several ways:</p>
      <ul>
        <li>Exposure to new research methods and perspectives</li>
        <li>Building an international network</li>
        <li>Access to unique laboratories, libraries, and resources</li>
        <li>Improving foreign language proficiency</li>
        <li>Personal growth and flexibility</li>
      </ul>
      
      <h2>The Practical Aspect</h2>
      <p>Before starting, there are a few things to arrange:</p>
      <ol>
        <li><strong>Visa:</strong> Check early what type of visa you need and what the process is</li>
        <li><strong>Funding:</strong> Look for scholarships and grants for international students</li>
        <li><strong>Health Insurance:</strong> Make sure you have adequate coverage</li>
        <li><strong>Housing:</strong> Start looking early - the market can be competitive</li>
        <li><strong>Banking:</strong> Open a local account if needed</li>
      </ol>
      
      <h2>Emotional Adjustment</h2>
      <p>The move can be emotionally challenging:</p>
      <ul>
        <li><strong>Culture Shock:</strong> It's normal to feel confused at first</li>
        <li><strong>Homesickness:</strong> Stay in touch with family and friends</li>
        <li><strong>Loneliness:</strong> Invest in building new friendships</li>
        <li><strong>New Routine:</strong> It will take time to get used to the new pace</li>
      </ul>
      
      <h2>Tips for Success</h2>
      <ol>
        <li>Be open to new experiences</li>
        <li>Learn about local culture before and during your stay</li>
        <li>Find a community of compatriots or international students</li>
        <li>Stay in touch with your supervisor and institution at home</li>
        <li>Document the experience - it will be worth it in the future</li>
      </ol>
      
      <h2>Coming Home</h2>
      <p>Don't forget to plan for your return:</p>
      <ul>
        <li>Maintain relationships you made abroad</li>
        <li>Think about how to integrate what you learned into your research</li>
        <li>Be prepared for "reverse culture shock" - returning can also be challenging</li>
      </ul>
      
      <p>Moving abroad is one of the greatest adventures in the academic journey. With proper planning, it can be an experience that shapes your career and life!</p>
    `,
    category: "חיים אקדמיים",
    categoryEn: "Academic Life",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
  },
  {
    id: 6,
    slug: "reading-scientific-papers-effectively",
    title: "איך לקרוא מאמרים מדעיים ביעילות",
    titleEn: "How to Read Scientific Papers Effectively",
    excerpt: "קריאת מאמרים אקדמיים היא מיומנות שאפשר לפתח. הנה שיטות שיחסכו לך שעות רבות.",
    excerptEn: "Reading academic papers is a skill you can develop. Here are methods that will save you many hours.",
    content: "קריאה יעילה של מאמרים מדעיים היא מפתח להצלחה במחקר.",
    contentEn: "Effective reading of scientific papers is key to research success.",
    fullContent: `
      <h2>למה קריאה יעילה חשובה?</h2>
      <p>במהלך מחקר תצטרכו לקרוא עשרות ואפילו מאות מאמרים. קריאה לא יעילה יכולה לבזבז שעות יקרות.</p>
      <h2>גישת הסינון הראשוני</h2>
      <p>לפני שקוראים מאמר לעומק, עשו סינון מהיר: כותרת, תקציר, גרפים ומסקנות.</p>
      <p>זכרו: המטרה היא להפיק את המקסימום מכל מאמר!</p>
    `,
    fullContentEn: `
      <h2>Why is Effective Reading Important?</h2>
      <p>During research, you'll need to read dozens or even hundreds of papers.</p>
      <p>Remember: The goal is to get the maximum from each paper you read!</p>
    `,
    category: "מיומנויות מחקר",
    categoryEn: "Research Skills",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
  },
  {
    id: 7,
    slug: "handling-feedback-criticism",
    title: "איך להתמודד עם ביקורת ומשוב על העבודה",
    titleEn: "How to Handle Feedback and Criticism on Your Work",
    excerpt: "קבלת משוב היא חלק בלתי נפרד מהתהליך האקדמי. הנה איך להפוך ביקורת להזדמנות לצמיחה.",
    excerptEn: "Receiving feedback is an integral part of the academic process.",
    content: "משוב הוא כלי חיוני לשיפור העבודה המחקרית.",
    contentEn: "Feedback is an essential tool for improving research work.",
    fullContent: `
      <h2>למה משוב מרגיש קשה?</h2>
      <p>עבודה מחקרית היא אישית מאוד. כשמישהו מבקר אותה, קל להרגיש שזו ביקורת עלינו.</p>
      <p>זכרו: גם החוקרים הטובים ביותר מקבלים משוב ביקורתי!</p>
    `,
    fullContentEn: `
      <h2>Why Does Feedback Feel Hard?</h2>
      <p>Research work is very personal. When someone criticizes it, it's easy to feel like it's criticism of us.</p>
      <p>Remember: Even the best researchers receive critical feedback!</p>
    `,
    category: "צמיחה אישית",
    categoryEn: "Personal Growth",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
  },
  {
    id: 8,
    slug: "staying-motivated-during-research",
    title: "איך לשמור על מוטיבציה לאורך המחקר",
    titleEn: "How to Stay Motivated Throughout Your Research",
    excerpt: "מחקר הוא מרתון, לא ספרינט. הנה טיפים לשמירה על המוטיבציה גם בזמנים קשים.",
    excerptEn: "Research is a marathon, not a sprint.",
    content: "שמירה על מוטיבציה היא אחד האתגרים הגדולים במחקר ארוך טווח.",
    contentEn: "Maintaining motivation is one of the biggest challenges in long-term research.",
    fullContent: `
      <h2>למה המוטיבציה נעלמת?</h2>
      <p>מחקר הוא פרויקט ארוך עם הרבה אי-ודאות. זה נורמלי שהמוטיבציה עולה ויורדת.</p>
      <p>זכרו: כולם עוברים רגעים קשים במחקר. זה חלק מהתהליך!</p>
    `,
    fullContentEn: `
      <h2>Why Does Motivation Disappear?</h2>
      <p>Research is a long project with a lot of uncertainty. It's normal for motivation to rise and fall.</p>
      <p>Remember: Everyone goes through hard moments in research. It's part of the process!</p>
    `,
    category: "צמיחה אישית",
    categoryEn: "Personal Growth",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
  }
];
