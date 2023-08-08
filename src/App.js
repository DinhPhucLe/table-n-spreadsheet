import 'handsontable/dist/handsontable.full.min.css';
import { textRenderer, registerRenderer } from 'handsontable/renderers';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';
import { useRef, useEffect } from 'react';
import React from "react";
import './App.css';

registerAllModules();

function SetHeading(table, content, column, row){
  useEffect(() => {
    const tmp = table.current.hotInstance;
    tmp.setDataAtCell(row, column, content);
    tmp.setCellMeta(row, column, 'className', `htCenter htMiddle heading`);
    tmp.updateSettings(row, column);

    console.log(tmp.getDataAtCell(0, 0));
  }, []);
}

function SetSmallHeading(table, content, column, row){
  useEffect(() => {
    const tmp = table.current.hotInstance;
    tmp.setDataAtCell(row, column, content);
    tmp.setCellMeta(row, column, 'className', `htCenter htMiddle smallHeading`);
    tmp.updateSettings(row, column);
  }, [])
}

function SetNTNMLM(table, column, row){
  useEffect(() => {
    const tmp = table.current.hotInstance;
    tmp.setDataAtCell(row, column, "Nội tỉnh");
    tmp.setDataAtCell(row, column+1, "Nội miền");
    tmp.setDataAtCell(row, column+2, "Liên miền");
    
    tmp.setCellMeta(row, column, 'className', `htCenter htMiddle smallHeading`);
    tmp.setCellMeta(row, column+1, 'className', `htCenter htMiddle smallHeading`);
    tmp.setCellMeta(row, column+2, 'className', `htCenter htMiddle smallHeading`);

    tmp.updateSettings(row, column);
    tmp.updateSettings(row, column+1);
    tmp.updateSettings(row, column+2);

  }, [])
}

function SetSmallCombo(table, column, row, content) {
  SetNTNMLM(table, column, row);
  for (let i = column; i <= column+2; i++){
    SetSmallHeading(table, content, i, row+1);
  }
}

function SetNotes(table, content, column, row) {
  useEffect(() => {
    const tmp = table.current.hotInstance;

    
    tmp.setDataAtCell(row, column, content[0]+' '+content[1]);
    
    tmp.setCellMeta(row, column, 'className', `htMiddle smallHeading`);
    tmp.updateSettings(row, column);

  }, [])
}

