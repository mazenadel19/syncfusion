import { L10n, loadCldr, setCulture } from "@syncfusion/ej2-base";
import {
  ColumnDirective,
  ColumnsDirective,
  DayMarkers,
  Edit,
  GanttComponent,
  Inject,
  Selection,
  Toolbar
} from "@syncfusion/ej2-react-gantt";
import React from "react";
import { resourceData, resourceResources } from "./data";
// arabic
import * as arGregorian from "cldr-data/main/ar/ca-gregorian.json";
import * as arNumbers from "cldr-data/main/ar/numbers.json";
import * as arTimeZoneNames from "cldr-data/main/ar/timeZoneNames.json";
import * as arGeneric from "cldr-data/main/ar/ca-generic.json";
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';

loadCldr(arGregorian, arNumbers, arTimeZoneNames, arGeneric, numberingSystems);
setCulture("ar");
L10n.load({
  ar: {
    gantt: {
      emptyRecord: "لا سجلات لعرضها",
      id: "هوية شخصية",
      name: "اسم",
      startDate: "تاريخ البدء",
      endDate: "تاريخ الانتهاء",
      duration: "المدة الزمنية",
      progress: "تقدم",
      dependency: "الاعتماد",
      notes: "ملاحظات",
      baselineStartDate: "تاريخ البدء الأساسي",
      baselineEndDate: "تاريخ نهاية خط الأساس",
      taskMode: "وضع المهام",
      changeScheduleMode: "تغيير وضع الجدول",
      subTasksStartDate: "تاريخ بدء المهام الفرعية",
      subTasksEndDate: "تاريخ انتهاء المهام الفرعية",
      scheduleStartDate: "جدولة تاريخ البدء",
      scheduleEndDate: "تاريخ انتهاء الجدول الزمني",
      auto: "تلقاءي",
      manual: "كتيب",
      type: "اكتب",
      offset: "عوض",
      resourceName: "مصادر",
      resourceID: "معرف المورد",
      day: "يوم",
      hour: "ساعة",
      minute: "دقيقة",
      days: "أيام",
      hours: "ساعات",
      minutes: "الدقائق",
      generalTab: "جنرال لواء",
      customTab: "أعمدة مخصصة",
      writeNotes: "اكتب ملاحظات",
      addDialogTitle: "مهمة جديدة",
      editDialogTitle: "معلومات المهمة",
      saveButton: "حفظ",
      add: "إضافة",
      edit: "تعديل",
      update: "تحديث",
      delete: "حذف",
      cancel: "إلغاء",
      search: "بحث",
      task: " مهمة",
      tasks: " مهام",
      zoomIn: "تكبير",
      zoomOut: "تصغير",
      zoomToFit: "تكبير لتناسب",
      excelExport: "اكسل التصدير",
      csvExport: "تصدير CSV",
      expandAll: "توسيع الكل",
      collapseAll: "انهيار جميع",
      nextTimeSpan: "الجدول الزمني التالي",
      prevTimeSpan: "الجدول الزمني السابق",
      okText: "حسنا",
      confirmDelete: "هل أنت متأكد أنك تريد حذف السجل؟",
      from: "من عند",
      to: "إلى",
      taskLink: "رابط المهمة",
      lag: "بطئ",
      start: "بداية",
      finish: "إنهاء",
      enterValue: "أدخل القيمة",
      taskBeforePredecessor_FS:
        "قمت بنقل '{0}' للبدء قبل انتهاء '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
      taskAfterPredecessor_FS:
        "قمت بنقل '{0}' بعيدًا عن '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
      taskBeforePredecessor_SS:
        "قمت بنقل '{0}' للبدء قبل أن يبدأ '{1}' وربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
      taskAfterPredecessor_SS:
        "قمت بنقل '{0}' للبدء بعد بدء '{1}' وربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
      taskBeforePredecessor_FF:
        "قمت بنقل '{0}' للإنهاء قبل انتهاء '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
      taskAfterPredecessor_FF:
        "قمت بنقل '{0}' للإنهاء بعد انتهاء '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
      taskBeforePredecessor_SF:
        "قمت بنقل '{0}' بعيدًا عن '{1}' لبدء التشغيل وترتبط المهمتان. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
      taskAfterPredecessor_SF:
        "قمت بنقل '{0}' للإنهاء بعد بدء '{1}' وربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
      taskInformation: "معلومات المهمة",
      deleteTask: "حذف المهمة",
      deleteDependency: "حذف التبعية",
      convert: "تحويل",
      save: "حفظ",
      above: "في الاعلى",
      below: "أدناه",
      child: "طفل",
      milestone: "معلما",
      toTask: "لمهمة",
      toMilestone: "إلى معلم",
      eventMarkers: "علامات الحدث",
      leftTaskLabel: "تسمية المهمة اليسرى",
      rightTaskLabel: "تسمية المهمة الصحيحة",
      timelineCell: "خلية الجدول الزمني",
      confirmPredecessorDelete: "هل أنت متأكد أنك تريد إزالة رابط التبعية؟",
      unit: "وحدة",
      work: "عمل",
      taskType: "نوع المهمة",
      unassignedTask: "مهمة غير محددة",
      group: "مجموعة",
      indent: "مسافة بادئة",
      outdent: "عفا عليها الزمن",
      segments: "شرائح",
      splitTask: "تقسيم المهمة",
      mergeTask: "مهمة الدمج",
      left: "اليسار",
      right: "حق"
    }
  }
});
const ResourceAllocation = () => {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
    work: "work",
    resourceInfo: "resources",
    type: "taskType"
  };
  const resourceFields = {
    id: "resourceId",
    name: "resourceName",
    unit: "unit"
  };
  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };
  const toolbar = [
    "Add",
    "Edit",
    "Update",
    "Delete",
    "Cancel",
    "ExpandAll",
    "CollapseAll"
  ];
  const splitterSettings = {
    columnIndex: 5.1
  };
  const projectStartDate = new Date("03/28/2019");
  const projectEndDate = new Date("07/28/2019");
  const labelSettings = {
    rightLabel: "resources"
  };
  const workUnit = "Hour";
  return (
    <div className="control-pane">
      <div className="control-section">
        <GanttComponent
          id="ResourceAllocation"
          locale={"ar"}
          enableRtl={true}
          dataSource={resourceData}
          treeColumnIndex={1}
          allowSelection={true}
          highlightWeekends={true}
          toolbar={toolbar}
          editSettings={editSettings}
          projectStartDate={projectStartDate}
          projectEndDate={projectEndDate}
          resourceFields={resourceFields}
          taskFields={taskFields}
          labelSettings={labelSettings}
          splitterSettings={splitterSettings}
          height="410px"
          resources={resourceResources}
          workUnit={workUnit}
        >
          <ColumnsDirective>
            <ColumnDirective field="TaskID" visible={false}></ColumnDirective>
            <ColumnDirective
              field="TaskName"
              headerText="Task Name"
              width="180"
            ></ColumnDirective>
            <ColumnDirective
              field="resources"
              headerText="Resources"
              width="160"
            ></ColumnDirective>
            <ColumnDirective field="work" width="110"></ColumnDirective>
            <ColumnDirective field="Duration" width="100"></ColumnDirective>
            <ColumnDirective
              field="taskType"
              headerText="Task Type"
              width="110"
            ></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection, DayMarkers, Toolbar, Edit]} />
        </GanttComponent>
      </div>
    </div>
  );
};
export default ResourceAllocation;
