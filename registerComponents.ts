import {
  InputText,
  Button,
  Select,
  DatePicker,
  Listbox,
  Toast,
  Message,
  Dialog,
  DataView,
  Column,
  FloatLabel,
  Tag,
  Rating,
  Calendar,
  Textarea,
  DataTable,
  Card,
} from "primevue";
import { Form } from '@primevue/forms';


export default function registerComponents(app) {
  app.component("Button", Button);
  app.component("InputText", InputText);
  app.component("Listbox", Listbox);
  app.component("DatePicker", DatePicker);
  app.component("Toast", Toast);
  app.component("Message", Message);
  app.component("Form", Form);
  app.component("Dialog", Dialog);
  app.component("Column", Column);
  app.component("Select", Select);
  app.component("FloatLabel", FloatLabel);
  app.component("Rating", Rating);
  app.component("Calendar", Calendar);
  app.component("Textarea", Textarea);
  app.component("DataTable", DataTable);
  app.component("Card", Card);
  
  app.component("Tag", Tag);
  app.component("DataView", DataView);
}
