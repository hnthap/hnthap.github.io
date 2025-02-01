"strict";

/**
 * @typedef {{
 *  title: string;
 *  organization: string;
 *  organizationUrl: string;
 * }} SummaryItem
 *
 * @typedef {{
 *  title: string;
 *  subtitle: string;
 *  urls: string[];
 *  organization: string;
 *  time: string;
 * }} CertificateItem
 */

(function () {
  /** @type {SummaryItem[]} */
  const summaryItems = [
    {
      title: "Senior Computer Science Student",
      organization:
        "University of Information Technology, " +
        "Vietnam National University - HCMC",
      organizationUrl: "https://en.uit.edu.vn/",
    },
  ];
  const emails = ["huynhnhanthap[at]gmail.com", "21521457[at]gm.uit.edu.vn"];
  const interests = [
    "deep learning",
    "natural language processing",
    "computer vision",
    "front-end development",
  ];
  /** @type {CertificateItem[]} */
  const certificates = [
    {
      title: "Nvidia Certificate",
      subtitle: "Applications of AI for Anomaly Detection",
      urls: ["https://learn.nvidia.com/certificates?id=vLgidM8gQNKIcff_r83tCw"],
      organization: "Nvidia",
      time: "Nov 2024",
    },
    {
      title: "Google Career Certificate",
      subtitle: "Google AI Essentials",
      urls: [
        "https://www.coursera.org/account/accomplishments/verify/" +
          "RIEO4HGVK5C4",
      ],
      organization: "Google",
      time: "Sep 2024",
    },
  ];

  document.title = FULL_NAME;

  $("#root").append(
    PageTop(FULL_NAME),
    Summary(summaryItems, emails, interests),
    CertificateList(certificates)
  );
})();

/**
 * @param {SummaryItem[]} itemList
 * @param {string[]} emails
 * @param {string[]} interests
 * @returns {JQuery<HTMLElement>}
 */
function Summary(itemList, emails, interests) {
  const content = $("<div>");
  content.addClass("content");
  content.append(
    $("<p>").append(
      $("<strong>").text(FULL_NAME).css("font-size", "var(--medium-font)"),
      " &nbsp; [&nbsp;",
      $("<a>").text("GitHub").attr("href", Accounts.GITHUB),
      " | ",
      $("<a>").text("LinkedIn").attr("href", Accounts.LINKED_IN),
      "&nbsp;]"
    ),
    ...itemList.map((item) =>
      $("<p>").append(
        $("<strong>").text(item.title),
        $("<br>"),
        $("<a>").text(item.organization).attr("href", item.organizationUrl)
      )
    ),
    $("<p>").append(
      $("<span>").addClass("it").append("Email:&nbsp;"),
      emails.join(" &nbsp;or&nbsp; ")
    ),
    $("<p>").append(
      $("<span>").addClass("it").append("Interests:&nbsp;"),
      interests.join(", ") + "."
    )
  );
  const summary = $("<div>");
  summary.addClass("summary");
  summary.append(Portrait(), content);
  return summary;
}

function Portrait() {
  const portrait = $("<img>");
  portrait.addClass("portrait");
  portrait.attr("src", Images.PORTRAIT);
  return portrait;
}

/**
 *
 * @param {CertificateItem[]} certificates
 * @returns {JQuery<HTMLElement>}
 */
function CertificateList(certificates) {
  const span = $("<span>");
  span.append(Section("Certificates"), ...certificates.map(Certificate));
  return span;
}

/**
 *
 * @param {CertificateItem} certificate
 */
function Certificate(certificate) {
  const table = $("<table>");
  table.addClass("experience");
  table.append(
    $("<tr>").append(
      $("<td>").addClass("left").append($("<strong>").text(certificate.title)),
      $("<td>").addClass("right").text(certificate.organization)
    ),
    $("<tr>").append(
      $("<td>")
        .addClass("left")
        .append(
          $("<span>")
            .addClass("it")
            .append("&nbsp;&nbsp; " + certificate.subtitle),
          CertificateVerify(certificate.urls)
        ),
      $("<td>").addClass("right it").text(certificate.time)
    )
  );
  return table;
}

/**
 * @param {string[]} urls
 */
function CertificateVerify(urls) {
  const span = $("<span>");
  span.append(
    " &nbsp; [&nbsp;",
    ...urls.map((url) => $("<a>").text("verify").attr("href", url)),
    "&nbsp;]"
  );
  return span;
}
