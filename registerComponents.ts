import {
  InputText,
  Button,
  Select,
  DatePicker,
  Toast,
  Dialog,
  Column,
  Rating,
  Textarea,
  DataTable,
  Card,
  Tooltip,
} from "primevue";

export default function registerComponents(app) {
  app.component("Button", Button);
  app.component("InputText", InputText);
  app.component("DatePicker", DatePicker);
  app.component("Toast", Toast);
  app.component("Dialog", Dialog);
  app.component("Column", Column);
  app.component("Select", Select);
  app.component("Rating", Rating);
  app.component("Textarea", Textarea);
  app.component("DataTable", DataTable);
  app.component("Card", Card);

  app.directive("tooltip", Tooltip);
}
