\LoadClassWithOptions{article}

\RequirePackage{xeCJK}
\usepackage[UTF8]{ctex}
% \RequirePackage{zhnumber}
\usepackage{abstract}

\newfontfamily\headingfont{simhei.ttf}

\renewcommand{\abstractnamefont}{\bfseries}
\renewcommand{\abstractname}{abstract}

\RequirePackage{graphicx}
\RequirePackage{geometry}
\RequirePackage{titlesec}

\RequirePackage{enumitem}
\RequirePackage{listings}

\RequirePackage[table]{xcolor}
\RequirePackage{array}
\RequirePackage{mathtools}

\usepackage{amsmath, amssymb}
\RequirePackage{float}
\RequirePackage{boldline}
\RequirePackage{fontspec}
\RequirePackage{longtable}
\usepackage{lmodern}

\setmainfont{Times New Roman}
\setCJKmainfont{Simsun.ttc}
\setCJKmainfont{Simsun.ttc}[BoldFont=SimHei.ttf]

\setCJKmainfont{Simsun.ttc}
\setCJKmainfont{Simsun.ttc}[BoldFont=SimHei.ttf]


\usepackage{iftex}
\ifPDFTeX
  \usepackage[T1]{fontenc}
  \usepackage[utf8]{inputenc}
  \usepackage{textcomp} % provide euro and other symbols
\else % if luatex or xetex
  \usepackage{unicode-math}
  \defaultfontfeatures{Scale=MatchLowercase}
  \defaultfontfeatures[\rmfamily]{Ligatures=TeX,Scale=1}
\fi

\IfFileExists{upquote.sty}{\usepackage{upquote}}{}
\IfFileExists{microtype.sty}{% use microtype if available
  \usepackage[]{microtype}
  \UseMicrotypeSet[protrusion]{basicmath} % disable protrusion for tt fonts
}{}
\makeatletter
\@ifundefined{KOMAClassName}{% if non-KOMA class
  \IfFileExists{parskip.sty}{%
    \usepackage{parskip}
  }{% else
    \setlength{\parindent}{0pt}
    \setlength{\parskip}{6pt plus 2pt minus 1pt}}
}{% if KOMA class
  \KOMAoptions{parskip=half}}
\makeatother
\usepackage{xcolor}
\IfFileExists{xurl.sty}{\usepackage{xurl}}{} % add URL line breaks if available
\IfFileExists{bookmark.sty}{\usepackage{bookmark}}{\usepackage{hyperref}}
\hypersetup{
  pdftitle={A survey on 5G channel encoding technology},
  pdfauthor={19308147 Tang Hao},
  hidelinks,
  pdfcreator={LaTeX via pandoc}}
\urlstyle{same} % disable monospaced font for URLs
\usepackage{graphicx}
\makeatletter
\def\maxwidth{\ifdim\Gin@nat@width>\linewidth\linewidth\else\Gin@nat@width\fi}
\def\maxheight{\ifdim\Gin@nat@height>\textheight\textheight\else\Gin@nat@height\fi}
\makeatother
% Scale images if necessary, so that they will not overflow the page
% margins by default, and it is still possible to overwrite the defaults
% using explicit options in \includegraphics[width, height, ...]{}
\setkeys{Gin}{width=\maxwidth,height=\maxheight,keepaspectratio}
% Set default figure placement to htbp

\makeatletter
\def\fps@figure{htbp}
\makeatother

\setlength{\emergencystretch}{3em} % prevent overfull lines

\providecommand{\tightlist}{%
  \setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}
% \setcounter{secnumdepth}{-\maxdimen} % remove section numbering
\ifLuaTeX
  \usepackage{selnolig}  % disable illegal ligatures
\fi

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
\usepackage{caption}
\captionsetup[figure]{name=Figure}


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