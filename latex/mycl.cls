\LoadClassWithOptions{article}

\RequirePackage{xeCJK}
\usepackage[UTF8]{ctex}
% \RequirePackage{zhnumber}

\RequirePackage{graphicx}
\RequirePackage{geometry}
\RequirePackage{titlesec}

\RequirePackage{enumitem}
\RequirePackage{listings}

\RequirePackage[table]{xcolor}
\RequirePackage{array}
\RequirePackage{mathtools}

\usepackage{amsmath}
\RequirePackage{float}
\RequirePackage{boldline}
\RequirePackage{fontspec}
\RequirePackage{longtable}

\usepackage{Times}
\setCJKmainfont{Simsun.ttc}
\setCJKmainfont{Simsun.ttc}[BoldFont=SimHei.ttf]

\setCJKmainfont{Simsun.ttc}
\setCJKmainfont{Simsun.ttc}[BoldFont=SimHei.ttf]

% \setCJKmainfont[
%   Path = fonts/ ,
%   Extension = .ttf ,
%   BoldFont = SimHei ,
%   ItalicFont = simkai ,
% ]{SimSun}

\usepackage[normalem]{ulem}
\renewcommand{\ULthickness}{1pt}
\newfontfamily\heading{Simsun.ttc}

\setlength{\parindent}{12pt}
\setlength{\baselineskip}{20pt}

\usepackage[sorting=none, backend=bibtex]{biblatex}

% \setcounter{secnumdepth}{3}
% \renewcommand\thesection{\CJKnumber{\arabic{section}}}
% \renewcommand\thesubsection{\arabic{subsection}.}
% \renewcommand\thesubsubsection{(\arabic{subsubsection})}
% \titleformat*{\section}{\large\bfseries}
% \titleformat*{\subsection}{\normalsize\bfseries}
% \titleformat*{\subsubsection}{\normalsize}
% \titlespacing{\subsection}{1em}{*4}{*1.5}
% \titlespacing{\subsubsection}{1em}{*4}{*1.5}



\newcommand{\makecover}{
    \newgeometry{bottom=0cm}
    \thispagestyle{empty} 
    \begin{center}
        \vspace*{0.6cm}
        \bfseries\fontfamily{heading}\fontsize{26pt}{\baselineskip}\selectfont{《无线通信技术》课程报告}\\
        \vspace{1.3cm}
        \bfseries\fontfamily{heading}\fontsize{18pt}{\baselineskip}\selectfont{5G信道编码技术}
        \vspace{3.2cm}
        \begin{center}
            \renewcommand{\arraystretch}{1.65}
            \centering
            \normalsize
            \normalfont
            \begin{tabular}{m{6em} m{6.7cm}} 
              {\fontsize{16}{16}\selectfont 姓 \hspace{1.4em} 名：} & \uline{{\fontsize{16}{16}\selectfont 汤浩} \hfill} \\
              {\fontsize{16}{16}\selectfont 学 \hspace{1.4em} 号：} & \uline{{\fontsize{16}{16}\selectfont 19308147} \hfill} \\
              {\fontsize{16}{16}\selectfont 年级专业：}    & \uline{{\fontsize{16}{16}\selectfont 大三电子信息} \hfill} \\
              {\fontsize{16}{16}\selectfont 学 \hspace{1.36em} 院：} & \uline{{\fontsize{16}{16}\selectfont 电子与通信工程学院} \hfill} \\
            \end{tabular}
        \end{center}
    \end{center}
    
    \vspace*{9.1cm}
    \begin{center}
    {\fontsize{16}{16}\selectfont 2022 年 5 月 4 号}
    \end{center}
    
    \restoregeometry
    \newpage
}