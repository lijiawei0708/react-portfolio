import { useEffect, useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import {
  experience,
  highlights,
  profile,
  projects,
  skillGroups,
} from "./data";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lang, setLang] = useState<"en" | "zh">("en");
  const [scrollY, setScrollY] = useState(0);

  const content = {
    en: {
      nav: ["About", "Experience", "Projects", "Skills", "Contact"],
      kicker: "Brisbane • Australia • Open for new opportunities",
      heroTitle: "Hi, I'm Jiawei Li",
      heroTitleAccent: " — I build modern enterprise products.",
      heroMeta: ["React + TypeScript", "C# + .NET", "Azure + DevOps", "GraphQL + REST"],
      heroIntro: profile.summary,
      primaryCta: "View my work",
      secondaryCta: "Contact me",
      status: profile.status,
      profileLabel: "Profile",
      aboutEyebrow: "About me",
      aboutTitle: "Frontend depth. Full-stack delivery.",
      aboutParagraphs: [
        "My strongest area is modern frontend engineering with React, TypeScript and GraphQL. Over time, my role has expanded into backend services, APIs, databases, cloud infrastructure, deployment and production support.",
        "I enjoy working across the full delivery lifecycle: turning requirements into maintainable UI, connecting applications to robust APIs and databases, automating deployment, and helping keep production systems healthy after release.",
      ],
      focusItems: [
        { title: "Modernisation", body: "Replacing legacy functionality with maintainable modern web solutions." },
        { title: "Delivery", body: "CI/CD, formal releases, cloud deployments and cross-team coordination." },
        { title: "Reliability", body: "Production troubleshooting across frontend, APIs, databases and Kubernetes." },
      ],
      experienceTitle: "Building and supporting enterprise software.",
      projectsTitle: "Projects that show how I work across the stack.",
      skillsTitle: "A practical stack for modern enterprise delivery.",
      contactEyebrow: "Contact",
      contactTitle: "Let’s build something useful.",
      contactText: `I’m based in ${profile.location} and have unrestricted work rights in Australia.`,
      footerBuilt: "Built with React + TypeScript",
      selectedWork: "Selected work",
    },
    zh: {
      nav: ["关于", "经历", "项目", "技能", "联系"],
      kicker: "布里斯班 • 澳洲 • 开放寻找新机会",
      heroTitle: "你好，我是 Jiawei Li",
      heroTitleAccent: " — 我构建现代企业级产品。",
      heroMeta: ["React + TypeScript", "C# + .NET", "Azure + DevOps", "GraphQL + REST"],
      heroIntro:
        "全栈开发工程师，具备扎实的前端能力，并在后端、云和 DevOps 方面积累了丰富实践。我负责用 React、TypeScript、GraphQL、C#/.NET、SQL Server 和 Azure 构建并现代化企业级 Web 应用，并支持从开发到发布再到生产环境维护的全流程。",
      primaryCta: "看看我的作品",
      secondaryCta: "联系我",
      status: "澳大利亚永久居民",
      profileLabel: "个人资料",
      aboutEyebrow: "关于我",
      aboutTitle: "前端深度，全面交付。",
      aboutParagraphs: [
        "我最擅长的是使用 React、TypeScript 和 GraphQL 构建现代前端工程。随着时间推移，我的职责逐步扩展到后端服务、API、数据库、云基础设施、部署与生产支持等环节。",
        "我喜欢参与完整的交付链路：将需求落成可维护的前端界面、把应用接入稳健的 API 和数据库、自动化部署，并在发布后持续保障生产环境健康运行。",
      ],
      focusItems: [
        { title: "现代化", body: "用可维护的现代 Web 方案替换传统系统中的老功能。" },
        { title: "交付", body: "负责 CI/CD、正式发布、云部署以及跨团队协作。" },
        { title: "可靠性", body: "覆盖前端、API、数据库与 Kubernetes 的生产故障排查。" },
      ],
      experienceTitle: "构建并支持企业级软件。",
      projectsTitle: "展示我如何在全栈工作中交付价值。",
      skillsTitle: "适用于现代企业交付的实用技术栈。",
      contactEyebrow: "联系",
      contactTitle: "让我们一起做些有价值的东西。",
      contactText: `我位于 ${profile.location}，并拥有澳大利亚的工作权。`,
      footerBuilt: "使用 React + TypeScript 构建",
      selectedWork: "精选作品",
    },
  } as const;

  const sectionText = content[lang];
  const sectionPy = { xs: 7, md: 10 } as const;

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: {
            main: theme === "dark" ? "#67e8f9" : "#0b6bd8",
          },
          secondary: {
            main: theme === "dark" ? "#7cf7c5" : "#1a8f6b",
          },
          background: {
            default: theme === "dark" ? "#07111d" : "#edf4fb",
            paper: theme === "dark" ? "#0c1928" : "#ffffff",
          },
          text: {
            primary: theme === "dark" ? "#edf4fb" : "#102033",
            secondary: theme === "dark" ? "#9bb0c2" : "#5d6f84",
          },
        },
        shape: {
          borderRadius: 18,
        },
        typography: {
          fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
          h1: {
            fontWeight: 900,
            letterSpacing: "-0.065em",
            lineHeight: 0.96,
          },
          h2: {
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 1.02,
          },
          h3: {
            fontWeight: 700,
            letterSpacing: "-0.04em",
          },
          button: {
            textTransform: "none",
            fontWeight: 700,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                paddingLeft: 22,
                paddingRight: 22,
                boxShadow: "none",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.08)",
              },
            },
          },
        },
      }),
    [theme]
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            theme === "dark"
              ? "radial-gradient(circle at 15% 20%, rgba(103,232,249,0.14), transparent 24rem), radial-gradient(circle at 85% 10%, rgba(124,247,197,0.12), transparent 28rem), linear-gradient(180deg, #07111d 0%, #07111d 40%, #0b1522 100%)"
              : "radial-gradient(circle at 15% 20%, rgba(11,107,216,0.12), transparent 28rem), radial-gradient(circle at 85% 10%, rgba(26,143,107,0.12), transparent 30rem), linear-gradient(180deg, #edf4fb 0%, #edf4fb 40%, #eaf2fb 100%)",
        }}
      >
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            borderBottom: 1,
            borderColor: theme === "dark" ? "rgba(103,232,249,0.18)" : "rgba(11,107,216,0.12)",
            backgroundColor: theme === "dark" ? "rgba(7,17,29,0.78)" : "rgba(237,244,251,0.82)",
            backdropFilter: "blur(20px)",
            boxShadow: theme === "dark" ? "0 10px 30px rgba(2,6,23,0.22)" : "0 10px 24px rgba(15,31,50,0.08)",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ minHeight: 76, justifyContent: "space-between" }}>
              <Box
                component="a"
                href="#top"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  textDecoration: "none",
                  color: "text.primary",
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 2.5,
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, rgba(103,232,249,0.25), rgba(255,255,255,0.06))",
                    border: "1px solid",
                    borderColor: "divider",
                    color: "primary.main",
                  }}
                >
                  JL
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
                    Jiawei Li
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    {sectionText.nav[3]}
                  </Typography>
                </Box>
              </Box>

              <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", md: "flex" } }}>
                {sectionText.nav.map((item, index) => {
                  const ids = ["about", "experience", "projects", "skills", "contact"];
                  return (
                    <Button
                      key={item}
                      color="inherit"
                      onClick={() => scrollTo(ids[index])}
                      sx={{
                        borderRadius: 999,
                        color: "text.secondary",
                        fontWeight: 600,
                        minWidth: 0,
                        px: 1.5,
                        py: 1,
                        "&:hover": {
                          color: "text.primary",
                          backgroundColor: "rgba(255,255,255,0.04)",
                        },
                      }}
                    >
                      {item}
                    </Button>
                  );
                })}
              </Stack>

              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Paper
                  sx={{
                    p: 0.5,
                    display: "flex",
                    borderRadius: 999,
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: theme === "dark" ? "rgba(12,25,40,0.9)" : "rgba(255,255,255,0.7)",
                  }}
                >
                  <Button
                    variant={lang === "en" ? "contained" : "text"}
                    color="primary"
                    onClick={() => setLang("en")}
                    sx={{ borderRadius: 999, minWidth: 0, px: 1.25, py: 0.6 }}
                  >
                    EN
                  </Button>
                  <Button
                    variant={lang === "zh" ? "contained" : "text"}
                    color="primary"
                    onClick={() => setLang("zh")}
                    sx={{ borderRadius: 999, minWidth: 0, px: 1.25, py: 0.6 }}
                  >
                    中文
                  </Button>
                </Paper>

                <IconButton
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: theme === "dark" ? "rgba(12,25,40,0.9)" : "rgba(255,255,255,0.7)",
                  }}
                >
                  {theme === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
                </IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>

        <Box component="main" id="top" sx={{ pb: 8 }}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={5}
              className="reveal"
              sx={{ py: { xs: 5, md: 8 }, alignItems: "center" }}
            >
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={2.5}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "primary.main",
                      letterSpacing: "0.16em",
                      fontWeight: 800,
                    }}
                  >
                    {sectionText.kicker}
                  </Typography>

                  <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 88 } }}>
                    {sectionText.heroTitle}
                    <Box component="span" sx={{ color: "text.secondary" }}>
                      {sectionText.heroTitleAccent}
                    </Box>
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                    {sectionText.heroMeta.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        variant="outlined"
                        sx={{ borderRadius: 999, px: 0.5, py: 0.2, color: "text.secondary" }}
                      />
                    ))}
                  </Stack>

                  <Typography variant="h6" sx={{ color: "text.secondary", lineHeight: 1.8, fontWeight: 400 }}>
                    {sectionText.heroIntro}
                  </Typography>

                  <Stack direction="row" spacing={1.5} sx={{ flexWrap: "wrap" }}>
                    <Button variant="contained" color="primary" onClick={() => scrollTo("projects")}>
                      {sectionText.primaryCta}
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      component="a"
                      href={`mailto:${profile.email}`}
                    >
                      {sectionText.secondaryCta}
                    </Button>
                  </Stack>

                  <Stack direction="row" spacing={1} sx={{ color: "text.secondary", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: "secondary.main",
                        boxShadow: "0 0 0 6px rgba(124,247,197,0.18)",
                      }}
                    />
                    <Typography variant="body2">{sectionText.status}</Typography>
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Card
                  sx={{
                    borderRadius: 4,
                    border: "1px solid",
                    borderColor: theme === "dark" ? "rgba(103,232,249,0.38)" : "rgba(11,107,216,0.25)",
                    background: `linear-gradient(145deg, ${theme === "dark" ? "#102238" : "#eef5fb"}, ${theme === "dark" ? "#0c1928" : "#ffffff"})`,
                    boxShadow: theme === "dark" ? "0 24px 60px rgba(2,6,23,0.55)" : "0 20px 52px rgba(15,31,50,0.12)",
                    transform: `translateY(${Math.min(scrollY * 0.08, 18)}px) rotate(1.1deg)`,
                    transition: "transform 180ms ease, box-shadow 180ms ease",
                    "&:hover": {
                      transform: `translateY(${Math.min(scrollY * 0.08, 18)}px) rotate(0.6deg)`,
                      boxShadow: theme === "dark" ? "0 30px 72px rgba(2,6,23,0.6)" : "0 24px 64px rgba(15,31,50,0.16)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      p: 1.5,
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    {[1, 2, 3].map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          backgroundColor: "text.secondary",
                          opacity: 0.5,
                        }}
                      />
                    ))}
                  </Box>

                  <CardContent sx={{ p: 2.5, pb: 2.5 }}>
                    <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: "center" }}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 3,
                          display: "grid",
                          placeItems: "center",
                          background: "linear-gradient(135deg, #67e8f9, rgba(125,211,252,0.3))",
                          color: "#06111c",
                          fontWeight: 900,
                        }}
                      >
                        JL
                      </Box>

                      <Box>
                        <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.14em" }}>
                          {sectionText.profileLabel}
                        </Typography>
                        <Typography variant="h5" sx={{ mt: 0.2 }}>
                          {profile.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {profile.role}
                        </Typography>
                      </Box>
                    </Stack>

                    <Grid container spacing={1.5} sx={{ mb: 2 }}>
                      {highlights.map((item) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={item.label}>
                          <Paper
                            variant="outlined"
                            sx={{
                              p: 1.5,
                              borderRadius: 3,
                              backgroundColor: "transparent",
                              borderColor: "divider",
                            }}
                          >
                            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                              {item.value}
                            </Typography>
                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                              {item.label}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>

                    <Box
                      component="pre"
                      sx={{
                        m: 0,
                        p: 2,
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        backgroundColor: "rgba(7,17,29,0.2)",
                        color: "secondary.main",
                        overflowX: "auto",
                        fontSize: 14,
                        lineHeight: 1.8,
                        fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
                      }}
                    >
                      {`const developer = {
  name: "Jiawei Li (Chris)",
  focus: [
    "React + TypeScript",
    "C# + .NET",
    "GraphQL + REST",
    "Azure + Kubernetes"
  ],
  mindset: "build · ship · support"
};`}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Paper
              variant="outlined"
              className="reveal"
              sx={{
                mt: 1,
                borderRadius: 0,
                borderLeft: 0,
                borderRight: 0,
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            >
              <Grid container>
                {highlights.map((item) => (
                  <Grid size={{ xs: 12, md: 4 }} key={item.label}>
                    <Box
                      sx={{
                        minHeight: 150,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        px: 3,
                        py: 2,
                        borderRight: { md: "1px solid", xs: 0 },
                        borderTop: { xs: "1px solid", md: 0 },
                        borderColor: "divider",
                      }}
                    >
                      <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 42 } }}>
                        {item.value}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary" }}>
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            <Box id="about" className="reveal" sx={{ py: sectionPy }}>
              <Grid container spacing={4} sx={{ mb: 4, alignItems: "flex-end" }}>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.16em", fontWeight: 800 }}
                  >
                    {sectionText.aboutEyebrow}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: 36, md: 64 } }}>
                    {sectionText.aboutTitle}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={6}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack spacing={2}>
                    {sectionText.aboutParagraphs.map((paragraph, index) => (
                      <Typography key={index} variant="body1" sx={{ color: "text.secondary", lineHeight: 1.9 }}>
                        {paragraph}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
                    {sectionText.focusItems.map((item, index) => (
                      <Box
                        key={item.title}
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "48px 1fr",
                          gap: 1,
                          py: 2,
                          borderBottom: "1px solid",
                          borderColor: "divider",
                        }}
                      >
                        <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 800 }}>
                          {String(index + 1).padStart(2, "0")}
                        </Typography>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                            {item.body}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box id="experience" className="reveal" sx={{ py: sectionPy }}>
              <Grid container spacing={4} sx={{ mb: 4, alignItems: "flex-end" }}>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.16em", fontWeight: 800 }}
                  >
                    {sectionText.nav[1]}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: 36, md: 64 } }}>
                    {sectionText.experienceTitle}
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
                {experience.map((item) => (
                  <Grid
                    container
                    key={`${item.company}-${item.period}`}
                    sx={{ borderBottom: "1px solid", borderColor: "divider", py: 3.5 }}
                  >
                    <Grid size={{ xs: 12, md: 3 }}>
                      <Stack spacing={1} sx={{ color: "text.secondary" }}>
                        <Typography variant="body2">{item.period}</Typography>
                        <Typography variant="body2">{item.location}</Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 9 }}>
                      <Typography variant="body1" sx={{ color: "primary.main", fontWeight: 800, mb: 0.5 }}>
                        {item.company}
                      </Typography>
                      <Typography variant="h4" sx={{ mb: 1.5 }}>
                        {item.role}
                      </Typography>
                      <Stack component="ul" spacing={1} sx={{ pl: 2.5, m: 0 }}>
                        {item.bullets.map((bullet) => (
                          <Typography component="li" variant="body1" key={bullet} sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                            {bullet}
                          </Typography>
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                ))}
              </Box>
            </Box>

            <Box id="projects" className="reveal" sx={{ py: sectionPy }}>
              <Grid container spacing={4} sx={{ mb: 4, alignItems: "flex-end" }}>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.16em", fontWeight: 800 }}
                  >
                    {sectionText.selectedWork}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: 36, md: 64 } }}>
                    {sectionText.projectsTitle}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2.5}>
                {projects.map((project, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={project.title}>
                    <Card
                      sx={{
                        height: "100%",
                        minHeight: { xs: 320, md: 360 },
                        border: "1px solid",
                        borderColor: theme === "dark" ? "rgba(103,232,249,0.18)" : "rgba(11,107,216,0.12)",
                        background: `linear-gradient(145deg, ${theme === "dark" ? "#0c1928" : "#ffffff"}, ${theme === "dark" ? "#102238" : "#eef5fb"})`,
                        transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                        boxShadow: 0,
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: theme === "dark" ? "0 18px 42px rgba(2,6,23,0.28)" : "0 18px 36px rgba(15,31,50,0.1)",
                          borderColor: theme === "dark" ? "rgba(103,232,249,0.38)" : "rgba(11,107,216,0.24)",
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", pb: 2.5 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                          <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 800 }}>
                            {String(index + 1).padStart(2, "0")}
                          </Typography>
                          <Chip
                            label="Case study"
                            variant="outlined"
                            size="small"
                            sx={{ borderRadius: 999, px: 0.5 }}
                          />
                        </Box>

                        <Typography variant="h4" sx={{ mb: 1.5 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2 }}>
                          {project.description}
                        </Typography>

                        <Stack direction="row" sx={{ mt: "auto", flexWrap: "wrap", gap: 0.75 }}>
                          {project.stack.map((item) => (
                            <Chip
                              key={item}
                              label={item}
                              variant="outlined"
                              size="small"
                              sx={{
                                borderRadius: 999,
                                color: "text.secondary",
                                fontSize: 12,
                                height: 28,
                                px: 0.75,
                              }}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box id="skills" className="reveal" sx={{ py: sectionPy }}>
              <Grid container spacing={4} sx={{ mb: 4, alignItems: "flex-end" }}>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.16em", fontWeight: 800 }}
                  >
                    {sectionText.nav[3]}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: 36, md: 64 } }}>
                    {sectionText.skillsTitle}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2.5}>
                {skillGroups.map((group) => (
                  <Grid size={{ xs: 12, md: 6 }} key={group.title}>
                    <Card
                      sx={{
                        height: "100%",
                        border: "1px solid",
                        borderColor: "divider",
                        background: `linear-gradient(145deg, ${theme === "dark" ? "#0c1928" : "#ffffff"}, ${theme === "dark" ? "#102238" : "#eef5fb"})`,
                        overflow: "hidden",
                      }}
                    >
                      <CardContent
                        sx={{
                          p: { xs: 2.25, md: 2.75 },
                          "&:last-child": { pb: { xs: 2.25, md: 2.75 } },
                        }}
                      >
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                          {group.title}
                        </Typography>
                        <Stack
                          direction="row"
                          sx={{
                            flexWrap: "wrap",
                            gap: 0.75,
                            alignItems: "center",
                            rowGap: 0.75,
                          }}
                        >
                          {group.items.map((item) => (
                            <Chip
                              key={item}
                              label={item}
                              variant="outlined"
                              sx={{
                                borderRadius: 999,
                                color: "text.secondary",
                                px: 0.9,
                                py: 0.3,
                                fontWeight: 600,
                                fontSize: 12,
                                height: 30,
                              }}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box id="contact" className="reveal" sx={{ py: sectionPy }}>
              <Paper
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  p: { xs: 3, md: 4 },
                  borderColor: theme === "dark" ? "rgba(103,232,249,0.38)" : "rgba(11,107,216,0.24)",
                  background: `linear-gradient(145deg, ${theme === "dark" ? "rgba(12,25,40,0.96)" : "rgba(255,255,255,0.9)"}, ${theme === "dark" ? "rgba(16,34,56,0.96)" : "rgba(238,244,249,0.96)"})`,
                  boxShadow: theme === "dark" ? "0 24px 56px rgba(2,6,23,0.42)" : "0 20px 46px rgba(15,31,50,0.1)",
                }}
              >
                <Grid container spacing={3} sx={{ alignItems: "center" }}>
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography
                      variant="overline"
                      sx={{ color: "primary.main", letterSpacing: "0.16em", fontWeight: 800 }}
                    >
                      {sectionText.contactEyebrow}
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: 36, md: 60 } }}>
                      {sectionText.contactTitle}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, color: "text.secondary", lineHeight: 1.8 }}>
                      {sectionText.contactText}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }}>
                    <Stack spacing={1.5} sx={{ alignItems: { xs: "flex-start", md: "flex-end" } }}>
                      <Link
                        href={`mailto:${profile.email}`}
                        underline="none"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "primary.main",
                          fontWeight: 700,
                          px: 1.25,
                          py: 0.75,
                          borderRadius: 2,
                          border: "1px solid",
                          borderColor: "divider",
                          backgroundColor: theme === "dark" ? "rgba(103,232,249,0.06)" : "rgba(11,107,216,0.04)",
                          transition: "transform 180ms ease, background-color 180ms ease",
                          "&:hover": {
                            backgroundColor: theme === "dark" ? "rgba(103,232,249,0.09)" : "rgba(11,107,216,0.07)",
                            transform: "translateY(-1px)",
                          },
                        }}
                      >
                        <MailOutlined fontSize="small" />
                        {profile.email}
                      </Link>
                      <Link
                        href={`tel:${profile.phone.replace(/\s/g, "")}`}
                        underline="none"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "primary.main",
                          fontWeight: 700,
                          px: 1.25,
                          py: 0.75,
                          borderRadius: 2,
                          border: "1px solid",
                          borderColor: "divider",
                          backgroundColor: theme === "dark" ? "rgba(103,232,249,0.06)" : "rgba(11,107,216,0.04)",
                          transition: "transform 180ms ease, background-color 180ms ease",
                          "&:hover": {
                            backgroundColor: theme === "dark" ? "rgba(103,232,249,0.09)" : "rgba(11,107,216,0.07)",
                            transform: "translateY(-1px)",
                          },
                        }}
                      >
                        <PhoneOutlined fontSize="small" />
                        {profile.phone}
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Divider sx={{ borderColor: "divider" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              py: 3,
              color: "text.secondary",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Typography variant="body2">© {new Date().getFullYear()} Jiawei Li (Chris)</Typography>
            <Typography variant="body2">{sectionText.footerBuilt}</Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
