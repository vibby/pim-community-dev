<?php
namespace Pim\Bundle\CatalogTaxinomyBundle\Model;

use Oro\Bundle\FlexibleEntityBundle\Doctrine\BaseEntityManager;

/**
 * Locale manager
 *
 * @author    Romain Monceau <romain@akeneo.com>
 * @copyright 2012 Akeneo SAS (http://www.akeneo.com)
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 *
 */
class LocaleManager extends BaseEntityManager
{

    /**
     * {@inheritdoc}
     */
    public function getEntityShortname()
    {
        return 'PimCatalogTaxinomyBundle:Locale';
    }

    /**
     * Disable old default locale
     */
    public function disableOldDefaultLocale()
    {
        $locales = $this->getEntityRepository()->findBy(array('isDefault' => 1));
        foreach ($locales as $locale) {
            $locale->setIsDefault(false);
            $manager->persist($locale);
        }
    }

}