function App() {
  registerRenderer("brightRed", (hotInstance, TD, ...rest) => {
    textRenderer(hotInstance, TD, ...rest);
    TD.style.color = 'red';
  });

  registerRenderer("blue", (hotInstance, TD, ...rest) => {
    textRenderer(hotInstance, TD, ...rest);
    TD.style.color = 'blue';
  });

  registerRenderer("pink", (hotInstance, TD, ...rest) => {
    textRenderer(hotInstance, TD, ...rest);
    TD.style.color = '#ff3399';
  });

  registerRenderer("lightGreen", (hotInstance, TD, ...rest) => {
    textRenderer(hotInstance, TD, ...rest);
    TD.style.color = '#339933';
  });

  registerRenderer("darkRed", (hotInstance, TD, ...rest) => {
    textRenderer(hotInstance, TD, ...rest);
    TD.style.color = '#990000';
  });

  registerRenderer("darkBlue", (hotInstance, TD, ...rest) => {
    textRenderer(hotInstance, TD, ...rest);
    TD.style.color = '#000066';
  });

  registerRenderer("highlight", (hotInstance, TD, ...rest) => {
    textRenderer(hotInstance, TD, ...rest);
    TD.style.backgroundColor = 'yellow';
  });

  registerRenderer("greyBackground", (hotInstance, TD, ...rest) => {
    textRenderer(hotInstance, TD, ...rest);
    TD.style.backgroundColor = '#e6e6e6';
  });

  const table = useRef(null);

  useEffect(() => {
    const tmp = table.current.hotInstance,
        content = "BẢNG GIÁ CÁC NHÀ VẬN CHUYỂN GỬI TỪ SUPERSHIP";
    tmp.setDataAtCell(0, 0, content);
    tmp.setCellMeta(0, 0, 'className', 'test htCenter htMiddle');
    tmp.updateSettings(0, 0);

    tmp.setDataAtCell(2, 0, "Khối lượng (kg) < =");
    tmp.setCellMeta(2, 0, 'className', 'htCenter htMiddle test1');
    tmp.updateSettings(2, 0);
  }, []);
  SetHeading(table, "GIÁ NHỎ NHẤT", 1, 1);
  SetHeading(table, "SUPERSHIP (nội bộ)", 4, 1);
  SetHeading(table, "SUPERSHIP (nội bộ)", 7, 1);
  SetHeading(table, "SUPERSHIP (ngoài vùng)", 10, 1);
  SetHeading(table, "Ninja Van", 13, 1);
  SetHeading(table, "BEST", 16, 1);
  SetHeading(table, "Shopee Express", 17, 1);
  SetHeading(table, "GHN", 20, 1);
  SetHeading(table, "Viettel Post", 23, 1);
  SetHeading(table, "GHTK", 26, 1);
  SetHeading(table, "J&T (Liên hệ phòng HTĐT)", 31, 1);
  SetHeading(table, "Snappy", 34, 1);

  SetNTNMLM(table, 1, 2);

  SetSmallHeading(table, "Nội thành HN/HCM", 4, 2);
  SetSmallHeading(table, "Nội huyện HN/HCM", 5, 2);
  SetSmallHeading(table, "Nội thành", 4, 3);
  SetSmallHeading(table, "Huyện gần", 5, 3);
  SetSmallHeading(table, "Huyện xa", 6, 3);

  SetSmallHeading(table, "Nội thành/tỉnh", 7, 2);
  SetSmallHeading(table, "Nội huyện", 8, 2);
  SetSmallHeading(table, "Nội tỉnh", 7, 3);
  SetSmallHeading(table, "Huyện gần", 8, 3);
  SetSmallHeading(table, "Huyện xa", 9, 3);


  SetSmallCombo(table, 10, 2, "Lấy tận nơi +2k");
  SetSmallCombo(table, 13, 2, "Lấy tận nơi +1.5k");
  SetSmallHeading(table, "Toàn quốc", 16, 2);
  SetSmallHeading(table, "Lấy tận nơi Free", 16, 3);
  SetSmallCombo(table, 17, 2, "Lấy tận nơi Free");
  SetSmallCombo(table, 20, 2, "Lấy tận nơi +1k");
  SetSmallCombo(table, 23, 2, "Lấy tận nơi Free");

  SetSmallHeading(table, "Nội thành HN/HCM", 26, 2);
  SetSmallHeading(table, "Ngoại thành HN/HCM", 27, 2);
  SetSmallHeading(table, "Nội tỉnh còn lại", 28, 2);
  SetSmallHeading(table, "Nội miền", 29, 2);
  SetSmallHeading(table, "Liên miền", 30, 2);
  for (let i = 26; i <= 32; i++)
    SetSmallHeading(table, "Lấy tận nơi Free", i, 3);
  SetSmallHeading(table, "Lấy tận nơi thỏa thuận", 33, 3);
  SetSmallHeading(table, "HCM đi nội thành", 31, 2);
  SetSmallHeading(table, "HCM đi các tỉnh", 32, 2);
  SetSmallHeading(table, "Miền Trung Tây Nguyên", 33, 2);
  SetSmallHeading(table, "Nội tỉnh HCM/HN (Lấy HCM - Giao HN)", 34, 2);
  SetSmallHeading(table, "Nội thành", 34, 3);
  SetSmallHeading(table, "Ngoại thành", 35, 3);

  let cur = 0.5;
  for (let i = 4; i <= 15; i++){
    SetSmallHeading(table, `${cur}`, 0, i);
    if (cur < 2) cur+=0.5;
    else cur++;
  }

  SetSmallHeading(table, ">10kg", 0, 16);
  for (let i = 1; i <= 3; i++)
    SetSmallHeading(table, "+2k/0.5kg vượt", i, 16)
  SetSmallHeading(table, "+880đ/0.5kg vượt", 4, 16);
  SetSmallHeading(table, "+880đ/0.5kg vượt", 7, 16);
  SetSmallHeading(table, "+2k/0.5kg vượt", 10, 16);
  SetSmallHeading(table, "+2.5k/0.5kg vượt", 11, 16);
  SetSmallHeading(table, "+2.5k/0.5kg vượt", 12, 16);
  SetSmallHeading(table, "+9k/1kg vượt", 13, 16);
  SetSmallHeading(table, "+11k/1kg vượt", 14, 16);
  SetSmallHeading(table, "+16k/1kg vượt", 15, 16);
  SetSmallHeading(table, "+2k/0.5kg vượt", 16, 16);
  SetSmallHeading(table, "+2k/0.5kg vượt", 17, 16);
  SetSmallHeading(table, "+3k/0.5kg vượt", 18, 16);
  SetSmallHeading(table, "+7k/0.5kg vượt", 19, 16);
  for (let i = 20; i <= 22; i++)
    SetSmallHeading(table, "+5k/kg vượt", i, 16);
  SetSmallHeading(table, "+2.5k/0.5kg vượt", 23, 16);
  SetSmallHeading(table, "+3k/0.5kg vượt", 25, 16);
  SetSmallHeading(table, "+2.5k/0.5kg vượt", 26, 16);
  SetSmallHeading(table, "+2.5k/0.5kg vượt", 27, 16);
  SetSmallHeading(table, "<=10.5kg = 82,5k >10,5kg = 82,5 + 2,5k/0.5kg", 28, 16);
  SetSmallHeading(table, "<=10.5kg = 82,5k >10,5kg = 82,5 + 2,5k/0.5kg", 29, 16);
  SetSmallHeading(table, "<=10.5kg = 125k >10,5kg = 125 + 2,5k/0.5kg", 30, 16);
  SetSmallHeading(table, "+8.000đ/kg vượt", 31, 16);
  SetSmallHeading(table, "+3k/0.5kg vượt", 34, 16);


  let t1=["BẢNG GIÁ SUPERSHIP:", "đã được làm tròn số đến hàng 500đ để tiện theo dõi. Bảng giá SuperShip áp dụng cho cấp bưu cục, cấp đại lý cộng thêm 3000đ chi phí lấy hàng và trung chuyển."],
    t2=["BẢNG GIÁ BEST:", "Là giá gốc của các gói V của bưu cục (họ tự mang hàng lên SC) - Đã bao gồm phí trung chuyển lên SC 1.500đ"],
    t3=["BẢNG GIÁ GHN:", "Bảng giá áp dụng khi mang ra Bưu cục của GHN. Trường hợp nhân viên GHN đến lấy tận nơi +1.000đ/đơn (giá khi quyết toán DT mặc định là giá GHN đến lấy tận nơi, chiết khấu 1k được tổng hợp xử lý vào cuối tháng). Lưu ý bảng giá được kết hợp giữa nhiều ID mã giá khác nhau, vui lòng đảm bảo khối lượng đơn chính xác trước khi tạo Chuyến ngoài để được chính sách giá tốt."];
  registerRenderer("impotent1", (hotInstance, TD, col, row, ...rest) => {
    textRenderer(hotInstance, TD, col, row, ...rest);
    TD.innerHTML = `<span style="color:#ff5050;">${t1[0]}</span> ${t1[1]}`;
  });

  registerRenderer("impotent2", (hotInstance, TD, col, row, ...rest) => {
    textRenderer(hotInstance, TD, col, row, ...rest);
    TD.innerHTML = `<span style="color:blue;">${t2[0]}</span> ${t2[1]}`;
  });

  registerRenderer("impotent3", (hotInstance, TD, col, row, ...rest) => {
    textRenderer(hotInstance, TD, col, row, ...rest);
    TD.innerHTML = `<span style="color:orange;">${t3[0]}</span> ${t3[1]}`;
  });

  SetNotes(table, t1, 4, 17);
  SetNotes(table, t2, 4, 18);
  SetNotes(table, t3, 4, 19);

  const data = [
    [''], [''], [''], [''],
    ['', 12, 12, 12, 9, 11, 13, 6, 7, 11, 12, 18, 18, 13, 13, 13, 13, 12, 12, 12, 15.5, 17, 17, 13.5, 19, 19, 22, 30, 20, 20, 20, "15-17", 20, 20, 13, 14],
    ['', 12, 12, 12, 9, 11, 13, 6, 7, 11, 12, 19, 19, 13, 13, 13, 13, 12, 12, 12, 15.5, 17, 18, 13.5, 20, 20, 22, 30, 20, 20, 20, "15-17", 20, 20, 13, 14],
    ['', 13, 13, 14, 9, 11, 13, 6, 7, 11, 14, 19, 19, 14, 14, 14, 15, 15, 15, 18, 15.5, 17, 18, 13.5, 20, 20, 22, 30, 24, 24, 24, "15-17", 25, 20, 13, 14],
    ['', 13, 13, 14, 9, 11, 13, 6, 7, 11, 14, 21, 22, 15, 15, 15, 15, 15, 15, 18, 15.5, 17, 18, 13.5, 25, 25, 22, 30, 24, 24, 24, "15-17", 25, 20, 13, 14],
    ['', 13, 13, 14, 9, 11, 13, 6, 7, 11, 20, 24, 25, 15, 15, 15, 15, 20, 20, 28, 15.5, 20, 22, 13.5, 30, 33, 22, 30, 26, 26, 26, "23-26", 47, '', 13, 14],
    ['', 16, 16, 17, 11, 13, 15, 8, 9, 13, 24, 28, 30, 16, 16, 22, 17, 25, 25, 38, 18.5, 22, 22, 22, 32, 37, 27, 35, 32, 32, 37, "31-25", 59, '', 19, 20],
    ['', 16, 16, 17, 12.5, 14.5, 16.5, 9.5, 10.5, 14.5, 28, 32, 35, 16, 16, 28, 17, 30, 30, 48, 21.5, 22, 22, 24, 34, 41, 32, 40, 34, 34, 40, "39-44", 71, '', 25, 26],
    ['', 21, 21, 21, 14, 16, 18, 11, 12, 16, 32, 36, 40, 25, 27, 44, 21, 35, 35, 58, 27.5, 32, 35, 28, 38, 45, 37, 45, 36, 36, 44, "47-53", 83, 55, 31, 32],
    ['', 25, 25, 25, 16, 18, 20, 13, 14, 18, 36, 40, 45, 34, 38, 60, 25, 40, 40, 68, 33.5, 38, 41, 30, 40, 49, 42, 50, 38, 38, 47, "55-62", 95, 80, 37, 38],
    ['', 29, 29, 29, 17.5, 20, 22, 15, 16, 20, 40, 44, 50, 43, 49, 76, 29, 45, 45, 78, 39.5, 44, 47, 35, 44, 53, 47, 55, 40, 40, 52, "63-71", 107, 80, 43, 44],
    ['', 33, 33, 33, 19.5, 21.5, 23.5, 16.5, 17.5, 21.5, 44, 48, 55, 52, 60, 92, 33, 50, 50, 88, 45.5, 50, 50, 40, 48, 57, 52, 60, 45, 45, 57, "71-80", 119, 80, 49, 50],
    ['', 37, 37, 37, 21, 23.5, 25.5, 18.5, 19.5, 23.5, 48, 52, 60, 61, 71, 108, 37, 55, 55, 98, 50, 50, 50, 45, 52, 61, 57, 65, 50, 50, 62, "79-89", 131, 88, 55, 56]
  ]

  const inTesting = document.getElementById('inTesting');
  const scWidth = window.innerWidth/36, scHeight = window.innerHeight/20;
  console.log(scWidth, scHeight);

  return (
    <>
      <HotTable
        ref={table}
        licenseKey = 'non-commercial-and-evaluation'
        data={data}
        className='fit-adjust'

        rowHeaders = {true}
        colHeaders = {true}
        startCols = {100}
        startRows = {100}
        
        colWidths="0wh"
        rowHeights="0vh"
        manualRowResize = {true}
        manualColumnResize = {true}
        
        persistentStateSave={true}

        
        cells={(row, col) => {
          //if (row > 0 && row <= 3){return {renderer: 'greyBackground'}}

          if ((col >= 4 && col <= 9 && row <= 16) || (col === 16 && row >= 2)){return {renderer: 'brightRed'}}

          if (col === 16 && row === 1){return {renderer: 'blue'}}

          if ((col >= 17 && col <= 19) || (col >= 23 && col <= 25)){return {renderer: 'darkRed'}}

          if (col >= 31 && col <= 33){return {renderer: 'lightGreen'}}

          if (col >= 34){return {renderer: 'pink'}}

          if ((col >= 20 && col <= 22) || (col >= 26 && col <= 30)){return {renderer: 'darkBlue'}}

          if ((col <= 3 && col > 0 && row >= 4 && row <= 15) || (row >= 6 && row <= 9 && col == 15)
            || (col >= 13 && col <= 14 && row >= 10 && row <= 11)){
            return {renderer: 'highlight'}
          }

          if (col === 4 && row === 17){
            return {renderer: 'impotent1'}
          }

          if (col === 4 && row === 18){
            return {renderer: 'impotent2'}
          }

          if (col === 4 && row === 19){
            return {renderer: 'impotent3'}
          }
          
        }}

        mergeCells = {[
          {row: 0, col: 0, colspan: 36, rowspan: 1},

          {row: 1, col: 1, colspan: 3, rowspan: 1},
          {row: 1, col: 4, colspan: 3, rowspan: 1},
          {row: 1, col: 7, colspan: 3, rowspan: 1},
          {row: 1, col: 10, colspan: 3, rowspan: 1},
          {row: 1, col: 13, colspan: 3, rowspan: 1},
          {row: 1, col: 17, colspan: 3, rowspan: 1},
          {row: 1, col: 20, colspan: 3, rowspan: 1},
          {row: 1, col: 23, colspan: 3, rowspan: 1},
          {row: 1, col: 26, colspan: 5, rowspan: 1},
          {row: 1, col: 31, colspan: 3, rowspan: 1},
          {row: 1, col: 34, colspan: 2, rowspan: 1},

          {row: 16, col: 1, colspan: 3, rowspan: 1},
          {row: 16, col: 4, colspan: 3, rowspan: 1},
          {row: 16, col: 7, colspan: 3, rowspan: 1},
          {row: 16, col: 10, colspan: 3, rowspan: 1},
          {row: 16, col: 13, colspan: 3, rowspan: 1},
          {row: 16, col: 17, colspan: 3, rowspan: 1},
          {row: 16, col: 20, colspan: 3, rowspan: 1},
          {row: 16, col: 23, colspan: 3, rowspan: 1},
          {row: 16, col: 26, colspan: 5, rowspan: 1},
          {row: 16, col: 31, colspan: 3, rowspan: 1},
          {row: 16, col: 34, colspan: 2, rowspan: 1},

          {row: 17, col: 4, colspan: 32, rowspan: 1},
          {row: 18, col: 4, colspan: 32, rowspan: 1},
          {row: 19, col: 4, colspan:32, rowspan: 1},

          {row: 2, col: 0, colspan: 1, rowspan: 2},
          {row: 2, col: 1, colspan: 1, rowspan: 2},
          {row: 2, col: 2, colspan: 1, rowspan: 2},
          {row: 2, col: 3, colspan: 1, rowspan: 2},

          {row: 2, col: 5, colspan: 2, rowspan: 1},
          {row: 2, col: 8, colspan: 2, rowspan: 1},
          {row: 2, col: 34, colspan: 2, rowspan: 1}
        ]}
      >

      </HotTable>
      
      
    </>
  );
}

export default App;
