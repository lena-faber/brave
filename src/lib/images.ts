const BASE = "https://raw.githubusercontent.com/lena-faber/brave/main/assets/images";

export const img = (name: string) => `${BASE}/${name}`;

export const IMG = {
  brave: img("lena-faber-brave.jpg"),
  portrait11: img("lena-faber-11.jpeg"),
  moscow: img("lena-faber-moscow.jpeg"),
  model: img("lena-faber-model.jpg"),
  machuPicchu: img("lena-machu-picchu.jpg"),
  scotland: img("lena-scotland.jpg"),
  africaRun: img("lena-faber-run-africa.jpg"),
  islesboro: img("lena-faber-islesboro-crossing.jpg"),
  aircroft: img("lena-faber-aircroft.jpeg"),
  trailRun: img("lena-faber-trail-run.jpeg"),
  bike: img("lena-faber-bike.jpeg"),
  instructor: img("lena-faber-instructor.jpg"),
  carRace: img("lena-faber-car-race.jpeg"),
  books: img("lena-faber-books.jpg"),
  braveBook: img("brave-wild-curious-screenshot.jpg"),
  favicon: img("favicon-lena-faber.jpg"),
};

export const PRESS = [
  { name: "Fox TV", file: "fox-tv.jpg" },
  { name: "Kansas TV", file: "kansas-tv.jpg" },
  { name: "Daily Press", file: "dailypress.jpg" },
  { name: "Portland Leader", file: "portland-leader.jpg" },
  { name: "Portland Phoenix", file: "portland-phoenix.jpg" },
  { name: "The Forecaster", file: "the-forecaster.jpg" },
  { name: "Ski Magazine", file: "ski-mag.jpg" },
  { name: "Kormorant Newspaper", file: "kormorant-newspaper.jpg" },
].map((p) => ({ ...p, url: img(p.file) }));

export const TESTIMONIALS = [
  { name: "Casey", file: "casey.jpg" },
  { name: "Jane", file: "jane.jpg" },
  { name: "Michael", file: "michael.jpg" },
  { name: "Terence", file: "terence.jpg" },
  { name: "Belleville", file: "belleville.jpg" },
  { name: "Oconee", file: "oconee.jpg" },
  { name: "Alexandr Mihailov", file: "alexandr-mihailov.jpg" },
  { name: "Jury Apenchenko", file: "jury-apenchenko.jpg" },
  { name: "Voffka", file: "voffka.jpg" },
].map((t) => ({ ...t, url: img(t.file) }));
