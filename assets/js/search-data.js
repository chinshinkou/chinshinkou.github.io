// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-conferences-international",
              title: "Conferences (International)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/conferences-international/";
              },
            },{id: "dropdown-conferences-japanese",
              title: "Conferences (Japanese)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/conferences-japanese/";
              },
            },{id: "dropdown-journals-international",
              title: "Journals (International)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/journals-international/";
              },
            },{id: "dropdown-journals-japanese",
              title: "Journals (Japanese)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/journals-japanese/";
              },
            },{id: "dropdown-others",
              title: "Others",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/others/";
              },
            },{id: "dropdown-コンピュータシステムii",
              title: "コンピュータシステムII",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lectures/computer_system_2/";
              },
            },{id: "dropdown-人工知能基礎と演習",
              title: "人工知能基礎と演習",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/";
              },
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第1回) AIの概要と歴史、Pythonのインストール",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_01/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第2回) Pythonの基本操作、グラフの描画（2次元と3次元のグラフを描く）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_02/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第3回) 機械学習に必要な数学の基本（ベクトル、微分）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_03/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第4回) 機械学習に必要な数学の基本（偏微分、行列、関数）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_04/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第5回) 機械学習の原理と手法",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_05/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第6回) 教師あり学習：回帰（平均二乗誤差、勾配降下法）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_06/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第7回) 教師あり学習：回帰（線形基底関数モデル、オーバーフィッティング）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_07/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第9回) 教師あり学習：分類（最尤推定）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_09/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第10回) 教師あり学習：分類（ロジスティック回帰モデル）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_10/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第11回) 教師なし学習：K-means法、EMアルゴリズム",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_11/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第12回) ニューラルネットワーク",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_12/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第13回) 簡単なディープランニング",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_13/";
            },},{id: "lectures-人工知能基礎と演習",
          title: '人工知能基礎と演習',
          description: "(第14回) ニューラルネットワークの応用",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/artificial_intelligence_fundamentals_and_exercises/course_14/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第1回) コンピュータのシステムとしての基本構成",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_01/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第2回) ソフトウエアの概要",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_02/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第4回) プログラム（プログラミング言語＆言語プロセッサ）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_04/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第5回) プログラム（プログラミング）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_05/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第7回) オペレーティングシステムⅠ（OSとは、タスク管理）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_07/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第9回) オペレーティングシステムII（入出力、主記憶管理）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_09/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第10回) オペレーティングシステムIII（ファイルシステム、ユーティリティプログラム）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_10/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第11回) データベースⅠ（データベースの特徴と構成、正規化）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_11/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第12回) データベースII（SQL言語、データ操作）",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_12/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第13回) 通信ネットワーク、LAN",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_13/";
            },},{id: "lectures-コンピュータシステムii",
          title: 'コンピュータシステムII',
          description: "(第14回) 情報セキュリテイ",
          section: "Lectures",handler: () => {
              window.location.href = "/lectures/computer_system_2/course_14/";
            },},{id: "news-renew-my-homepage",
          title: 'Renew my homepage.',
          description: "",
          section: "News",},{id: "news-paper-accepted-by-tsd2025",
          title: 'Paper accepted by TSD2025.',
          description: "",
          section: "News",},{id: "news-paper-accepted-by-ai2a2025",
          title: 'Paper accepted by AI2A2025.',
          description: "",
          section: "News",},{id: "news-paper-accepted-by-information",
          title: 'Paper accepted by Information.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63-%63%68%65%6E%68%61%6F@%66%69%74.%61%63.%6A%70", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Cso3XCQAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-0811-4667", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
