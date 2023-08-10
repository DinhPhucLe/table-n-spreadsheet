import 'handsontable/dist/handsontable.full.min.css';
import { textRenderer, registerRenderer } from 'handsontable/renderers';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';
import { useRef, useEffect } from 'react';
import React from "react";
import './App.css';

registerAllModules();



function SetNotes(table, content, column, row) {
  useEffect(() => {
    const tmp = table.current.hotInstance;

    
    tmp.setDataAtCell(row, column, content[0]+' '+content[1]);
    
    tmp.setCellMeta(row, column, 'className', `htMiddle smallHeading`);
    //tmp.updateSettings(row, column);

  }, [])
}



function App() {
  

  const table = useRef();

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

  registerRenderer("black", (hotInstance, TD, ...rest) => {
    textRenderer(hotInstance, TD, ...rest);
    TD.style.color = '#373737';
  });



  let t1=["BẢNG GIÁ SUPERSHIP:", "đã được làm tròn số đến hàng 500đ để tiện theo dõi. Bảng giá SuperShip áp dụng cho cấp bưu cục, cấp đại lý cộng thêm 3000đ chi phí lấy hàng và trung chuyển."],
    t2=["BẢNG GIÁ BEST:", "Là giá gốc của các gói V của bưu cục (họ tự mang hàng lên SC) - Đã bao gồm phí trung chuyển lên SC 1.500đ"],
    t3=["BẢNG GIÁ GHN:", "Bảng giá áp dụng khi mang ra Bưu cục của GHN. Trường hợp nhân viên GHN đến lấy tận nơi +1.000đ/đơn (giá khi quyết toán DT mặc định là giá GHN đến lấy tận nơi, chiết khấu 1k được tổng hợp xử lý vào cuối tháng). Lưu ý bảng giá được kết hợp giữa nhiều ID mã giá khác nhau, vui lòng đảm bảo khối lượng đơn chính xác trước khi tạo Chuyến ngoài để được chính sách giá tốt."];
  registerRenderer("impotent1", (hotInstance, TD, col, row, ...rest) => {
    textRenderer(hotInstance, TD, col, row, ...rest);
    TD.className = 'smallHeading';
    TD.innerHTML = `<span style="color:#ff5050;">${t1[0]}</span> ${t1[1]}`;
  });

  registerRenderer("impotent2", (hotInstance, TD, col, row, ...rest) => {
    textRenderer(hotInstance, TD, col, row, ...rest);
    TD.className = 'smallHeading';
    TD.innerHTML = `<span style="color:blue;">${t2[0]}</span> ${t2[1]}`;
  });

  registerRenderer("impotent3", (hotInstance, TD, col, row, ...rest) => {
    textRenderer(hotInstance, TD, col, row, ...rest);
    TD.className = 'smallHeading';
    TD.innerHTML = `<span style="color:orange;">${t3[0]}</span> ${t3[1]}`;
  });

  registerRenderer("impotent4", (hotInstance, TD, col, row, ...rest) => {
    textRenderer(hotInstance, TD, col, row, ...rest);
    TD.className = 'heading htCenter htMiddle';
    TD.innerHTML = `<span style="color:#339933;">${"J&T"}</span> <br/> ${"(Liên hệ phòng HTĐT)"}`;
  });

  SetNotes(table, t1, 4, 17);
  SetNotes(table, t2, 4, 18);
  SetNotes(table, t3, 4, 19);

  const data = [
    ["BẢNG GIÁ CÁC NHÀ VẬN CHUYỂN GỬI TỪ SUPERSHIP",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    ['', 'GIÁ NHỎ NHẤT', '', '', 'SUPERSHIP (nội bộ)', '', '', 'SUPERSHIP (nội bộ)', '', '', 'SUPERSHIP (ngoài vùng)', '', '', 'Ninja Van', '', '', 'BEST', 'Shopee Express', '', '', 'GHN', '', '', 'Viettel Post', '', '', 'GHTK', '', '', '', '', 'J&T (Liên hệ phòng HTĐT)', '', '', 'Snappy',],
    ['Khối lượng (kg) <=', 'Nội tỉnh', 'Nội miền', 'Liên miền', 'Nội thành HN/ HCM', 'Nội huyện HN/HCM', '', 'Nội thành/ tỉnh', 'Nội huyện', '', 'Nội tỉnh', 'Nội miền', 'Liên miền', 'Nội tỉnh', 'Nội miền', 'Liên miền', 'Toàn quốc', 'Nội tỉnh', 'Nội miền', 'Liên miền', 'Nội tỉnh', 'Nội miền', 'Liên miền', 'Nội tỉnh', 'Nội miền', 'Liên miền', 'Nội thành HN/ HCM', 'Ngoại thành HN/ HCM', 'Nội tỉnh còn lại', 'Nội miền', 'Liên miền', 'HCM đi nội thành', 'HCM đi các tỉnh', 'Miền Trung Tây Nguyên', 'Nội tỉnh HCM/HN (Lấy HCM - Giao HN)',],
    ['', '', '', '', 'Nội thành', 'Huyện gần', 'Huyện xa', 'Nội tỉnh', 'Huyện gần', 'Huyện xa', 'Lấy tận nơi +2k', 'Lấy tận nơi +2k', 'Lấy tận nơi +2k', 'Lấy tận nơi +1,5k', 'Lấy tận nơi +1,5k', 'Lấy tận nơi +1,5k', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi +1k', 'Lấy tận nơi +1k', 'Lấy tận nơi +1k', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi Free', 'Lấy tận nơi thỏa thuận', 'Nội thành', 'Ngoại thành'],
    ['0.5', 12, 12, 12, 9, 11, 13, 6, 7, 11, 12, 18, 18, 13, 13, 13, 13, 12, 12, 12, 15.5, 17, 17, 13.5, 19, 19, 22, 30, 20, 20, 20, "15-17", 20, 20, 13, 14],
    ['1', 12, 12, 12, 9, 11, 13, 6, 7, 11, 12, 19, 19, 13, 13, 13, 13, 12, 12, 12, 15.5, 17, 18, 13.5, 20, 20, 22, 30, 20, 20, 20, "15-17", 20, 20, 13, 14],
    ['1.5', 13, 13, 14, 9, 11, 13, 6, 7, 11, 14, 19, 19, 14, 14, 14, 15, 15, 15, 18, 15.5, 17, 18, 13.5, 20, 20, 22, 30, 24, 24, 24, "15-17", 25, 20, 13, 14],
    ['2', 13, 13, 14, 9, 11, 13, 6, 7, 11, 14, 21, 22, 15, 15, 15, 15, 15, 15, 18, 15.5, 17, 18, 13.5, 25, 25, 22, 30, 24, 24, 24, "15-17", 25, 20, 13, 14],
    ['3', 13, 13, 14, 9, 11, 13, 6, 7, 11, 20, 24, 25, 15, 15, 15, 15, 20, 20, 28, 15.5, 20, 22, 13.5, 30, 33, 22, 30, 26, 26, 26, "23-26", 47, '', 13, 14],
    ['4', 16, 16, 17, 11, 13, 15, 8, 9, 13, 24, 28, 30, 16, 16, 22, 17, 25, 25, 38, 18.5, 22, 22, 22, 32, 37, 27, 35, 32, 32, 37, "31-25", 59, '', 19, 20],
    ['5', 16, 16, 17, 12.5, 14.5, 16.5, 9.5, 10.5, 14.5, 28, 32, 35, 16, 16, 28, 17, 30, 30, 48, 21.5, 22, 22, 24, 34, 41, 32, 40, 34, 34, 40, "39-44", 71, '', 25, 26],
    ['6', 21, 21, 21, 14, 16, 18, 11, 12, 16, 32, 36, 40, 25, 27, 44, 21, 35, 35, 58, 27.5, 32, 35, 28, 38, 45, 37, 45, 36, 36, 44, "47-53", 83, 55, 31, 32],
    ['7', 25, 25, 25, 16, 18, 20, 13, 14, 18, 36, 40, 45, 34, 38, 60, 25, 40, 40, 68, 33.5, 38, 41, 30, 40, 49, 42, 50, 38, 38, 47, "55-62", 95, 80, 37, 38],
    ['8', 29, 29, 29, 17.5, 20, 22, 15, 16, 20, 40, 44, 50, 43, 49, 76, 29, 45, 45, 78, 39.5, 44, 47, 35, 44, 53, 47, 55, 40, 40, 52, "63-71", 107, 80, 43, 44],
    ['9', 33, 33, 33, 19.5, 21.5, 23.5, 16.5, 17.5, 21.5, 44, 48, 55, 52, 60, 92, 33, 50, 50, 88, 45.5, 50, 50, 40, 48, 57, 52, 60, 45, 45, 57, "71-80", 119, 80, 49, 50],
    ['10', 37, 37, 37, 21, 23.5, 25.5, 18.5, 19.5, 23.5, 48, 52, 60, 61, 71, 108, 37, 55, 55, 98, 50, 50, 50, 45, 52, 61, 57, 65, 50, 50, 62, "79-89", 131, 88, 55, 56],
    ['>10kg', '+2k/0.5kg vượt', '', '', '+880đ/0.5kg vượt', '', '', '+880đ/0.5kg vượt', '', '', '+2k/0.5kg vượt', '', '', '+9k/1kg vượt', '', '', '+2k/0.5kg vượt', '+2k/0.5kg vượt', '', '', '+5k/kg vượt', '', '', '+2.5k/0.5kg vượt', '', '', '+2.5k/0.5kg vượt', '', '', '', '', '+8000đ/kg vượt', '', '', '+3k/0.5kg vượt', ''],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], /*[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,], [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]*/
  ]

  
  //SetTableData(table, data);
  
  

  return (
    <>
    <div style={{
      //paddingLeft: '5vw', paddingRight: '5vw', paddingTop: '5vh', paddingBottom: '5vh',
      width: Math.min('100vw', '2000px'), height: Math.min('100vh', '1000px')
    }}>
      <HotTable
        ref={table}
        licenseKey = 'non-commercial-and-evaluation'
        data={data}
        className='adjust'

        rowHeaders = {true}
        colHeaders = {true}

        mergeCells = {[
          {row: 0, col: 0, rowspan: 1, colspan: 36},

          {row: 1, col: 1, rowspan: 1, colspan: 3},
          {row: 1, col: 4, rowspan: 1, colspan: 3},
          {row: 1, col: 7, rowspan: 1, colspan: 3},
          {row: 1, col: 10, rowspan: 1, colspan: 3},
          {row: 1, col: 13, rowspan: 1, colspan: 3},
          {row: 1, col: 17, rowspan: 1, colspan: 3},
          {row: 1, col: 20, rowspan: 1, colspan: 3},
          {row: 1, col: 23, rowspan: 1, colspan: 3},
          {row: 1, col: 26, rowspan: 1, colspan: 5},
          {row: 1, col: 31, rowspan: 1, colspan: 3},
          {row: 1, col: 34, rowspan: 1, colspan: 2},

          {row: 16, col: 1, rowspan: 1, colspan: 3},
          {row: 16, col: 4, rowspan: 1, colspan: 3},
          {row: 16, col: 7, rowspan: 1, colspan: 3},
          {row: 16, col: 10, rowspan: 1, colspan: 3},
          {row: 16, col: 13, rowspan: 1, colspan: 3},
          {row: 16, col: 17, rowspan: 1, colspan: 3},
          {row: 16, col: 20, rowspan: 1, colspan: 3},
          {row: 16, col: 23, rowspan: 1, colspan: 3},
          {row: 16, col: 26, rowspan: 1, colspan: 5},
          {row: 16, col: 31, rowspan: 1, colspan: 3},
          {row: 16, col: 34, rowspan: 1, colspan: 2},

          {row: 17, col: 4, rowspan: 1, colspan: 32},
          {row: 18, col: 4, rowspan: 1, colspan: 32},
          {row: 19, col: 4, rowspan: 1, colspan: 32},

          {row: 2, col: 0, rowspan: 2, colspan: 1},
          {row: 2, col: 1, rowspan: 2, colspan: 1},
          {row: 2, col: 2, rowspan: 2, colspan: 1},
          {row: 2, col: 3, rowspan: 2, colspan: 1},

          {row: 2, col: 5, rowspan: 1, colspan: 2},
          {row: 2, col: 8, rowspan: 1, colspan: 2},
          {row: 2, col: 34, rowspan: 1, colspan: 2}
        ]}
        
        colWidths="0vw"
        rowHeights="0vh"
        manualRowResize = {true}
        manualColumnResize = {true}
        beforeRefreshDimensions = {true}

        
        cells={(row, col) => {
          //if (row > 0 && row <= 3){return {renderer: 'greyBackground'}}
          if (row === 1 && col === 31){
            return {
              renderer: 'impotent4',
            }
          }

          if ((col >= 4 && col <= 9 && row <= 16) || (col === 16 && row >= 2)){
            if (row <= 3 || row === 16) {
              if (row === 1){
                return {
                  renderer: 'brightRed',
                  className: 'htCenter htMiddle heading'
                }
              }
              return {
                renderer: 'brightRed',
                className: 'smallHeading htCenter htMiddle'
              }
            }
            return {renderer: 'brightRed'}
          }

          if (col === 16 && row === 1){return {renderer: 'blue', className: 'heading htCenter htMiddle'}}

          if ((col >= 17 && col <= 19) || (col >= 23 && col <= 25)){
            if (row <= 3 || row === 16){
              if (row === 1){
                return {
                  renderer: 'darkRed',
                  className: 'htCenter htMiddle heading'
                }
              }
              return {
                renderer: 'darkRed',
                className: 'smallHeading htCenter htMiddle'
              }
            }
            return {renderer: 'darkRed'}
          }

          if (col >= 31 && col <= 33){
            if (row <= 3 || row === 16){
              if (row === 1){
                return {
                  renderer: 'lightGreen',
                  className: 'htCenter htMiddle heading'
                }
              }
              return {
                renderer: 'lightGreen',
                className: 'smallHeading htCenter htMiddle'
              }
            }
            return {renderer: 'lightGreen'}
          }

          if (col >= 34){
            if (row <= 3 || row === 16){
              if (row === 1){
                return {
                  renderer: 'pink',
                  className: 'htCenter htMiddle heading'
                }
              }
              return {
                renderer: 'pink',
                className: 'smallHeading htCenter htMiddle'
              }
            }
            return {renderer: 'pink'}
          }

          if ((col >= 20 && col <= 22) || (col >= 26 && col <= 30)){
            if (row <= 3 || row === 16){
              if (row === 1){
                return {
                  renderer: 'darkBlue',
                  className: 'htCenter htMiddle heading'
                }
              }
              return {
                renderer: 'darkBlue',
                className: 'smallHeading htCenter htMiddle'
              }
            }
            return {renderer: 'darkBlue'}
          }

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
          
          if (!col && !row){
            return {
              className: 'htMiddle htCenter test'
            }
          }

          if (row === 1){
            return {
              renderer: 'black',
              className: 'htCenter htMiddle heading'
            }
          }
          if (!col && row === 2){
            return {
              renderer: 'black',
              className: 'test1 htCenter htMiddle'
            }
          }
          if ((!col) || row <= 3 || row === 16){
            
            return {
              renderer: 'black',
              className: 'smallHeading htCenter htMiddle'
            }
          }return {renderer: 'black'}
        }}
      >

      </HotTable>
    </div>
    
    </>
  );
}

export default App;
