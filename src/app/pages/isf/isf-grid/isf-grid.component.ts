import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-isf-grid',
  templateUrl: './isf-grid.component.html',
  styleUrls: ['./isf-grid.component.scss']
})
export class IsfGridComponent  {

columnDefs: ColDef[] = [
    { field: 'id', sortable: true, filter: true, resizable: true  },
    { field: 'isfNo', sortable: true, filter: true, resizable: true, checkboxSelection: true },
    { field: 's', sortable: true, filter: true, resizable: true },
    { field: 'd', sortable: true, filter: true, resizable: true  },
    { field: 'type', sortable: true, filter: true, resizable: true  },
    { field: 'act', sortable: true, filter: true, resizable: true  },
    { field: 'h.b/l', sortable: true, filter: true, resizable: true  },
    { field: 'fileNo', sortable: true, filter: true, resizable: true  },
    { field: 'custRefNo', sortable: true, filter: true, resizable: true  },
    { field: 'importer', sortable: true, filter: true, resizable: true  },
];

rowData = [
    { id: '129242', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129241', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270618', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129240', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270615', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129239', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270638', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129238', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270637', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129237', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270636', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129236', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270635', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129235', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270634', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129234', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270633', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129233', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270632', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129232', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270631', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129231', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270630', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129230', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270629', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129229', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270628', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129228', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270627', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129227', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270626', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129226', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270625', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129225', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270624', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129224', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270622', custRefNo: 'LN-146817', importer:'Fancy Trading Inc' },
    { id: '129223', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270621', custRefNo: 'LN-146817', importer:'Fancy Trading Inc' },
    { id: '129222', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270618', custRefNo: 'LN-146817', importer:'Pocas Intl Corp' },
    { id: '129221', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270611', custRefNo: 'LN-146817', importer:'Ann Fabric' },
    { id: '129220', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129219', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129218', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129217', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129216', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129215', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129214', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129213', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129212', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129211', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129210', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129211', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129210', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
    { id: '129209', isfNo: 'EH3-239215131425', s: '02', d: 'S1', type: '01', act: 'CT', hbl: 'EGLV503190020233', fileNo: '2270654', custRefNo: 'LN-146817', importer:'Continental Materials Inc' },
];
}
